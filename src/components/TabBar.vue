<template>
  <div class="w-screen h-auto fixed bottom-0 bg-white flex justify-around items-center tabbar-shadow">
    <router-link to="/" :class="TabClass">
      <i-ph-book-fill style="font-size: 1.5em"></i-ph-book-fill>
    </router-link>
    <router-link to="/" :class="TabClass">
      <i-ic-round-book style="font-size: 1.5em"></i-ic-round-book>
    </router-link>
    <router-link to="/" :class="TabClass">
      <i-ic-round-local-movies style="font-size: 1.5em"></i-ic-round-local-movies>
    </router-link>
    <router-link to="/" :class="TabClass">
      <i-ic-sharp-person style="font-size: 1.5em"></i-ic-sharp-person>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
const TabClass = 'w-1/4 p-2 flex justify-center items-center text-blue-500';
</script>

<style scoped>
.tabbar-shadow {
  box-shadow: 4px 4px 10px #b8b8b8, -4px 4px 10px #ffffff;
}
</style>
