<template>
  <div class="container max-w-3xl mx-auto mt-60">
    <div class="h-60 mb-8">
      <div class="w-52 h-52 mx-auto mb-4"><vitecamp class="w-52 h-52"></vitecamp></div>
    </div>
    <div class="text-center text-md">
      <h1 class="font-serif font-bold text-4xl mb-8">Hello , welcome to Vitecamp</h1>
      <p class="mb-10">
        <strong>Vitecamp</strong>
        is a zero-config Vue3 template, it includes these feature:
      </p>
      <p class="mb-10">
        <template v-for="(item, index) in featureList" :key="index">
          <a :href="item.href" target="_blank">{{ item.name }}</a>
          <template v-if="!item.isEnd"> | </template>
        </template>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import vitecamp from '@/assets/svg/vitecamp.svg?component';

const featureList = [
  {
    name: 'Vite2',
    href: 'https://github.com/vitejs/vite',
  },
  {
    name: 'Vue3',
    href: 'https://v3.cn.vuejs.org/',
  },
  {
    name: 'TypeScript',
    href: 'https://github.com/microsoft/TypeScript',
  },
  {
    name: 'Element Plus',
    href: 'https://element-plus.gitee.io/zh-CN/',
  },
  {
    name: 'Vue Router 4',
    href: 'https://router.vuejs.org/zh/',
  },
  {
    name: 'Pinia',
    href: 'https://pinia.vuejs.org/',
  },
  {
    name: 'icones',
    href: 'https://icones.netlify.app/',
  },
  {
    name: 'Windi CSS',
    href: 'https://github.com/windicss/windicss',
  },
  {
    name: 'Axios',
    href: 'https://axios-http.com/',
  },

  {
    name: 'Prettier',
    href: 'https://github.com/prettier/prettier',
  },
  {
    name: 'ESLint',
    href: 'https://github.com/eslint/eslint',
  },
  {
    name: 'Airbnb Style',
    href: 'https://github.com/airbnb/javascript',
  },
  {
    name: 'Husky',
    href: 'https://github.com/typicode/husky',
  },
  {
    name: 'VueUse',
    href: 'https://github.com/vueuse/vueuse',
  },
  {
    name: 'Markdown support',
    href: 'https://github.com/antfu/vite-plugin-md',
  },
  {
    name: 'NProgress',
    href: 'https://github.com/rstacruz/nprogress',
    isEnd: true,
  },
];
</script>

<style lang="scss" scoped>
a {
  @apply text-sky-400 hover:(text-sky-600) transition-all ease-out duration-100;
}
</style>
