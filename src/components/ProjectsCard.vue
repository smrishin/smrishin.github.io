<script setup>
import ToolChip from "./ToolChip.vue";
import toolLibrary from "@content/tool-library.json";

defineProps({
  projectName: {
    type: String,
    required: true
  },
  projectWebsite: {
    type: String,
    default: ""
  },
  imagePath: {
    type: String,
    default: ""
  },
  shortDescription: {
    type: String,
    required: true
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
      :src="`/work-projects/${imagePath}`"
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
      <p class="text-sm text-gray-100 mt-4">
        {{ shortDescription }}
      </p>
    </div>
    <div class="flex flex-wrap justify-start px-4 pb-4 gap-2">
      <ToolChip
        v-for="(tool, index) in tools"
        :key="index"
        :imageName="toolLibrary[tool].imageName"
        :tool="toolLibrary[tool].name"
      />
    </div>
  </div>
</template>

<style scoped></style>
