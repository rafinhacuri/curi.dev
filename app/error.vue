<script setup lang="ts">
const error = useError()
const localePath = useLocalePath()

const statusCode = ref(500)
const message = ref('Something went wrong...')

if(error.value && 'statusCode' in error.value && 'message' in error.value){
  statusCode.value = error.value.statusCode
  message.value = error.value.message
}

useHead({ title: `${statusCode.value}` })
</script>

<template>
  <main class="flex h-screen items-center justify-center bg-transparent">
    <div class="animate-fadeIn space-y-10 text-center">
      <h1 class="relative text-9xl font-bold text-[#F28AA9] transition-all duration-300 hover:scale-105">
        <span class="absolute left-0 top-0 w-full animate-glitch text-[#F28AA9] opacity-50 blur-sm">
          {{ statusCode }}
        </span>
        {{ statusCode }}
      </h1>
      <h2 class="text-2xl font-medium text-[#CDD5F4] transition-all duration-500 hover:text-yellow-400">
        {{ message }}
      </h2>
      <button class="relative overflow-hidden rounded-lg bg-[#F28AA9] px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#e7688e] hover:shadow-[0_0_15px_rgba(242,138,169,0.5)] active:scale-95" @click="clearError({ redirect: localePath('/') })">
        <span class="absolute inset-0 animate-pulse bg-white opacity-10" />
        Home
      </button>
    </div>
  </main>
</template>
