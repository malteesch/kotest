package io.kotest.core.test

import io.kotest.core.plan.Descriptor
import io.kotest.core.sourceRef
import kotlinx.coroutines.CoroutineScope
import kotlin.coroutines.CoroutineContext

/**
 * A [TestContext] is used as the receiver in a test function.
 *
 * This allows the test function to interact with the test engine at runtime.
 * For instance fetching details of the executing test case( such as timeouts, tags),
 * registering a dynamic nested test, or adding a test lifecycle callback.
 *
 * This context extends [CoroutineScope] giving the ability for any test function to launch
 * coroutines directly, without requiring them to supply a coroutine scope, and to retrieve
 * elements from the current [CoroutineContext] via [CoroutineContext.get]
 */
interface TestContext : CoroutineScope {

   /**
    * The currently executing [TestCase].
    */
   val testCase: TestCase

   /**
    * Registers a [NestedTest] with the engine.
    *
    * Will throw if the current test is not a container test.
    */
   suspend fun registerTestCase(nested: NestedTest)
}

/**
 * Registers a [NestedTest] with the engine.
 *
 * Will throw if the current test is not a container test.
 */
suspend fun TestContext.registerTestCase(
   name: DescriptionName.TestName,
   test: suspend TestContext.() -> Unit,
   config: TestCaseConfig,
   type: TestType,
   descriptor: Descriptor.TestDescriptor? = null,
) {
   when (testCase.type) {
      TestType.Container -> {
         val nested = NestedTest(name, test, config, type, sourceRef(), testCase.factoryId, descriptor)
         registerTestCase(nested)
      }
      TestType.Test -> throw InvalidTestConstructionException("Cannot add a nested test to '${testCase.displayName}' because it is not a test container")
   }
}

class InvalidTestConstructionException(msg: String) : RuntimeException(msg)

private class TestContextWithCoroutineContext(
   val delegate: TestContext,
   override val coroutineContext: CoroutineContext
) : TestContext by delegate {
   override fun toString(): String = "TestCaseContext [$coroutineContext]"
}

/**
 * Returns a new [TestContext] which uses the given [coroutineContext] with the other methods
 * delegating to the receiver context.
 */
internal fun TestContext.withCoroutineContext(coroutineContext: CoroutineContext): TestContext =
   if (this is TestContextWithCoroutineContext) {
      TestContextWithCoroutineContext(delegate, coroutineContext)
   } else {
      TestContextWithCoroutineContext(this, coroutineContext)
   }
