<template>
  <section class="pb-120">
    <div class="container">
      <div class="section-heading">
        <div class="d-flex align-items-center gap-2">
          <div class="title-line"></div>
          <h2 class="display-four n5-color fw-semibold">Get In Touch</h2>
        </div>
        <p class="fs-seven n4-color mt-2 mt-md-4">
            Available for remote and hybrid opportunities. Let's connect to discuss how I can contribute to your next project or product launch.
        </p>
      </div>

      <form
        ref="form"
        @submit.prevent="sendEmail"
        class="mt-8 mt-md-15 p-5 p-md-10 rounded-5 brn4"
      >
        <div
          class="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6 mb-3 mb-md-6"
        >
          <div
            class="d-flex align-items-center gap-2 px-3 px-md-5 py-2 py-md-4 rounded-2 brn4 w-100"
          >
            <i class="ph ph-octagon p1-color fs-six mb-1"></i>
            <input
              class="n5-color border-0"
              placeholder="Your Name*"
              type="text"
              id="name"
              name="user_name"
              required
            />
          </div>
          <div
            class="d-flex align-items-center gap-2 px-3 px-md-5 py-2 py-md-4 rounded-2 brn4 w-100"
          >
            <i class="ph ph-envelope p1-color fs-six mb-1"></i>
            <input
              class="n5-color border-0"
              placeholder="Email address*"
              type="email"
              id="email"
              name="user_email"
              required
            />
          </div>
        </div>
        <div class="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6">
          <div
            class="d-flex align-items-center gap-2 px-3 px-md-5 py-2 py-md-4 rounded-2 brn4 w-100"
          >
            <i class="ph ph-device-mobile-camera p1-color fs-six mb-1"></i>
            <input
              class="n5-color border-0"
              placeholder="Phone*"
              type="text" 
              id="phone"
              name="user_phone"
              required
            />
          </div>
          <div
            class="d-flex align-items-center gap-2 px-3 px-md-5 py-2 py-md-4 rounded-2 brn4 w-100"
          >
            <i class="ph ph-map-pin p1-color fs-six mb-1"></i>
            <input
              class="n5-color border-0"
              placeholder="Location*"
              type="text"
              id="location"
              name="user_location"
              required
            />
          </div>
        </div>
        <div class="mt-3 mt-md-6">
          <textarea
            class="n5-color px-3 px-md-5 py-2 py-md-4 rounded-2 brn4 w-100 h-120"
            placeholder="Your Message:"
            id="message"
            name="message"
          ></textarea>
        </div>

        <div class="d-flex gap-2 align-items-center mt-3 mt-md-5">
          <input id="check" type="checkbox" class="cursor-pointer" />
          <label for="check" class="n4-color fs-nine cursor-pointer">
            Save my name, email, and website in this browser for the next time.
          </label>
        </div>
        <button
          type="submit"
          class="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill mt-5 mt-md-10"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<!-- <script lang="ts">

export default {
  methods: {
    sendEmail() {
      if (this.$refs.form instanceof HTMLFormElement) {
        emailjs
          .sendForm("Your service id", "Your template id", this.$refs.form, {
            publicKey: "Your Public key",
          })
          .then(
            () => {
              alert("Your messeage sent successfully!");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      } else {
        console.error("`this.$refs.form` is not an HTML form element");
      }
    },
  },
};
</script> -->

<script lang="ts">
import { defineComponent, ref } from 'vue'
import emailjs from '@emailjs/browser' 

export default defineComponent({
  setup() {
    const form = ref<HTMLFormElement | null>(null)
    const sending = ref(false)

    const sendEmail = async () => {
      if (!form.value) {
        console.error('Form ref is null')
        return
      }
      try {
        sending.value = true
        await emailjs.sendForm(
          'YOUR_SERVICE_ID',  
          'YOUR_TEMPLATE_ID', 
          form.value,
          { publicKey: 'YOUR_PUBLIC_KEY' }
        )
        alert('Your message was sent successfully!')
        form.value.reset()
      } catch (err) {
        console.error('EmailJS failed', err)
        alert('There was an error sending your message. Please try again.')
      } finally {
        sending.value = false
      }
    }

    return { form, sending, sendEmail }
  }
})
</script>
<style scoped></style>
