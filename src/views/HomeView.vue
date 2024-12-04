<script setup>
import { onMounted, ref } from 'vue';

let textarea = ref(null);


onMounted(() => {
  textarea.value.addEventListener("keydown", (e) => {
    let t = textarea.value;

    //tab is pressed
    if (e.keycode ==9 ) {
      //get caret position/selection
      let val = textarea.value,
      start = textarea.value.selectionStart,
      end = textarea.value.selectionEnd;

      // set textarea value to: text vefore caret + tab + text after caret
      textarea.value.value = val.substring(0, start) + "\t" + val.substring(end);

      // put caret at right position again
      textarea.value.selectionStart = textarea.value.selectionEnd = start + 1;

      e.preventDefault();
    }
  })
})
</script>

<template>
  <main>
    <form>
      <textarea ref="" style="width: 100%; height: 300px;">testarea</textarea>
    </form>
  </main>
</template>
