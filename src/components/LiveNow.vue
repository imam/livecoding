<template>
  <div style=" overflow: hidden;" class="items-center mt-[31px]">
    <div class="flex relative left-[1rem]">
      <div class="flex items-center justify-center mr-6 border-[5px]" style='flex-basis: 72px; border-color: #EC5F5F; border-radius: 24px; background-color: #EC5F5F;' v-for="e in 5" :key="e">
          <div class="" style='width: 70px; height: 70px; border-radius: 24px; border-width: 3px; border-color:white; background-color: #EC5F5F; background-image: url("https://images.unsplash.com/photo-1624525702008-ad9cb2802f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80"); background-size: cover;'>

          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'LiveNow',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>

</style>