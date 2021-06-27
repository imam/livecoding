<template>
  <div class="bg-gray-300">
  <div class="max-w-[375px] mx-auto min-h-screen bg-white pb-[64px]">
      <Header  />
      <LiveNow />
      <Upcoming />
      <FooterNav />
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import LiveNow from './components/LiveNow.vue'
import Upcoming from './components/Upcoming.vue'
import FooterNav from './components/FooterNav.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    LiveNow,
    Upcoming,
    FooterNav,
  }
})
</script>

<style>

</style>
