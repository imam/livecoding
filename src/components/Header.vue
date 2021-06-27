<template>
  <div class="mx-4 mb-4 pt-4 flex items-center">
    <div class="w-9 h-9 bg-black rounded-full mr-4"></div>
    <div class="mr-auto">
      <h1 class="text-base">Imam Assidiqqi</h1>
      <h2 class="text-base text-yellow-300 flex items-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.47325 9.26002L4.66659 15.3334L7.99992 13.3334L11.3333 15.3334L10.5266 9.25335M12.6666 5.33335C12.6666 7.91068 10.5772 10 7.99992 10C5.42259 10 3.33325 7.91068 3.33325 5.33335C3.33325 2.75602 5.42259 0.666687 7.99992 0.666687C10.5772 0.666687 12.6666 2.75602 12.6666 5.33335Z" stroke="#FCD034" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div>+1600 Points</div>
      </h2>
    </div>
    <div>
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8.5C14 5.43 12.86 2.86 10 2.18V0H6V2.18C3.13 2.86 2 5.42 2 8.5L2 14L0 15V17H16V15L14 14L14 8.5ZM8.40001 19.96C8.27001 19.99 8.14001 20 8.00001 20C6.89001 20 6.00001 19.1 5.99001 18H9.99001C9.99001 18.28 9.94001 18.54 9.84001 18.78C9.58001 19.38 9.05001 19.82 8.40001 19.96Z" fill="#303030"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>

</style>
