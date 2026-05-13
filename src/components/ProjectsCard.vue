<script setup>
import ToolChip from "./ToolChip.vue";
import toolLibrary from "@content/tool-library.json";
import { CONSTANTS } from "../data/constants";
import { computed, ref, watch } from "vue";

const props = defineProps({
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

const projectImageError = ref(false);

watch(
  () => props.imagePath,
  () => {
    projectImageError.value = false;
  }
);

const showProjectImage = computed(
  () => Boolean(props.imagePath) && !projectImageError.value
);

function onProjectImageError() {
  projectImageError.value = true;
}

function titleCaseSlug(slug) {
  return String(slug)
    .split(/[-_]/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

const resolvedTools = computed(() =>
  props.tools.map((slug) => {
    const meta = toolLibrary[slug];
    if (meta) {
      return { slug, name: meta.name, imageName: meta.imageName };
    }
    return {
      slug,
      name: titleCaseSlug(slug) || slug,
      imageName: null
    };
  })
);
</script>

<template>
  <div
    class="flex min-w-64 max-w-md flex-1 flex-col justify-start rounded-lg border border-[#32383E] bg-[#0B0D0E] lg:max-w-sm"
  >
    <img
      v-if="showProjectImage"
      class="h-44 rounded-t-md object-cover object-top"
      :src="`${CONSTANTS.GH_PAGES_REPO}/projects/${imagePath}`"
      :alt="`${projectName} preview`"
      @error="onProjectImageError"
    />
    <div
      v-else
      class="flex h-44 items-center justify-center rounded-t-md bg-[#14181C] text-sm text-gray-500"
      aria-hidden="true"
    >
      No preview
    </div>
    <div class="p-4">
      <h3 class="text-xl font-bold">
        <a
          v-if="projectWebsite"
          :href="projectWebsite"
          target="_blank"
          rel="noopener noreferrer"
          class="text-bold text-xl text-gray-100 underline"
        >
          <div class="flex items-center">
            {{ projectName }}
            <img
              class="h-5 w-5 rounded object-contain pl-2"
              src="@assets\icons\external-link.svg"
            />
          </div>
        </a>
        <span v-else class="text-bold text-xl text-gray-100">
          {{ projectName }}
        </span>
      </h3>
      <p class="text-md mt-4 text-gray-300">
        {{ shortDescription }}
      </p>
    </div>

    <!-- ToolChips -->
    <div class="mt-auto flex flex-wrap justify-start gap-2 px-4 pb-4 pt-2">
      <ToolChip
        v-for="(t, index) in resolvedTools"
        :key="`${t.slug}-${index}`"
        :imageName="t.imageName"
        :tool="t.name"
      />
    </div>

    <!-- Source Code Button -->
    <div class="px-4 pb-4">
      <a
        v-if="codebase"
        :href="codebase"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center rounded-lg bg-gray-800 px-4 py-2 pr-5 text-sm font-medium text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <span class="material-icons-outlined mr-2 text-base">code</span>
        View repository
      </a>

      <span
        v-else
        class="flex cursor-not-allowed items-center justify-center rounded-lg bg-gray-800 px-4 py-2 pr-5 text-sm font-medium text-gray-200 opacity-50"
      >
        <span class="material-icons-outlined mr-2 text-base">code</span>
        Code not shared publicly
      </span>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");
</style>
