<script setup>
import { RouterView } from "vue-router";
import SiteFooter from "@components/SiteFooter.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[#0B0D0E]">
    <RouterView class="flex-1" />
    <SiteFooter />
  </div>
</template>
