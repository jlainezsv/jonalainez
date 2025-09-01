<template>
  <div class="typing-text display-one p1-color mt-2 mb-3">
    {{ currentText }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "TypingAnimation",
  setup() {
    const typingText = ref<string>("");
    const typeArray = ref<string[]>(["Developer", "Designer"]);
    let index = 0;
    let isAdding = true;
    let typeIndex = 0;

    let timeoutId: number | undefined;

    const playAnim = () => {
      timeoutId = window.setTimeout(() => {
        typingText.value = typeArray.value[typeIndex].slice(0, index);

        if (isAdding) {
          if (index >= typeArray.value[typeIndex].length) {
            isAdding = false;
            timeoutId = window.setTimeout(playAnim, 2000); // wait before deleting
            return;
          } else {
            index++;
          }
        } else {
          if (index === 0) {
            isAdding = true;
            typeIndex = (typeIndex + 1) % typeArray.value.length;
          } else {
            index--;
          }
        }

        playAnim();
      }, isAdding ? 200 : 100);
    };

    onMounted(() => {
      playAnim();
    });

    onUnmounted(() => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    });

    return {
      currentText: typingText,
    };
  },
});
</script>

<style scoped></style>
