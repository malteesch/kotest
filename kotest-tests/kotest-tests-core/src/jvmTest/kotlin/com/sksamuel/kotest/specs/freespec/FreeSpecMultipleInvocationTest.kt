package com.sksamuel.kotest.specs.freespec

import io.kotest.core.spec.SpecConfiguration
import io.kotest.shouldBe
import io.kotest.specs.FreeSpec
import java.util.concurrent.atomic.AtomicInteger

class FreeSpecMultipleInvocationTest : FreeSpec() {

  private val counter = AtomicInteger(0)

  init {

    "a" {
      counter.incrementAndGet()
    }

    "b".config(invocations = 3) {
      counter.incrementAndGet()
    }

    "c" - {
      counter.incrementAndGet()
      "d".config(invocations = 4) {
        counter.incrementAndGet()
      }
    }
  }

  override fun afterSpec(spec: SpecConfiguration) {
    counter.get().shouldBe(9)
  }
}
