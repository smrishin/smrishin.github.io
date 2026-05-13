<script setup>
import SectionHeading from "@components/SectionHeading.vue";
import EducationCard from "./EducationCard.vue";
import education from "@content/education.json";
</script>

<template>
  <div>
    <SectionHeading section-id="education" title="Education" />
    <div class="flex flex-wrap grid lg:grid-cols-3 justify-center gap-8">
      <EducationCard
        v-for="(uni, index) in education"
        :key="index"
        :universityName="uni.universityName"
        :universityWebsite="uni.universityWebsite"
        :degree="uni.degree"
        :gpa="uni.gpa"
        :duration="uni.duration"
        :imagePath="uni.imagePath"
      />
    </div>
  </div>
</template>

<style scoped></style>
