<script setup lang="ts">
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Conteúdo -->
    <div class="flex-1 flex flex-col">
      <Header />
      <main class="p-6 flex-1 overflow-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>
