<script setup lang="ts">
import { ref } from "vue";
import { frequentlyData } from "../../../data/AllData";
import { PhArrowRight, PhMinus, PhPlus } from "@phosphor-icons/vue";
import AnimateHeight from "vue-animate-height";

const showAnswer = ref(0);
function handleClick(id: number) {
  if (id === showAnswer.value) {
    showAnswer.value = NaN;
  } else {
    showAnswer.value = id;
  }
}
import light from '@/assets/images/light.png'
</script>

<template>
  <section class="pt-120 pb-120">
    <div class="container">
      <div class="section-heading">
        <div class="d-flex align-items-center gap-2">
          <div class="title-line"></div>
          <h2 class="display-four n5-color fw-semibold">Have any questions?</h2>
        </div>
        <p class="fs-seven n4-color mt-2 mt-md-4">
          You can use this section to address any queries your potential clients
          may have.
        </p>
      </div>

      <div
        class="row mt-8 mt-md-15 justify-content-between align-items-center gap-3"
      >
        <div class="col-12 col-md-6">
          <div
            v-for="{ id, questions, answers } in frequentlyData"
            :key="id"
            class="p-4 p-md-8 mb-2 mb-md-4 cursor-pointer"
            :class="showAnswer === id ? 'br1' : 'brn4'"
            @click="handleClick(id)"
          >
            <div
              class="question d-flex gap-3 justify-content-between align-items-center rounded-2"
            >
              <div class="d-flex gap-2 align-items-center">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center"
                  :class="
                    showAnswer === id
                      ? 'faq_icon_width_active'
                      : 'faq_icon_width'
                  "
                >
                  <i :class="showAnswer === id ? 'n11-color' : 'p5-color'">
                    <PhArrowRight />
                  </i>
                </div>
                <h3
                  class="fs-seven fw-medium"
                  :class="showAnswer === id ? 'p1-color' : 'n5-color'"
                >
                  {{ questions }}
                </h3>
              </div>
              <span class="p1-color fs-five" v-if="showAnswer === id">
                <PhMinus />
              </span>
              <span class="p1-color fs-five" v-else>
                <PhPlus />
              </span>
            </div>

            <AnimateHeight
              :duration="500"
              :height="showAnswer === id ? 'auto' : 0"
            >
              <p
                class="fs-seven n5-color text-base font-medium leading-[150%] pt-3 pt-md-5"
              >
                {{ answers }}
              </p>
            </AnimateHeight>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <img :src="light" alt="light" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
