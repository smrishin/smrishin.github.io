<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import ContactBlock from "@components/ContactBlock.vue";
import { RESUME_PDF_PATH } from "../data/constants";

const router = useRouter();

const shareHint = ref("");

const lastUpdatedLabel = computed(() =>
  new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
);

/** Absolute URL to the public PDF (for share / copy). */
const resumePdfUrl = computed(() => {
  if (typeof window === "undefined") return "";
  const base = new URL(import.meta.env.BASE_URL, window.location.origin).href;
  const path = RESUME_PDF_PATH.replace(/^\//, "");
  return new URL(path, base).href;
});

function goBack() {
  if (typeof window === "undefined") return;
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/");
  }
}

async function shareResumePdf() {
  const url = resumePdfUrl.value;
  if (!url) return;

  const title = "Hrishikesh Reddy Tolmamdi — Resume (PDF)";
  shareHint.value = "";

  try {
    if (navigator.share) {
      await navigator.share({ title, text: title, url });
      return;
    }
  } catch (err) {
    if (err && typeof err === "object" && "name" in err && err.name === "AbortError") {
      return;
    }
  }

  try {
    await navigator.clipboard.writeText(url);
    shareHint.value = "Link copied to clipboard.";
  } catch {
    window.prompt("Copy this resume PDF link:", url);
  }

  if (shareHint.value) {
    window.setTimeout(() => {
      shareHint.value = "";
    }, 2500);
  }
}
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[#0B0D0E] text-gray-100">
    <div
      class="sticky top-0 z-10 bg-[#0B0D0E]/95 px-6 py-4 backdrop-blur md:px-10 xl:px-48"
    >
      <div
        class="container mx-auto grid w-full grid-cols-[1fr_auto_1fr] items-center gap-x-3 gap-y-3"
      >
        <div class="flex min-w-0 justify-start">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-[#32383E] bg-[#14181C] px-4 py-2 text-sm font-medium text-gray-100 transition hover:border-gray-500 hover:bg-[#1a1f24] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
            aria-label="Back to portfolio"
            @click="goBack"
          >
            <span class="text-base leading-none" aria-hidden="true">←</span>
            Back
          </button>
        </div>
        <h1 class="text-center text-lg font-bold whitespace-nowrap">Resume</h1>
        <div
          class="flex min-w-0 flex-wrap items-center justify-end gap-2 sm:gap-3"
        >
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-[#32383E] bg-[#14181C] px-4 py-2 text-sm font-medium text-gray-100 transition hover:border-gray-500 hover:bg-[#1a1f24] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
            aria-label="Share link to resume PDF"
            @click="shareResumePdf"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"
              />
            </svg>
            Share
          </button>
          <a
            :href="resumePdfUrl || RESUME_PDF_PATH"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-full border border-[#32383E] bg-[#14181C] px-4 py-2 text-sm font-medium text-gray-100 transition hover:border-gray-500 hover:bg-[#1a1f24] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
          >
            Open PDF
          </a>
          <a
            :href="RESUME_PDF_PATH"
            download="Resume-Hrishikesh-Tolmamdi.pdf"
            class="inline-flex items-center rounded-full border border-[#32383E] bg-[#14181C] px-4 py-2 text-sm font-medium text-gray-100 transition hover:border-gray-500 hover:bg-[#1a1f24] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>

    <main class="container mx-auto flex-1 px-4 py-4 md:px-10 md:py-5 xl:px-48">
      <p
        v-if="shareHint"
        class="mb-2 text-sm text-green-400/90"
        role="status"
      >
        {{ shareHint }}
      </p>
      <p class="mb-2 text-sm text-gray-400">
        Resume PDF updated {{ lastUpdatedLabel }}.
      </p>
      <p class="mb-3 max-w-2xl text-sm text-gray-400">
        Need the newest file or a version tailored to a role? Email me and I
        will send it.
      </p>
      <div
        class="overflow-hidden rounded-lg border border-[#32383E] bg-[#14181C] shadow-lg"
      >
        <iframe
          title="Resume PDF"
          :src="RESUME_PDF_PATH"
          class="h-[min(70vh,56rem)] w-full max-h-[56rem] border-0"
        />
      </div>

      <div class="mt-6 pt-4">
        <p class="mb-2 text-sm font-medium text-gray-400">Get in touch</p>
        <ContactBlock />
      </div>
    </main>
  </div>
</template>
