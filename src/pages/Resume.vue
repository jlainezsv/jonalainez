<template>
  <div>
    <section class="pt-120 pb-120 mt-10 mt-lg-0">
      <div class="pb-60 br-bottom-n3">
        <div data-aos="zoom-in" class="page-heading">
          <h3
            class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center"
          >
            Online Resume
          </h3>

          <a
            :href="resume"
            class="w-max p-btn bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
            download
          >
            <PhFilePdf /> Download PDF Version
          </a>
        </div>
      </div>

      <div class="container mt-8 mt-md-15">
        <div class="bgn2-color p-8 p-md-15 rounded-5 brn4">
          <div
            class="d-flex flex-wrap justify-content-between align-items-center gap-3 br-bottom-n3 pb-3 pb-md-6"
          >
            <div>
              <h2 class="display-three p1-color fw-semibold">Jonathan Lainez</h2>
              <span class="n4-color fs-six fw-medium">
                UX/UI Designer & Front-End Developer
              </span>
            </div>
            <div class="ps-5 br-left-n3">
              <ul class="d-flex flex-column gap-3">
                <li>
                  <a
                    href="tel:+6494461709"
                    class="d-flex gap-2 align-items-center n4-color"
                  >
                    <PhPhone />
                    +503 7161 5860
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:jonaqz@gmail.com"
                    class="d-flex gap-2 align-items-center n4-color"
                  >
                    <PhEnvelopeSimple />
                    jonaqz@gmail.com
                  </a>
                </li>
                <!-- <li class="d-flex gap-2 align-items-center n4-color">
                  <RouterLink to="#">
                    <PhGlobe />
                    www.yourwebsite.com
                  </RouterLink>
                </li> -->
                <li class="d-flex gap-2 align-items-center n4-color">
                  <PhMapPin />
                  El Salvador
                </li>
              </ul>
            </div>
          </div>

          <div
            class="d-flex flex-wrap flex-md-nowrap align-items-center gap-5 gap-md-10 pb-4 pb-md-8 br-bottom-n3 pt-60"
          >
            <!-- <div class="resume-profile flex-shrink-0">
              <img
                :src="profile"
                alt="profile"
                class="object-fit-cover"
                width="127"
                height="159"
              />
            </div> -->
            <p class="n42-color fs-seven">
              Creative and user-centered UX/UI Designer and Front-End Developer with 10+ years of experience building responsive, accessible, and conversion-driven digital products. Skilled at translating complex ideas into functional and intuitive user interfaces using modern web technologies.
