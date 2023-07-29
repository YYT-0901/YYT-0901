<script setup>
import MyInfor from '@/components/MyInformation.vue'
import MyIntro from '@/components/MyIntroduction.vue'
import MyEducationBackground from '../components/MyEducationBackground.vue'
import CopyRight from '@/components/CopyRight.vue'
</script>

<template>
  <div>
    <MyInfor></MyInfor>

    <MyIntro></MyIntro>
    <br />
    <MyEducationBackground></MyEducationBackground>
    <br />
    <CopyRight></CopyRight>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(216, 216, 216);
}
</style>
