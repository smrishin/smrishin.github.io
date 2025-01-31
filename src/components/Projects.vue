<script setup>
import ProjectsCard from "@components/ProjectsCard.vue";
import workProjects from "@content/work-projects.json";
import personalProjects from "@content/personal-projects.json";
import { ref } from "vue";

const showAllWorkProjects = ref(false);
const showAllPersonalProjects = ref(false);

const firstRowWorkProjects = workProjects.slice(0, 3);
const remainingWorkProjects = workProjects.slice(3);

const firstRowPersonalProjects = personalProjects.slice(0, 3);
const remainingPersonalProjects = personalProjects.slice(3);
</script>

<template>
  <!-- Work Projects -->
  <div>
    <div>
      <div class="text-2xl font-bold pb-8">Work Projects</div>
      <div class="flex flex-wrap grid lg:grid-cols-3 justify-center gap-8">
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

        <ProjectsCard
          v-if="showAllWorkProjects"
          v-for="(project, index) in remainingWorkProjects"
          :key="`remaining-${index}`"
          :projectName="project.projectName"
          :projectWebsite="project.projectWebsite ?? ''"
          :imagePath="project.imagePath"
          :codebase="project.codebase"
          :shortDescription="project.shortDescription"
          :tools="project.tools"
        />
      </div>
      <div v-if="remainingWorkProjects.length" class="flex justify-center mt-8">
        <button
          @click="showAllWorkProjects = !showAllWorkProjects"
          class="bg-gray-600 text-white px-6 py-2 rounded-lg border-0 hover:bg-gray-500 transition"
        >
          {{
            showAllWorkProjects
              ? "Less"
              : `${remainingWorkProjects.length}  More`
          }}
        </button>
      </div>
    </div>

    <!-- Personal Projects -->
    <div class="mt-16">
      <div class="text-2xl font-bold pb-8">Personal Projects</div>
      <div class="flex flex-wrap grid lg:grid-cols-3 justify-center gap-8">
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

        <ProjectsCard
          v-if="showAllPersonalProjects"
          v-for="(project, index) in remainingPersonalProjects"
          :key="`remaining-${index}`"
          :projectName="project.projectName"
          :projectWebsite="project.projectWebsite ?? ''"
          :imagePath="project.imagePath"
          :codebase="project.codebase"
          :shortDescription="project.shortDescription"
          :tools="project.tools"
        />
      </div>
      <div
        v-if="remainingPersonalProjects.length"
        class="flex justify-center mt-8"
      >
        <button
          @click="showAllPersonalProjects = !showAllPersonalProjects"
          class="bg-gray-600 text-white px-6 py-2 rounded-lg border-0 hover:bg-gray-500 transition"
        >
          {{
            showAllPersonalProjects
              ? "Less"
              : `${remainingPersonalProjects.length}  More`
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
