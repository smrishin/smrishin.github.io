<script setup>
import SectionHeading from "@components/SectionHeading.vue";
import { CONSTANTS } from "../data/constants";
import skillsLibrary from "@content/skills-library.json";
</script>

<template>
  <div>
    <SectionHeading section-id="skills" title="Skills" />
    <div class="flex flex-wrap justify-start gap-2">
      <div v-for="(tool, index) in skillsLibrary" :key="index">
        <div
          class="flex justify-center items-center gap-x-2 bg-[#0B0D0E] border border-[#32383E] rounded-full py-2 px-4"
        >
          <img
            class="rounded-t-md w-6 h-6 object-contain"
            :src="`${CONSTANTS.GH_PAGES_REPO}/tools/${tool.imageName}`"
            :alt="tool.name"
          />
          <p class="text-sm text-gray-100 pl-1">
            {{ tool.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
