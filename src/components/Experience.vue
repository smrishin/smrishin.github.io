<script setup>
import ExperienceCard from "@components/ExperienceCard.vue";
import SectionHeading from "@components/SectionHeading.vue";
import experience from "@content/experience.json";

/** Public folder for company logos; JSON only stores the file name (e.g. cartco.png). */
const EXPERIENCE_LOGO_DIR = "experience";

function experienceLogoUrl(fileName) {
  if (!fileName) return "";
  const base = import.meta.env.BASE_URL;
  return `${base}${EXPERIENCE_LOGO_DIR}/${fileName}`;
}
</script>

<template>
  <SectionHeading section-id="experience" title="Experience" />
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
    <ExperienceCard
      v-for="(exp, index) in experience"
      :key="index"
      :companyName="exp.companyName"
      :companyWebsite="exp.companyWebsite ?? ''"
      :logoImage="experienceLogoUrl(exp.logoFile)"
      :role="exp.role"
      :duration="exp.duration"
      :shortDescription="exp.shortDescription"
    />
  </div>
</template>

<style scoped></style>
