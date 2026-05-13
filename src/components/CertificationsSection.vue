<script setup>
import SectionHeading from "@components/SectionHeading.vue";
import { onMounted } from "vue";

/** Credly embed iframe size (shared by every badge below). */
const CREDLY_IFRAME_WIDTH = 350;
const CREDLY_IFRAME_HEIGHT = 270;

const CREDLY_SHARE_HOST = "https://www.credly.com";

/** Add new entries here when you embed another Credly badge. */
const CREDLY_BADGE_IDS = ["0e8b362f-5987-4600-9356-63109e890a51"];

onMounted(() => {
  if (
    document.querySelector('script[src*="credly.com/assets/utilities/embed"]')
  ) {
    return;
  }
  const script = document.createElement("script");
  script.src = "//cdn.credly.com/assets/utilities/embed.js";
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <div>
    <SectionHeading section-id="certifications" title="Certifications" />
    <div
      class="inline-flex flex-col gap-4 overflow-hidden rounded-lg border border-[#32383E] bg-[#0B0D0E]"
    >
      <div
        v-for="id in CREDLY_BADGE_IDS"
        :key="id"
        :data-iframe-width="CREDLY_IFRAME_WIDTH"
        :data-iframe-height="CREDLY_IFRAME_HEIGHT"
        :data-share-badge-id="id"
        :data-share-badge-host="CREDLY_SHARE_HOST"
      ></div>
    </div>
    <p class="mt-3 max-w-xl text-sm text-gray-500">
      Credly badges sometimes load a beat after the page opens. If you do not
      see anything here,
      <strong class="font-medium text-gray-400">refresh the page</strong>
      and they should appear.
    </p>
  </div>
</template>