As a digital nomad, I thrive in remote and asynchronous environments, collaborating with teams across time zones. I’m currently open to relocation to Canada or continuing as a remote contributor to distributed teams.
            </p>
          </div>

          <div class="resume-section row pt-60 pb-60 br-bottom-n3">
            <div class="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
              <div class="d-flex align-items-center gap-2 mb-5 mb-md-10">
                <div class="title-line2"></div>
                <h2 class="fs-three p1-color fw-semibold">Work Experiences</h2>
              </div>

              <div class="mb-3 mb-md-6">
                <div
                  class="mb-2 mb-md-4"
                >
                  <p class="n5-color fs-5 fw-medium">
                    Senior UX/UI Designer
                  </p>
                  <span class="n3-color fs-eight">
                    Ortus Solutions | 2020 - Present
                  </span>
                </div>
                <p class="n42-color fs-5 my-3 my-md-5">
                  I lead the company's design team, managing branding and products while working closely with the marketing team on digital presence. I collaborate with U.S. clients as a UX/UI designer, delivering high-level prototypes and final interfaces ready for development. In some projects, I also translate designs into functional user interfaces for backend integration, improving development efficiency and ensuring high-quality implementation.
                </p>
              </div>
               <hr style="margin: 50px auto;">
              <div class="mb-3 mb-md-6">
                <div
                  class="mb-2 mb-md-4"
                >
                  <p class="n5-color fs-4 fw-medium">
                    Web designer & Front End Developer
                  </p>
                  <span class="n3-color fs-eight"> Paradise Solutions | 2017 — 2020 </span>
                </div>
                <p class="n42-color fs-5 my-3 my-md-5">
                  I oversaw the optimization, usability, and maintenance of 12 tour websites in Mexico. I directed a six-person team through the full transition to responsive design, improving loading speed and SEO performance, which enhanced user experience and increased business efficiency across all company digital platforms.                
                </p>
              </div>
               <hr style="margin: 50px auto;">
              <div class="mb-3 mb-md-6">
                <div
                  class="mb-2 mb-md-4"
                >
                  <p class="n5-color fs-4 fw-medium">
                    Designer & Front-End Developer
                  </p>
                  <span class="n3-color fs-eight">
                    Avianca | 2015 - 2017
                  </span>
                </div>
                <p class="n42-color fs-5 my-3 my-md-5">
                  I created digital marketing assets for the LifeMiles loyalty program, increasing engagement across multiple countries. I also developed front-end interfaces for new website sections, improving usability and ensuring visual consistency across all Avianca markets in the Americas.
                </p>
              </div>
               <hr style="margin: 50px auto;">
              <div class="mb-3 mb-md-6">
                <div
                  class="mb-2 mb-md-4"
                >
                  <p class="n5-color fs-4 fw-medium mb-2">
                    Branding & UI Designer
                  </p>
                  <span class="n3-color fs-eight"> Freelance | 2010 - 2015 </span>
                </div>
                <p class="n42-color fs-5">
                  I developed branding, graphic design, and web projects for various clients, including coffee shops, schools, and small businesses. I created logos, websites, and advertising materials that built strong visual identities and boosted client visibility in their respective markets.
                </p>
              </div>
              <hr style="margin: 50px auto;">
              <div class="mb-3 mb-md-6">
                <div class="mb-2 mb-md-4">
                  <p class="n5-color fs-4 fw-medium mb-2">
                    Front-End Developer 
                  </p>
                  <span class="n3-color fs-eight"> SiscompNetwork | 2009 - 2010 </span>
                </div>
                <p class="n42-color fs-5">
                  I translated designs into functional interfaces using HTML, CSS, and JavaScript. I delivered clean, efficient code for backend developers to integrate, ensuring smooth project implementation and timely product launches.
                </p>
              </div>
            </div>

            <!-- right side  -->

            <div class="col-md-4 col-lg-12 col-xl-4 col-xxl-3">
              <div class="ps-4 ps-xxl-7 br-left-n3 mt-5 mt-md-0">
                <!-- skills  -->

                <div class="mb-8 mb-md-15">
                  <div class="d-flex align-items-center gap-2 mb-5 mb-md-10">
                    <div class="title-line2"></div>
                    <h2 class="fs-three p1-color fw-semibold">Skills</h2>
                  </div>
                  <div class="mb-3 mb-md-6">
                    <h5 class="fs-six n5-color fw-medium mb-2 mb-md-4">
                      UI/UX Design
                    </h5>
                    <ul class="d-flex flex-column gap-3 ms-10">
                      <li class="n4-color fs-6">Figma</li>
                      <li class="n4-color fs-6">Adobe Creative Suite</li>
                      <li class="n4-color fs-6">Responsive Web Design</li>
                      <li class="n4-color fs-6">Wireframing</li>
                      <li class="n4-color fs-6">Prototyping</li>
                    </ul>
                  </div>
                  <div class="mb-3 mb-md-6">
                    <h5 class="fs-six n5-color fw-medium mb-2 mb-md-4">
                      Web Technologies
                    </h5>
                    <ul class="d-flex flex-column gap-3 ms-10">
                      <li class="n4-color fs-6">HTML5</li>
                      <li class="n4-color fs-6">CSS3</li>
                      <li class="n4-color fs-6">Sass</li>
                      <li class="n4-color fs-6">JavaScript</li>
                      <li class="n4-color fs-6">Bootstrap</li>
                      <li class="n4-color fs-6">Alpine JS</li>
                      <li class="n4-color fs-6">Tailwind CSS</li>
                      <li class="n4-color fs-6">Vue.js</li>
                      <li class="n4-color fs-6">jQuery</li>
                    </ul>
                  </div>
                  <div class="mb-3 mb-md-6">
                    <h5 class="fs-six n5-color fw-medium mb-2 mb-md-4">
                      Optimization:
                    </h5>
                    <ul class="d-flex flex-column gap-3 ms-10">
                      <li class="n4-color fs-6">SEO</li>
                      <li class="n4-color fs-6">Web Performance</li>
                      <li class="n4-color fs-6">Accessibility (A11y)</li>
                      <li class="n4-color fs-6">Cross-browser Compatibility</li>
                    </ul>
                  </div>
                  <div class="mb-3 mb-md-6">
                    <h5 class="fs-six n5-color fw-medium mb-2 mb-md-4">
                      Collaboration
                    </h5>
                    <ul class="d-flex flex-column gap-3 ms-10">
                      <li class="n4-color fs-6">GitHub</li>
                      <li class="n4-color fs-6">Agile Workflows</li>
                      <li class="n4-color fs-6">Remote Team Management</li>
                      <li class="n4-color fs-6">Client Communication</li>
                    </ul>
                  </div>


                  <div>
                    <h5 class="fs-six n5-color fw-medium mb-2 mb-md-4">
                      Professional
                    </h5>
                    <ul class="d-flex flex-column gap-3 ms-10">
                      <li class="n4-color fs-6">Effective communication</li>
                      <li class="n4-color fs-6">Team player</li>
                      <li class="n4-color fs-6">Strong problem solver</li>
                      <li class="n4-color fs-6">Good time management</li>
                    </ul>
                  </div>
                </div>

                <!-- education  -->

                <!-- <div class="mb-8 mb-md-15">
                  <div class="d-flex align-items-center gap-2 mb-3 mb-md-6">
                    <div class="title-line2"></div>
                    <h2 class="fs-three p1-color fw-semibold">Education</h2>
                  </div>
                  <div class="d-flex gap-2 mb-3 mb-md-5">
                    <i class="fs-six p1-color">
                      <PhGraduationCap />
                    </i>
                    <div>
                      <span class="n4-color fs-seven">
                        MSc in Computer Science University College London
                      </span>
                      <span class="n4-color fs-eleven"> 2010 - 2011 </span>
                    </div>
                  </div>
                  <div class="d-flex gap-2">
                    <i class="fs-six p1-color">
                      <PhGraduationCap />
                    </i>
                    <div>
                      <span class="n4-color fs-seven">
                        BSc Maths and Physics Imperial College London
                      </span>
                      <span class="n4-color fs-eleven"> 2007 - 2010 </span>
                    </div>
                  </div>
                </div> -->

                <!-- awards  -->

                <!-- <div class="mb-8 mb-md-15">
                  <div class="d-flex align-items-center gap-2 mb-3 mb-md-6">
                    <div class="title-line2"></div>
                    <h2 class="fs-three p1-color fw-semibold">Awards</h2>
                  </div>
                  <div class="d-flex gap-2 mb-3 mb-md-5">
                    <i class="fs-six p1-color">
                      <PhTrophy />
                    </i>
                    <div>
                      <span class="n4-color fs-seven">
                        Award Lorem Ipsum Microsoft lorem ipsum
                      </span>
                      <span class="n4-color fs-eleven">2019</span>
                    </div>
                  </div>
                  <div class="d-flex gap-2">
                    <i class="fs-six p1-color">
                      <PhTrophy />
                    </i>
                    <div>
                      <span class="n4-color fs-seven">
                        Award Donec Sodales Oracle Aenean
                      </span>
                      <span class="n4-color fs-eleven">2017</span>
                    </div>
                  </div>
                </div> -->

                <!-- Languages  -->

                <div class="mb-8 mb-md-15">
                  <div class="d-flex align-items-center gap-2 mb-3 mb-md-6">
                    <div class="title-line2"></div>
                    <h2 class="fs-three p1-color fw-semibold">Languages</h2>
                  </div>
                  <ul class="d-flex flex-column gap-3 ms-10">
                    <li class="n4-color fs-seven">Spanish <span class="n3-color fs-nine fw-regular d-block">Native</span></li>
                    <li class="n4-color fs-seven">English <span class="n3-color fs-nine fw-regular d-block">Fluent – Written & Spoken</span></li>
                  </ul>
                </div>

                <!-- Interests  -->

                <!-- <div>
                  <div class="d-flex align-items-center gap-2 mb-3 mb-md-6">
                    <div class="title-line2"></div>
                    <h2 class="fs-three p1-color fw-semibold">Interests</h2>
                  </div>
                  <ul class="d-flex flex-column gap-3 ms-10">
                    <li class="n4-color fs-seven">Climbing</li>
                    <li class="n4-color fs-seven">Snowboarding</li>
                    <li class="n4-color fs-seven">Photography</li>
                    <li class="n4-color fs-seven">Travelling</li>
                  </ul>
                </div> -->
              </div>
            </div>
          </div>

          <div
            class="d-flex flex-wrap gap-2 gap-md-3 gap-md-5 align-items-center justify-content-center mt-4 mt-md-8"
          >
            <a
              href="https://github.com/jlainezsv"
              class="d-flex gap-1 align-items-center resume-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="social-icon">
                <i class="p1-color">
                  <PhGithubLogo />
                </i>
              </div>
              <span class="fs-nine n4-color">github.com/jlainezsv</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jelainez/"
              class="d-flex gap-1 align-items-center resume-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="social-icon">
                <i class="p1-color">
                  <PhLinkedinLogo />
                </i>
              </div>
              <span class="fs-nine n4-color">https://www.linkedin.com/in/jelainez/</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  PhFilePdf,
  PhGithubLogo,
  //PhGlobe,
  // PhGraduationCap,
  PhLinkedinLogo,
  PhMapPin,
  PhPhone,
  PhEnvelopeSimple,
  // PhTrophy,
  //PhXLogo,
} from "@phosphor-icons/vue";
//import { RouterLink } from "vue-router";
import resume from "@/assets/images/resume.pdf"
// import profile from '@/assets/images/profile.png'
</script>

<style scoped></style>
