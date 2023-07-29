<script setup>
import { ref, reactive } from 'vue'
import paint1 from '@/assets/paint1.png'
import paint2 from '@/assets/paint2.png'
import paint3 from '@/assets/paint3.png'
import paint4 from '@/assets/paint4.png'
import paint5 from '@/assets/paint5.png'
import paint6 from '@/assets/paint6.png'
import CopyRight from '../components/CopyRight.vue'

const boxes = ref([
  {
    imageUrl: paint1,
    title: '夜神月',
    description: '"这个世界,不能一直这样下去"'
  },
  {
    imageUrl: paint2,
    title: '暗影',
    description: '"吾乃暗影,潜伏于影,狩猎于影之人"'
  },
  {
    imageUrl: paint3,
    title: '伍六七',
    description: '"我今天就要带她走,我看看谁敢拦我"'
  },
  {
    imageUrl: paint4,
    title: '利威尔',
    description: '"我相信你们"'
  },
  {
    imageUrl: paint5,
    title: '佐助',
    description: '"我是一个复仇者,我是为复仇而生的,为了复仇可以放弃一切"'
  },
  {
    imageUrl: paint6,
    title: '艾伦',
    description: '"我们每个人打出生开始就是自由的"'
  }

  // 其他图片数据...
])

const drawerVisible = ref(false)
const currentBox = reactive({})

const openDrawer = (index) => {
  drawerVisible.value = true
  currentBox.imageUrl = boxes.value[index].imageUrl
  currentBox.title = boxes.value[index].title
  currentBox.description = boxes.value[index].description
}

const closeDrawer = () => {
  drawerVisible.value = false
}
</script>

<template>
  <div class="big-box">
    <div class="box-container">
      <div
        v-for="(box, index) in boxes"
        :key="index"
        class="box"
        @click="openDrawer(index)"
      >
        <img :src="`${box.imageUrl}`" alt="图片" class="image" />
      </div>
    </div>
    <el-drawer
      :model-value="drawerVisible"
      @close="closeDrawer"
      direction="rtl"
    >
      <div class="drawer-content">
        <img :src="currentBox.imageUrl" alt="图片" class="image" />
        <el-divider></el-divider>
        <div class="content">
          <h2 class="title">{{ currentBox.title }}</h2>
          <p>{{ currentBox.description }}</p>
        </div>
      </div>
    </el-drawer>
  </div>
  <CopyRight></CopyRight>
</template>

<style scoped>
.big-box {
  position: relative;
  top: 50px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.box-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.box {
  flex: 0 0 calc(20% - 20px);
  margin: 10px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.box:hover {
  transform: scale(1.05);
}

.image {
  width: 100%;
  height: auto;
}

.drawer-content {
  padding: 20px;
}

.content {
  margin-top: 20px;
}

.title {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
