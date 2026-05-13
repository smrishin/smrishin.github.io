<script setup>
import ProjectsCard from "@components/ProjectsCard.vue";
import SectionHeading from "@components/SectionHeading.vue";
import personalProjects from "@content/personal-projects.json";
import { ref } from "vue";

const showAllPersonalProjects = ref(false);

const firstRowPersonalProjects = personalProjects.slice(0, 3);
const remainingPersonalProjects = personalProjects.slice(3);
</script>

<template>
  <section
    id="personal-projects"
    aria-labelledby="personal-projects-heading"
  >
    <SectionHeading section-id="personal-projects" title="Personal Projects" />
    <div class="flex flex-wrap grid justify-center gap-8 lg:grid-cols-3">
      <ProjectsCard
        v-for="(project, index) in firstRowPersonalProjects"
        :key="index"
        :projectName="project.projectName"
        :projectWebsite="project.projectWebsite ?? ''"
        :imagePath="project.imagePath"
        :codebase="project.codebase"
        :shortDescription="project.shortDescription"
        :tools="project.tools"
      />

      <template
        v-for="(project, index) in remainingPersonalProjects"
        :key="`remaining-${index}`"
      >
        <ProjectsCard
          v-if="showAllPersonalProjects"
          :projectName="project.projectName"
          :projectWebsite="project.projectWebsite ?? ''"
          :imagePath="project.imagePath"
          :codebase="project.codebase"
          :shortDescription="project.shortDescription"
          :tools="project.tools"
        />
      </template>
    </div>
    <div
      v-if="remainingPersonalProjects.length"
      class="mt-8 flex justify-center"
    >
      <button
        type="button"
        class="rounded-lg border-0 bg-gray-600 px-6 py-2 text-white transition hover:bg-gray-500"
        @click="showAllPersonalProjects = !showAllPersonalProjects"
      >
        {{
          showAllPersonalProjects
            ? "Show less"
            : `Show ${remainingPersonalProjects.length} more`
        }}
      </button>
    </div>
  </section>
</template>

<style scoped></style>
