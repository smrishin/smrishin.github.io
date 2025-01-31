<script setup>
import ExperienceCard from "@components/ExperienceCard.vue";
import experience from "@content/experience.json";
</script>

<template>
  <div class="text-2xl font-bold pb-8">Experience</div>
  <div class="flex flex-wrap grid lg:grid-cols-3 justify-center gap-8">
    <ExperienceCard
      v-for="(exp, index) in experience"
      :key="index"
      :companyName="exp.companyName"
      :companyWebsite="exp.companyWebsite"
      :role="exp.role"
      :duration="exp.duration"
      :shortDescription="exp.shortDescription"
    />
  </div>
</template>

<style scoped></style>
