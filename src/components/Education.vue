<script setup>
import EducationCard from "./EducationCard.vue";
import education from "@content/education.json";
import { ref } from "vue";
</script>

<template>
  <!-- Work Projects -->
  <div>
    <div class="text-2xl font-bold pb-8">Education</div>
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
