<template>
  <div style=" overflow: hidden;" class=" items-center">
    <div style="padding-top: 31px;" class="ml-4">
      <span style="font-weight: 600">Upcoming</span> Course Of This Week
    </div>
    <div class="flex py-4 ml-4">
      <div :class="[' py-1 px-2.5 mr-4 whitespace-pre', category.active ? ' rounded-[8px] bg-[#EC5F5F] text-white' : 'rounded-[8px] bg-[#F6F7FA] text-[#9D9FA0]']" v-for="(category, key) in upcomingCourseCategories" :key="key">{{category.title}}</div>
    </div>
    <div class="relative h-[376px] my-4">
      <div class="absolute z-20 top-1/2 right-[10px] text-[30px] text-white" style="transform: translateY(-50%)">
        <a href="#" @click.prevent="scrollToNextCourse" v-if="hasNextCourse">
          <font-awesome-icon icon="arrow-circle-right"></font-awesome-icon>
        </a>
      </div>

      <div class="absolute z-20 top-1/2 left-[10px] text-[30px] text-white" style="transform: translateY(-50%)">
        <a href="#" @click.prevent="scrollToPreviousCourse" v-if="hasPreviousCourse">
          <font-awesome-icon icon="arrow-circle-left"></font-awesome-icon>
        </a>
      </div>

      <div class="flex py-4 relative pr-[16px]" :style="{left: upcomingCoursesRelativePosition + 'px'}">
        <div v-for="(course, key) in upcomingCourses" :key="key">
          <div :class="[' bg-gray-300 rounded-[24px] bg-center relative mr-[16px] w-[299px] transition-all', activeUpcomingCourse == key ? 'h-[360px]' : 'h-[300px] opacity-40']"
          style='
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.8) 100%), url("https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=360&q=80");
            background-position: center;'>
            <div class="bottom-[21.44px] absolute left-[16.9px]">
              <div class="font-semibold text-white text-[18px] pr-[16.9px]">
                Step design sprint for beginner
              </div>
              <div class="flex items-center mt-[3.84px]">
                <div class="mr-[8.45px]">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.35679 2.12004C3.24987 2.12004 0.721924 4.417 0.721924 7.24004C0.721924 10.0631 3.24987 12.36 6.35679 12.36C9.46371 12.36 11.9917 10.0631 11.9917 7.24004C11.9917 4.417 9.46371 2.12004 6.35679 2.12004ZM6.35679 11.08C4.02607 11.08 2.13064 9.3578 2.13064 7.24004C2.13064 5.12228 4.02607 3.40004 6.35679 3.40004C8.68751 3.40004 10.5829 5.12228 10.5829 7.24004C10.5829 9.3578 8.68751 11.08 6.35679 11.08Z" fill="#8C8C8C"/>
                    <path d="M5.65243 4.68004H7.06115V7.88004H5.65243V4.68004ZM4.24371 0.200043H8.46986V1.48004H4.24371V0.200043Z" fill="#8C8C8C"/>
                    <path d="M11.4935 3.8525L10.085 2.57267L11.0811 1.66759L12.4896 2.94741L11.4935 3.8525Z" fill="#8C8C8C"/>
                  </svg>
                </div>
                <div class="text-[#8C8C8C]">
                  5h 21m
                </div>
              </div>
              <div class="flex text-[10px] mt-[17.3px]">
                <div class="bg-[#4DC9D1] text-white px-[4px] py-[2px] rounded-[4px] mr-[11.56px]">6 Lessons</div>
                <div class="bg-[#0082CD] text-white px-[4px] py-[2px] rounded-[4px] mr-[16.88px]">UI/UX</div>
                <div class="bg-[#8D5EF2] text-white px-[4px] py-[2px] rounded-[4px] ">Free</div>
              </div>
              <div class="flex items-center text-base mt-[7.68px]">
                <div class="rounded-full w-[40px] h-[40px] bg-red-300 mr-[19.17px]"></div>
                <div class="leading-4">
                  <div class="text-white">Imam Assidiqqi</div>
                  <div class="text-[10px] text-[#9D9FA0]">Product Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center w-full">
      <a href="#" @click.prevent="() => scrollToUpcomingCourse(key)" :class="(key == activeUpcomingCourse ? 'bg-[#EC5F5F]' : 'bg-[#EEEEEF]') + ' block w-[15.79px] h-[6px] rounded-[4px] ml-[6.32px]'" v-for="(course,key) in upcomingCourses" :key="key"></a>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import gsap from 'gsap'

export default defineComponent({
  name: 'Upcoming',
  setup: () => {

    const upcomingCourseCategories = ref([
      {title: 'All', active: true},
      {title: 'UI/UX'},
      {title: 'Illustration'},
      {title: '3D Animation'},
      {title: 'Web Development'},
    ])

    const upcomingCourses = ref([
      {},
      {},
      {},
      {},
    ])

    const activeUpcomingCourse = ref(0)

    const upcomingCoursesRelativePosition = ref(16)

    const scrollToUpcomingCourse = (course_key: number) => {
      const courseElementWidth = 299
      const newPosition = 16 - (course_key * courseElementWidth)
      gsap.to(upcomingCoursesRelativePosition, {
        value: newPosition,
        duration: 0.5
      })
      activeUpcomingCourse.value = course_key
    }

    const scrollToNextCourse = () => {
      if(hasNextCourse.value){
        scrollToUpcomingCourse(activeUpcomingCourse.value + 1)
      }
    }

    const scrollToPreviousCourse = () => {
      if(hasPreviousCourse.value){
        scrollToUpcomingCourse(activeUpcomingCourse.value - 1)
      }
    }

    const hasPreviousCourse = computed(() => activeUpcomingCourse.value > 0)
    const hasNextCourse = computed(() => activeUpcomingCourse.value + 1 < upcomingCourses.value.length)

    return { 
      upcomingCourseCategories, 
      upcomingCourses, 
      upcomingCoursesRelativePosition,
      scrollToUpcomingCourse,
      activeUpcomingCourse,
      scrollToNextCourse,
      scrollToPreviousCourse,
      hasPreviousCourse,
      hasNextCourse,
      }
  }
})
</script>

<style scoped>

</style>