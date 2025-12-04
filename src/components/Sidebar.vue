<template>
  <aside class="h-screen w-64 bg-gray-900 text-white flex flex-col">
    <div class="p-6 text-2xl font-bold border-b border-gray-700">
      NewBoard
    </div>

    <nav class="flex-1 p-4 flex flex-col gap-2">
      <RouterLink 
        to="/dashboard" 
        class="p-3 rounded hover:bg-gray-700 transition"
        active-class="bg-gray-700"
      >
        Dashboard
      </RouterLink>

      <RouterLink 
        to="/projects" 
        class="p-3 rounded hover:bg-gray-700 transition"
        active-class="bg-gray-700"
      >
        Projects
      </RouterLink>

      <RouterLink 
        to="/settings" 
        class="p-3 rounded hover:bg-gray-700 transition"
        active-class="bg-gray-700"
      >
        Settings
      </RouterLink>
    </nav>
  </aside>
</template>
