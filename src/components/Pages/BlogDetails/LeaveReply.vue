<template>
  <section
    data-aos="zoom-in"
    class="reply-section mt-8 mt-md-15 p-5 p-md-10 brn4 rounded-3"
  >
    <h3 class="n5-color fs-three mb-2 mb-md-3">Leave a Reply</h3>
    <p class="n4-color fs-eight">
      Your email address will not be published. Required fields are marked *
    </p>
    <form class="mt-5 mt-md-10">
      <div
        class="d-flex flex-wrap flex-md-nowrap align-items-center gap-3 gap-md-6"
      >
        <input
          type="text"
          placeholder="First Name"
          class="px-4 px-md-8 py-2 py-md-4 w-100 brn4 rounded-3 n5-color"
        />
        <input
          type="text"
          placeholder="Last Name"
          class="px-4 px-md-8 py-2 py-md-4 w-100 brn4 rounded-3 n5-color"
        />
      </div>
      <input
        type="email"
        placeholder="Enter Email"
        class="px-4 px-md-8 py-2 py-md-4 w-100 brn4 rounded-3 n5-color my-3 my-md-6"
      />
      <textarea
        class="n5-color px-3 px-md-5 py-2 py-md-4 rounded-2 brn4 w-100 h-120"
        placeholder="Your Message:"
      ></textarea>

      <div class="d-flex gap-2 align-items-center mt-3 mt-md-5">
        <input id="check" type="checkbox" class="cursor-pointer" />
        <label htmlFor="check" class="n4-color fs-nine cursor-pointer">
          Save my name, email, and website in this browser for the next time.
        </label>
      </div>
      <button
        class="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill mt-5 mt-md-10"
      >
        Post Comment
      </button>
    </form>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
