<script setup>
import { counter } from '@/store/counterStore';
</script>

<template>
  <div>
    <h>
      {{ counter.count }}
    </h>

    <button @click="counter.increment()">+++</button>
  </div>
</template>
