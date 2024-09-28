<!--  -->

<!-- the background of the section below this header show be black or one of its gradients -->

<!--  -->
<script lang="ts" setup>
const currentRoute = useRoute();
console.log(currentRoute.path);
import Button from "../ui/button/Button.vue";
const menu = ref(false);
</script>

<template>
  <div
    class="w-full flex justify-between items-center py-2 pb-3 fixed top-0 z-50 bg-background-transparent shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] after:w-[90%] after:h-[0.5px] after:bg-white after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:translate-y-[-100%] after:z-10 after:content-[''] after:transition-all after:duration-300 after:ease-in-out px-10 max-[600px]:px-2 max-[600px]:!w-screen">
    <NuxtLink to="/"> <NuxtImg src="/logo.svg" width="50" /> </NuxtLink>
    <nav
      class="bg-background-transparent py-2 px-24 flex gap-10 items-center justify-center max-md:hidden max-[850px]:px-10 rounded-[8px]">
      <NuxtLink
        class="cursor-pointer text-primary-light text-[15px] font-light hover:border-b-2 hover:border-primary-light hover:font-bold"
        :class="{
          '!font-bold border-b-2 border-primary-light':
            currentRoute.path === '/',
        }">
        Home
      </NuxtLink>
      <NuxtLink
        class="cursor-pointer text-primary-light text-[15px] font-light hover:border-b-2 hover:border-primary-light hover:font-bold transition-all">
        Services
      </NuxtLink>
      <NuxtLink
        class="cursor-pointer text-primary-light text-[15px] font-light hover:border-b-2 hover:border-primary-light hover:font-bold transition-all">
        About
      </NuxtLink>
      <NuxtLink
        class="cursor-pointer text-primary-light text-[15px] font-light hover:border-b-2 hover:border-primary-light hover:font-bold transition-all">
        Contact
      </NuxtLink>
    </nav>
    <div class="flex items-center gap-4">
      <Button
        variant="outline"
        className="text-primary-light bg-transparent min-w-[120px] min-h-[40px]">
        Reserve Now
      </Button>
      <Icon
        class="hidden max-md:block cursor-pointer"
        name="material-symbols:event-list-outline-rounded"
        style="color: white"
        size="30" />
    </div>
  </div>
</template>

<style></style>
