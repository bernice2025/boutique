<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Navigation Bar -->
    <navigationBar />

    <!-- Main Content -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <footer />
  </div>
</template>

<script setup>
import navigationBar from './components/navigationBar.vue'
import footer from './components/footer.vue'
</script>

<style scoped></style>