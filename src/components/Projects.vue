<script setup>
import ProjectsCard from "@components/ProjectsCard.vue";
import workProjects from "@content/work-projects.json";
import { ref } from "vue";

const showAll = ref(false);

const firstRowProjects = workProjects.slice(0, 3);
const remainingProjects = workProjects.slice(3);
</script>

<template>
  <div>
    <div class="text-2xl font-bold pb-8">Work Projects</div>
    <div class="flex flex-wrap grid lg:grid-cols-3 justify-center gap-8">
      <ProjectsCard
        v-for="(project, index) in firstRowProjects"
        :key="index"
        :projectName="project.projectName"
        :projectWebsite="project.projectWebsite ?? ''"
        :imagePath="project.imagePath"
        :shortDescription="project.shortDescription"
        :tools="project.tools"
      />

      <ProjectsCard
        v-if="showAll"
        v-for="(project, index) in remainingProjects"
        :key="`remaining-${index}`"
        :projectName="project.projectName"
        :projectWebsite="project.projectWebsite ?? ''"
        :imagePath="project.imagePath"
        :shortDescription="project.shortDescription"
        :tools="project.tools"
      />
    </div>
    <div v-if="remainingProjects.length" class="flex justify-center mt-8">
      <button
        @click="showAll = !showAll"
        class="bg-gray-600 text-white px-6 py-2 rounded-lg border-0 hover:bg-gray-500 transition"
      >
        {{ showAll ? "Less" : `${remainingProjects.length}  More` }}
      </button>
    </div>
  </div>
</template>

<style scoped></style>
