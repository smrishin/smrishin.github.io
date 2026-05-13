<script setup>
import ProjectsCard from "@components/ProjectsCard.vue";
import SectionHeading from "@components/SectionHeading.vue";
import workProjects from "@content/work-projects.json";
import { ref } from "vue";

const showAllWorkProjects = ref(false);

const firstRowWorkProjects = workProjects.slice(0, 3);
const remainingWorkProjects = workProjects.slice(3);
</script>

<template>
  <section id="work-projects" aria-labelledby="work-projects-heading">
    <SectionHeading section-id="work-projects" title="Work Projects" />
    <div class="flex flex-wrap grid justify-center gap-8 lg:grid-cols-3">
      <ProjectsCard
        v-for="(project, index) in firstRowWorkProjects"
        :key="index"
        :projectName="project.projectName"
        :projectWebsite="project.projectWebsite ?? ''"
        :imagePath="project.imagePath"
        :codebase="project.codebase"
        :shortDescription="project.shortDescription"
        :tools="project.tools"
      />

      <template
        v-for="(project, index) in remainingWorkProjects"
        :key="`remaining-${index}`"
      >
        <ProjectsCard
          v-if="showAllWorkProjects"
          :projectName="project.projectName"
          :projectWebsite="project.projectWebsite ?? ''"
          :imagePath="project.imagePath"
          :codebase="project.codebase"
          :shortDescription="project.shortDescription"
          :tools="project.tools"
        />
      </template>
    </div>
    <div v-if="remainingWorkProjects.length" class="mt-8 flex justify-center">
      <button
        type="button"
        class="rounded-lg border-0 bg-gray-600 px-6 py-2 text-white transition hover:bg-gray-500"
        @click="showAllWorkProjects = !showAllWorkProjects"
      >
        {{
          showAllWorkProjects ? "Show less" : `Show ${remainingWorkProjects.length} more`
        }}
      </button>
    </div>
  </section>
</template>

<style scoped></style>
