// types/nuxt-auth.d.ts
import { Auth } from './auth';

declare module '#app' {
  interface NuxtApp {
    $auth: Auth;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $auth: Auth;
  }
}

export {};