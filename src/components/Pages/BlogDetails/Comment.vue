<script setup lang="ts">
import AnimateHeight from "vue-animate-height";
import { commentsData } from "../../../data/AllData";
import { ref } from "vue";
import { PhPaperPlaneTilt } from "@phosphor-icons/vue";

const showAnswer = ref(0);
function handleClick(id: number) {
  if (id === showAnswer.value) {
    showAnswer.value = NaN;
  } else {
    showAnswer.value = id;
  }
}
</script>

<template>
  <section class="mt-8 mt-md-15 comment-section">
    <h3 class="n5-color fs-three fw-semibold mb-4 mb-md-8">3 Comments</h3>

    <div class="py-120">
      <div
        :key="id"
        v-for="{ id, img, name, date, des } in commentsData"
        class="overflow-hidden mb-3 mb-md-6"
      >
        <div
          class="d-flex flex-wrap flex-md-nowrap gap-4 gap-md-8 px-4 px-md-8 py-3 py-md-6 rounded-3 w-100 brn4"
        >
          <div class="flex-shrink-0">
            <img :src="img" alt="..." class="cmnt-img flex-shrink-0" />
          </div>
          <div class="w-100">
            <div
              class="d-flex gap-3 justify-content-between align-items-center w-100"
            >
              <div class="w-100">
                <h6 class="n5-color fs-six fw-medium">{{ name }}</h6>
                <span class="n5-color fs-nine fw-medium">{{ date }}</span>
              </div>
              <button
                @click="handleClick(id)"
                class="px-3 px-md-5 py-2 p1-color br1 rounded-pill"
              >
                Reply
              </button>
            </div>
            <p class="n4-color fs-eight mt-2 mt-md-4">{{ des }}</p>
          </div>
        </div>
        <AnimateHeight :duration="500" :height="showAnswer === id ? 'auto' : 0">
          <div class="reply-answer mt-3 mt-md-6 ms-5 ms-md-10">
            <form>
              <div class="d-flex align-items-center gap-3 gap-md-5">
                <input
                  type="text"
                  placeholder="Enter Your comments"
                  class="px-3 px-md-6 py-2 py-md-4 w-100 brn4 rounded-3 n5-color"
                />
                <button
                  class="fs-six n11-color bg1-color px-3 px-md-5 py-2 rounded-pill"
                >
                  <PhPaperPlaneTilt />
                </button>
              </div>
            </form>
          </div>
        </AnimateHeight>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
