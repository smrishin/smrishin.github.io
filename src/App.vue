<script setup>
import Socials from "@components/Socials.vue";
import Experience from "@components/Experience.vue";
import Projects from "@components/Projects.vue";
import Skills from "@components/Skills.vue";
</script>
<template>
  <!-- Outer container for the whole website -->
  <div class="container mx-auto px-10 xl:px-48">
    <!-- Header Section -->
    <header class="flex flex-col justify-start mt-20">
      <div class="flex justify-between">
        <img src="/coder2.png" class="logo h-24" alt="coder logo" />

        <!-- DISLAY PICTURE -->
        <!-- <div class="flex justify-end lg:justify-center w-1/2">
          <img
            src="/dp.jpg"
            class="logo rounded-full h-28 md:h-40"
            alt="display pic"
          />
        </div> -->
      </div>

      <!-- Name and Designation -->
      <div class="flex flex-wrap justify-between pt-10">
        <div>
          <div class="text-4xl font-extrabold">Hrishikesh Reddy Tolmamdi</div>
          <div class="text-lg font-bold pt-5">
            Software Developer | DevOps Engineer | AI/ML Enthusiast
          </div>
        </div>

        <!-- Contact -->
        <div class="flex items-end flex-wrap gap-y-6 2xl:pt-0 pt-8">
          <div class="pr-8">
            <p>Email:</p>
            <p>smrishin@gmail.com</p>
          </div>
          <Socials />
        </div>
      </div>
    </header>

    <!-- Experience Section -->
    <div class="mt-20">
      <Experience />
    </div>

    <!-- Skills Section -->
    <div class="mt-16">
      <Skills />
    </div>

    <!-- Projects Section -->
    <div class="mt-16">
      <Projects />
    </div>

    <!-- Abount me -->

    <div class="text-2xl font-bold mt-16">About me</div>
    <div class="flex flex-wrap justify-between">
      <div class="text-lg max-w-4xl pt-5">
        Accomplished Software Developer and DevOps Engineer with a solid
        foundation in JavaScript, Python, Vue.js, AWS, Terraform, and
        Salesforce. Passionate about utilizing my comprehensive technical skills
        and innovative problem-solving capabilities to contribute to
        cutting-edge projects and propel software development to new heights of
        excellence.
      </div>
      <!-- DISLAY PICTURE -->
      <div class="flex justify-end lg:justify-center pt-6">
        <img
          src="/dp.jpg"
          class="logo rounded-xl h-28 md:h-40"
          alt="display pic"
        />
      </div>
    </div>
    <!-- Contact -->
    <div class="flex items-end flex-wrap gap-y-6 mt-10">
      <div class="pr-8">
        <p>Email:</p>
        <p>smrishin@gmail.com</p>
      </div>
      <Socials />
    </div>
    <!-- </div> -->

    <!-- Footer Section -->
    <footer class="my-20 text-center text-gray-500">
      <p>&copy; 2025 Hrishikesh Reddy Tolmamdi. All rights reserved.</p>
    </footer>
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
