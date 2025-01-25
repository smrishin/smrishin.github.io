<script setup>
import ExperienceCard from "@components/ExperienceCard.vue";
</script>

<template>
  <div class="text-2xl font-bold pb-8">Experience</div>
  <div class="flex flex-wrap gap-8">
    <!-- OneOrigin -->
    <ExperienceCard
      companyName="OneOrigin Inc."
      companyWebsite="https://www.oneorigin.us/"
      role="Associate Technical Lead"
      shortDescription="Developed scalable web applications using Vue.js and Node.js. Designed efficient CI/CD pipelines leveraging Jenkins and AWS. Integrated AI/ML models for user experience enhancements."
    />
    <!-- S Clinical -->
    <ExperienceCard
      companyName="S-Clinical Solutions"
      companyWebsite="http://s-clinical.com/"
      role="Software Developer"
      shortDescription="Designed and implemented a Clinical Trial Management System using Django and SQL, integrating real-time updates, approval workflows, and secure data storage to improve trial management efficiency and accuracy."
    />
  </div>
</template>

<style scoped></style>
