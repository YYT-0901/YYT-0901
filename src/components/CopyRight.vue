<script setup>
import { ref } from 'vue'

const contents = ref([
  {
    title: '特别感谢',
    icon: 'el-icon-star-off',
    links: [
      { text: 'github', url: 'https://github.com/' },
      { text: 'element-ui', url: 'https://element.ele.me/' },
      { text: 'chatgpt', url: 'https://openai.com/blog/chatgpt' }
    ]
  },
  {
    title: '联系我',
    icon: 'el-icon-phone-outline',
    links: [
      { text: 'Facebook', url: 'https://www.facebook.com/yitxuan.you' },
      { text: 'Instagram', url: 'https://www.instagram.com/yyt_0901/' },
      { text: 'wechat', url: '#' }
    ]
  }
  // 可以继续添加更多小盒子，数量不限
])
</script>

<template>
  <div class="big-box">
    <div class="small-box-container">
      <div v-for="(item, index) in contents" :key="index" class="small-box">
        <h2 class="sub-title" style="color: #ffffff">
          {{ item.title }} <i :class="item.icon"></i>
        </h2>

        <div class="content">
          <a
            target="_blank"
            v-for="(link, linkIndex) in item.links"
            :key="linkIndex"
            :href="link.url"
            class="link"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
      <div class="dialog">
        <p>来客请留姓名</p>
        <p>此网页仅用于学习</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.big-box {
  background-color: #333333;
  position: relative;
  margin-top: -10px;
  top: 90px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.title {
  color: #ffffff;
  margin-bottom: 20px;
}

.small-box-container {
  display: flex;
  justify-content: center;
}

.small-box {
  display: flex;
  flex-direction: column;
  margin: 10px 50px;
  padding: 10px;
}

.sub-title {
  margin-bottom: 10px;
  font-size: 17px;
}

.content {
  display: flex;
  flex-direction: column;
}

.link {
  margin-right: 10px;
  text-decoration: none;
  color: #999999;
}

.link:hover {
  color: #ffffff;
}
.dialog {
  margin: 10px 50px;
  padding: 10px;
  color: #999999;
  border-left: 2px solid #999999;
}
</style>
