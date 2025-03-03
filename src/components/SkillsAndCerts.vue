<script setup>
// import CertsCard from "./CertsCard.vue";
import { CONSTANTS } from "../data/constants";
import skillsLibrary from "@content/skills-library.json";
import { onMounted, ref } from "vue";

const credlyBadge = ref(`
  <div data-iframe-width="100%" data-iframe-height="270" 
       data-share-badge-id="0e8b362f-5987-4600-9356-63109e890a51" 
       data-share-badge-host="https://www.credly.com"></div>
`);

onMounted(() => {
  const script = document.createElement("script");
  script.src = "//cdn.credly.com/assets/utilities/embed.js";
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <div>
    <div class="text-2xl font-bold pb-8">Skills</div>
    <div class="flex flex-wrap justify-start gap-2">
      <div v-for="(tool, index) in skillsLibrary" :key="index">
        <div
          class="flex justify-center items-center gap-x-2 bg-[#0B0D0E] border border-[#32383E] rounded-full py-2 px-4"
        >
          <img
            class="rounded-t-md w-6 h-6 object-contain"
            :src="`${CONSTANTS.GH_PAGES_REPO}/tools/${tool.imageName}`"
          />
          <p class="text-sm text-gray-100 pl-1">
            {{ tool.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-16">
      <div class="text-2xl font-bold pb-8">Certifications</div>
      <div v-html="credlyBadge"></div>
      <!-- <div class="flex flex-wrap grid grid-cols-1 justify-center gap-8">
        <CertsCard
          v-for="(uni, index) in education"
          :key="index"
          :universityName="uni.universityName"
          :universityWebsite="uni.universityWebsite"
          :degree="uni.degree"
          :gpa="uni.gpa"
          :duration="uni.duration"
          :imagePath="uni.imagePath"
        />
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>
