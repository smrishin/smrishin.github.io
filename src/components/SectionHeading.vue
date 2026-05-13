<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  sectionId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const headingId = computed(() => `${props.sectionId}-heading`);
</script>

<template>
  <RouterLink
    :to="{ name: 'home', hash: `#${sectionId}` }"
    class="group mb-8 block max-w-full rounded-md text-left no-underline outline-none ring-offset-2 ring-offset-[#0B0D0E] transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-red-500/50"
    :aria-label="`Go to ${title}`"
  >
    <span
      :id="headingId"
      role="heading"
      :aria-level="2"
      class="text-2xl font-bold tracking-tight text-white group-hover:text-red-100/95"
    >
      {{ title }}
    </span>
  </RouterLink>
</template>
