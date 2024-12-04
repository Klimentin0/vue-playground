<script setup>
  defineProps({
    modelValue: String
  });

  let emit = defineEmits(['update:modelValue']);

  function onTabPress(e) {

      let t = e.target;
        //get caret position/selection
        let val = t.value,
        start = t.selectionStart,
        end = t.selectionEnd;

        // set t to: text vefore caret + tab + text after caret
        t.value = val.substring(0, start) + "\t" + val.substring(end);

        // put caret at right position again
        t.selectionStart = t.selectionEnd = start + 1;

      }

</script>

<template>
  <textarea
    @keydown.tab.prevent="onTabPress"
    @keyup="emit('update:modelValue', $event.target.value)"
    v-text="modelValue" />
</template>

