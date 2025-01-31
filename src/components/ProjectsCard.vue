<script setup>
import ToolChip from "./ToolChip.vue";
import toolLibrary from "@content/tool-library.json";
import { CONSTANTS } from "../data/constants";

defineProps({
  projectName: {
    type: String,
    required: true
  },
  projectWebsite: {
    type: String,
    default: null
  },
  imagePath: {
    type: String,
    default: null
  },
  shortDescription: {
    type: String,
    required: true
  },
  codebase: {
    type: String,
    default: null
  },
  tools: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div
    class="flex flex-1 flex-col justify-start min-w-64 max-w-md lg:max-w-sm bg-[#0B0D0E] border border-[#32383E] rounded-lg"
  >
    <img
      class="rounded-t-md h-44 object-cover"
      :src="`${CONSTANTS.GH_PAGES_REPO}/projects/${imagePath}`"
    />
    <div class="p-4">
      <h3 class="text-xl font-bold">
        <a
          v-if="projectWebsite"
          :href="projectWebsite"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-100 text-xl text-bold underline"
        >
          <div class="flex items-center">
            {{ projectName }}
            <img
              class="rounded pl-2 h-5 w-5 object-contain"
              src="@assets\icons\external-link.svg"
            />
          </div>
        </a>
        <span v-else class="text-gray-100 text-xl text-bold">
          {{ projectName }}
        </span>
      </h3>
      <p class="text-md text-gray-300 mt-4">
        {{ shortDescription }}
      </p>
    </div>

    <!-- ToolChips -->
    <div class="flex flex-wrap justify-start px-4 pt-2 pb-4 gap-2 mt-auto">
      <ToolChip
        v-for="(tool, index) in tools"
        :key="index"
        :imageName="toolLibrary[tool].imageName"
        :tool="toolLibrary[tool].name"
      />
    </div>

    <!-- Source Code Button -->
    <div class="px-4 pb-4">
      <a
        v-if="codebase"
        :href="codebase"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center px-4 pr-5 py-2 bg-gray-800 text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <span class="material-icons-outlined mr-2 text-base">code</span>
        Source code
      </a>

      <span
        v-else
        class="flex items-center justify-center px-4 pr-5 py-2 bg-gray-800 text-gray-200 text-sm font-medium rounded-lg cursor-not-allowed opacity-50"
      >
        <span class="material-icons-outlined mr-2 text-base">code</span>
        Source code is private
      </span>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");
</style>
