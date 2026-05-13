<script setup>
import ContactBlock from "@components/ContactBlock.vue";
import Experience from "@components/Experience.vue";
import WorkProjects from "@components/WorkProjects.vue";
import PersonalProjects from "@components/PersonalProjects.vue";
import Education from "@components/Education.vue";
import SkillsSection from "@components/SkillsSection.vue";
import ResumeSection from "@components/ResumeSection.vue";
import CertificationsSection from "@components/CertificationsSection.vue";
import SectionHeading from "@components/SectionHeading.vue";
</script>

<template>
  <!-- Outer container for the whole website -->
  <div class="container mx-auto px-10 xl:px-48">
    <section
      id="intro"
      class="mt-20 flex flex-col justify-start"
      aria-label="Introduction"
    >
      <div class="flex justify-between">
        <img src="/coder2.png" class="logo h-24" alt="coder logo" />
      </div>

      <div class="flex flex-wrap justify-between pt-10">
        <div>
          <div class="text-4xl font-extrabold">Hrishikesh Reddy Tolmamdi</div>
          <div class="text-lg font-bold pt-5">
            Software Developer | Cloud Engineer | AI/ML Enthusiast
          </div>
        </div>

        <div class="flex items-end flex-wrap gap-y-6 pt-8 2xl:pt-0">
          <ContactBlock />
        </div>
      </div>
    </section>

    <section id="experience" class="mt-20">
      <Experience />
    </section>

    <section id="skills" class="mt-16">
      <SkillsSection />
    </section>

    <section id="resume" class="mt-16">
      <ResumeSection />
    </section>

    <section id="certifications" class="mt-16">
      <CertificationsSection />
    </section>

    <div class="mt-16">
      <WorkProjects />
    </div>

    <div class="mt-16">
      <PersonalProjects />
    </div>

    <section id="education" class="mt-16">
      <Education />
    </section>

    <section id="about" class="mt-16" aria-labelledby="about-heading">
      <SectionHeading section-id="about" title="About me" />
      <div class="h-0.5 w-14 rounded-full bg-red-500/80" aria-hidden="true" />

      <div
        class="mt-10 flex flex-col gap-10 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between"
      >
        <article class="max-w-3xl flex-1 space-y-4 lg:min-w-0">
          <p
            class="text-lg font-medium leading-relaxed text-gray-100 md:text-xl"
          >
            I build software with a product lens: reliable systems, sensible
            architecture, and features that hold up once they are in production.
          </p>

          <p class="text-base leading-relaxed text-gray-400 md:text-lg">
            Day to day that is full-stack work, cloud and APIs, CI/CD, and
            shipping AI-assisted features—taking rough ideas through to
            something customers can actually use.
          </p>

          <p class="text-base leading-relaxed text-gray-400 md:text-lg">
            I also like the work around the code: prioritization, how a product
            is positioned, and keeping things maintainable as scope grows.
          </p>

          <p class="text-base italic leading-relaxed text-gray-500 md:text-lg">
            Outside of work, I’m usually looking for new places to explore,
            hidden spots to visit, and experiences that give me a fresh
            perspective.
          </p>
        </article>

        <div
          class="flex shrink-0 justify-center lg:justify-end lg:pt-2 xl:pt-0"
        >
          <img
            src="/dp.jpg"
            class="logo h-36 w-auto max-w-[11rem] rounded-xl object-cover md:h-44 md:max-w-[13rem]"
            alt="Hrishikesh Reddy Tolmamdi"
          />
        </div>

        <div></div>
      </div>
    </section>

    <section id="contact" class="mt-8 mb-10" aria-labelledby="contact-heading">
      <SectionHeading section-id="contact" title="Get in touch" />
      <ContactBlock />
    </section>
  </div>
</template>

<style scoped>
.logo {
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 -6mm 10mm red);
}
</style>
