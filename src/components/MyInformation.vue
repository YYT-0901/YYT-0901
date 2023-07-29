<script setup>
import { useUserStore } from '@/stores/MyInformation.js'
const {
  user: { name, gender, birthday, email, phoneNum, major }
} = useUserStore()
const date = new Date().getFullYear() - 2003
</script>

<template>
  <!-- 个人信息栏 -->
  <div class="nameCard">
    <div class="dance nameCardText">
      <span>个</span>
      <span>人</span>
      <span>信</span>
      <span>息</span>
    </div>
    <div class="image"><img src="@/assets/头像.png" alt="" /></div>
    <div class="info">
      <ul class="info_l">
        <li class="styleText">
          <span>姓名: {{ name }}</span>
        </li>
        <li class="styleText">
          <span>年龄: {{ date }}</span>
        </li>
        <li class="styleText">
          <span>性别: {{ gender }}</span>
        </li>
        <li class="styleText">
          <span>生日: {{ birthday }}</span>
        </li>
      </ul>
      <ul class="info_r">
        <li class="styleText">
          <span>邮箱: {{ email }}</span>
        </li>
        <li class="styleText">
          <span>手机: {{ phoneNum }}</span>
        </li>
        <li class="styleText"><span>住址: ---</span></li>
        <li class="styleText">
          <span>专业: {{ major }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.nameCard {
  position: relative;
  top: 70px;
  margin-left: 100px;
  width: 80%;
  height: 500px;
  padding: 20px;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
}

.nameCardText {
  position: absolute;
  left: 360px;
  top: -90px;
}

.image {
  position: absolute;
  top: 100px;
  left: 75px;
  width: 250px;
  height: 370px;
}

.nameCard img {
  width: 100%;
  height: 100%;
  border-right: 3px solid #e4e4e4;
  border-bottom: 3px solid #e4e4e4;
  box-shadow: 3px 3px #e4e4e4;
}

.info {
  display: flex;
  position: absolute;
  top: 140px;
  left: 350px;
  width: 500px;
  /* background-color: yellow; */
}
.info ul {
  flex: 1;
}

.info_l li {
  width: 280px;
}

.info_r li {
  width: 550px;
}

/* 文字边框样式 */
.styleText {
  list-style-type: none;
  margin-bottom: 5px;
  font-size: 30px;
  font-family: Arial;
  font-weight: bold;
  padding: 20px;
  box-shadow: inset #009688 0 0 0 5px, inset #059c8e 0 0 0 1px,
    inset #0cab9c 0 0 0 10px, inset #1fbdae 0 0 0 11px, inset #8ce9ff 0 0 0 16px,
    inset #48e4d6 0 0 0 17px, inset #e5f9f7 0 0 0 21px, inset #bfecf7 0 0 0 22px;
}

/* 个人信息四个字的动态效果 */
.dance {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  font-weight: bold;
  white-space: nowrap;
  cursor: pointer;
  margin-top: 120px;
}

.dance span {
  animation: dance 0.72s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
  display: inline-block;
  transform: translate3d(0, 0, 0);
  font-size: 6rem;
  color: black;
}

.dance span:nth-child(1) {
  animation-delay: 0s;
}

.dance span:nth-child(2) {
  animation-delay: 0.0333333333s;
}

.dance span:nth-child(3) {
  animation-delay: 0.1333333333s;
}

.dance span:nth-child(4) {
  animation-delay: 0.2333333333s;
}

@keyframes dance {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(0, -0.54em, 0);
  }
}
</style>
