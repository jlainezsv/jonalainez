<template>
  <div>
    <section class="blog-details-section pt-120 pb-120 mt-10 mt-lg-0">
      <div class="container">
        <div class="mb-8 mb-md-15">
          <div>
            <h3 class="n5-color fs-one">
              Why Every Developer Should Have A Blog
            </h3>
            <div
              class="d-flex flex-wrap align-items-center gap-2 gap-md-3 mt-3"
            >
              <span class="n3-color fs-eight">
                Published <span class="n4-color">2</span> days ago
              </span>
              <ul class="d-flex align-items-center gap-3">
                <li class="n3-color fs-eight">
                  <span class="n4-color">5</span> min read
                </li>
                <li class="n3-color fs-eight">
                  <span class="n4-color">5</span> min read
                </li>
              </ul>
            </div>
          </div>
          <div class="my-5 my-md-10 overflow-hidden">
            <img :src="blog9" alt="..." class="blog-details-img" />
          </div>
          <p class="details-description n5-color fs-eight">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim.
          </p>
        </div>

        <div class="mb-8 mb-md-15">
          <h3 class="details-description n5-color fs-two">Code Block Example</h3>
          <p class="details-description n5-color fs-eight my-3 my-md-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
            arcu enim urna adipiscing praesent velit viverra sit semper lorem eu
            cursus vel hendrerit elementum morbi curabitur etiam nibh justo,
            lorem aliquet donec sed sit mi dignissim at ante massa mattis.
          </p>
          <div class="overflow-hidden">
            <img :src="blog7" alt="..." class="blog-details-img" />
          </div>
        </div>

        <div class="details-description mb-8 mb-md-15">
          <h3 class=" n5-color fs-two">Typography</h3>
          <p class=" n5-color fs-eight my-3 my-md-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
            arcu enim urna adipiscing praesent velit viverra sit semper lorem eu
            cursus vel hendrerit elementum morbi curabitur etiam nibh justo,
            lorem aliquet donec sed sit mi dignissim at ante massa mattis.
          </p>
          <h5 class="n5-color fs-four fw-semibold mb-3 mb-md-5">
            Bullet Points:
          </h5>
          <ul class="ps-4 ps-md-8">
            <li class="n4-color fs-seven mb-3">
              Lorem ipsum dolor sit amet, consectetuer.
            </li>
            <li class="n4-color fs-seven mb-3">
              Aenean commodo ligula eget dolor.
            </li>
            <li class="n4-color fs-seven">Etiam ultricies nisi vel augue.</li>
          </ul>
        </div>

        <div class="details-description mb-8 mb-md-15">
          <h3 class="n5-color fs-two">Quote Example:</h3>
          <p class="n5-color fs-eight my-3 my-md-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
            arcu enim urna adipiscing praesent velit viverra sit semper lorem eu
            cursus vel hendrerit elementum morbi curabitur etiam nibh justo,
            lorem aliquet donec sed sit mi dignissim at ante massa mattis.
          </p>
          <h5 class="n5-color fs-four fw-semibold mb-3 mb-md-5">
            Bullet Points:
          </h5>
          <ul class="ps-4 ps-md-8">
            <li class="n4-color fs-seven mb-3">
              Lorem ipsum dolor sit amet, consectetuer.
            </li>
            <li class="n4-color fs-seven mb-3">
              Aenean commodo ligula eget dolor.
            </li>
            <li class="n4-color fs-seven">Etiam ultricies nisi vel augue.</li>
          </ul>
        </div>

        <div
          class="details-description mb-8 mb-md-15 px-8 px-md-15 py-5 py-md-10 bgn2-color br-left-p1"
        >
          <h4 class="n5-color fs-five fw-medium">
            You might not think that programmers are artists, but programming is
            an extremely creative profession. It&apos;s logic-based creativity.
          </h4>
          <div class="d-flex gap-2 gap-md-3 align-items-center mt-3 mt-md-6">
            <div class="line3"></div>
            <span class="n4-color fs-eight">John Romero</span>
          </div>
        </div>

        <div class="mb-8 mb-md-15">
          <h3 class="details-description n5-color fs-two">Video Example</h3>
          <p class="details-description n5-color fs-eight my-3 my-md-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
            arcu enim urna adipiscing praesent velit viverra sit semper lorem eu
            cursus vel hendrerit elementum morbi curabitur etiam nibh justo,
            lorem aliquet donec sed sit mi dignissim at ante massa mattis.
          </p>
          <div class="overflow-hidden">
            <img :src="blog2" alt="..." class="blog-details-img" />
          </div>
          <h3 class="details-description n5-color fs-five mt-5 mt-md-10">Conclusion</h3>
          <p class="details-description n5-color fs-eight mt-3 mt-md-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
            arcu enim urna adipiscing praesent velit viverra sit semper lorem eu
            cursus vel hendrerit elementum morbi curabitur etiam nibh justo,
            lorem aliquet donec sed sit mi dignissim at ante massa mattis.
          </p>
        </div>

        <div class="mb-8 mb-md-15 py-4 py-md-8 brn4-y">
          <div
            class="d-flex flex-wrap gap-3 align-items-center justify-content-between"
          >
            <div class="d-flex flex-wrap gap-4 gap-md-8 align-items-center">
              <h4 class="fs-five fw-semibold n5-color">Tag:</h4>
              <div class="d-flex flex-wrap align-items-center gap-2">
                <RouterLink
                  to="#"
                  class="bgn2-color n4-color py-2 py-md-3 px-3 px-md-5 d-block rounded-pill brn4"
                >
                  Business
                </RouterLink>
                <RouterLink
                  to="#"
                  class="bgn2-color n4-color py-2 py-md-3 px-3 px-md-5 d-block rounded-pill brn4"
                >
                  Analysis
                </RouterLink>
                <RouterLink
                  to="#"
                  class="bgn2-color n4-color py-2 py-md-3 px-3 px-md-5 d-block rounded-pill brn4"
                >
                  Technology
                </RouterLink>
                <RouterLink
                  to="#"
                  class="bgn2-color n4-color py-2 py-md-3 px-3 px-md-5 d-block rounded-pill brn4"
                >
                  Design
                </RouterLink>
                <RouterLink
                  to="#"
                  class="bgn2-color n4-color py-2 py-md-3 px-3 px-md-5 d-block rounded-pill brn4"
                >
                  Strategy
                </RouterLink>
              </div>
            </div>
            <div
              class="d-flex flex-wrap justify-content-center gap-2 align-items-center"
            >
              <RouterLink to="#" class="blog-social-icon brn4">
                <i class="p1-color">
                  <PhFacebookLogo />
                </i>
              </RouterLink>
              <RouterLink to="#" class="blog-social-icon brn4">
                <i class="p1-color">
                  <PhInstagramLogo />
                </i>
              </RouterLink>
              <RouterLink to="#" class="blog-social-icon brn4">
                <i class="ph ph-x-logo p1-color">
                  <PhXLogo />
                </i>
              </RouterLink>
              <RouterLink to="#" class="blog-social-icon brn4">
                <i class="p1-color">
                  <PhLinkedinLogo />
                </i>
              </RouterLink>
            </div>
          </div>

          <div
            class="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6 mt-4 mt-md-8"
          >
            <RouterLink
              to="#"
              class="prev-card d-flex gap-3 gap-md-6 align-items-center p-3 brn4 rounded-3"
            >
              <div>
                <img :src="blog3" alt="..." class="prev-img" />
              </div>
              <div>
                <button class="d-flex gap-1 align-items-center p1-color">
                  <PhCaretDoubleLeft/>
                  Previous
                </button>
                <span class="n5-color fw-semibold fs-eight mt-2 d-block">
                  7 Great Web Development Languages to Learn this Year
                </span>
              </div>
            </RouterLink>
            <RouterLink
              to="#"
              class="next-card d-flex gap-3 gap-md-6 align-items-center p-3 brn4 rounded-3"
            >
              <div>
                <img :src="blog1" alt="..." class="prev-img" />
              </div>
              <div>
                <button class="d-flex gap-1 align-items-center p1-color">
                  Next
                  <PhCaretDoubleRight />
                </button>
                <span class="n5-color fw-semibold fs-eight mt-2 d-block">
                  How to Optimize your Website for Better Performance
                </span>
              </div>
            </RouterLink>
          </div>
        </div>

        <Comment />
        <LeaveReply />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import {
  PhCaretDoubleLeft,
  PhCaretDoubleRight,
  PhFacebookLogo,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhXLogo,
} from "@phosphor-icons/vue";
import Footer from "../components/Shared/Footer.vue";
import Comment from "../components/Pages/BlogDetails/Comment.vue";
import LeaveReply from "../components/Pages/BlogDetails/LeaveReply.vue";
import { RouterLink } from "vue-router";
import blog9 from "@/assets/images/blog9.png"
import blog1 from "@/assets/images/blog1.png"
import blog7 from "@/assets/images/blog7.png"
import blog2 from "@/assets/images/blog2.png"
import blog3 from "@/assets/images/blog3.png"
</script>

<style scoped></style>
