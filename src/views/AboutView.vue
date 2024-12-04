<script setup>
import { useFlash } from '@/composables/useFlash'
let { flash } = useFlash()
</script>

<template>
  <div>
    <h1>This is an about page</h1>

    <button @click="flash('working on the about page')">test</button>
  </div>
</template>
