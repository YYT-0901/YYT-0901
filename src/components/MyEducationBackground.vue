<script setup>
import { reactive } from 'vue'
import chbg from '@/assets/chbg.jpg'
import pyhsbg from '@/assets/pyhsbg.jpg'
import bitbg from '@/assets/bitbg.jpg'
import chLogo from '@/assets/chLogo.jpg'
import pyhsLogo from '@/assets/pyhsLogo.jpg'
import bitLogo from '@/assets/bitLogo.jpg'

const schools = reactive([
  {
    name: '马来西亚霹雳金宝中华小学',
    image: chbg,
    intro: '金宝中华小学成立于1920 年， 经历无数风雨，目前已渐渐茁壮成长。',
    href: 'https://www.facebook.com/sjkcchunghuah',
    logo: chLogo,
    showMask: false
  },
  {
    name: '马来西亚霹雳金宝培元独立中学',
    image: pyhsbg,
    intro:
      '金宝培元独立中学，简称“培元独中”，学校创建于1912年（原名福建学堂），现已发展成为一所保留中华文化传统，用心经营中华文化的华文学校。1962 年，因教育改制，遂分为接受政府全部津贴的国民型培元中学及不接受政府任何津贴的培元独立中学。',
    href: 'http://www.peiyuanhs.edu.my/home/',
    logo: pyhsLogo,
    showMask: false
  },
  {
    name: '中国北京理工大学',
    image: bitbg,
    intro:
      '北京理工大学1940年诞生于延安，是中国共产党创办的第一所理工科大学，是新中国成立以来国家历批次重点建设的高校，首批进入国家“211工程”和“985工程”，首批进入“世界一流大学”建设高校A类行列。毛泽东同志亲自题写校名，李富春、徐特立、李强等老一辈无产阶级革命家先后担任学校主要领导。学校现隶属于工业和信息化部，全体师生员工正对标国家“两个一百年”奋斗目标，全力朝着中国特色世界一流大学的建设目标迈进。',
    href: 'https://bit.edu.cn',
    logo: bitLogo,
    showMask: false
  }
])

const showMask = (school) => {
  school.showMask = true
}

const hideMask = (school) => {
  school.showMask = false
}
</script>

<template>
  <div class="nameCard">
    <h1 class="textTop">教育背景</h1>
    <div class="education-background">
      <div v-for="school in schools" :key="school.name">
        <div class="textName">
          <h2>{{ school.name }}</h2>
        </div>

        <div
          class="school-item"
          @mouseover="showMask(school)"
          @mouseout="hideMask"
        >
          <a :href="school.href" target="_blank">
            <img :src="`${school.image}`" alt="School" class="school-image" />
            <div class="mask" v-if="school.showMask">
              <div class="mask-content">
                <p>{{ school.intro }}</p>
                <img
                  style="width: 100; height: 100px"
                  :src="`${school.logo}`"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nameCard {
  position: relative;
  top: 90px;
  margin-left: 100px;
  width: 80%;
  padding: 20px;
  background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);
}
.education-background {
  display: flex;
  justify-content: space-around;
}
.textTop {
  text-align: center;
  margin-top: 15px;
  color: aqua;
  text-shadow: 10px 5px black;
  font-size: 60px;
}
.textName {
  text-align: center;
  color: blanchedalmond;
  margin-top: 20px;
}
.school-item {
  position: relative;
  width: 300px;
  height: 350px;
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.school-item:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.school-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mask-content {
  text-align: center;
}

.school-item:hover .school-image {
  opacity: 0.7;
}

.school-item:hover .mask {
  opacity: 0.8;
}
</style>
