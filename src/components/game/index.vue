<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GameOverShow from '@/components/game/GameOverShow.vue'
import GameStartShow from '@/components/game/GameStartShow.vue'

// 游戏参数
const canvasSizeWidth = 900;
const canvasSizeHeight = 600
const cellSize = 20
let initialSpeed = 150
const scoreRef = ref(0)
const gameOverRef = ref(false)
const startShowRef = ref(true)
let textPower = ref('')
const powerRef = ref(false)

const renew = (data) => {
  switch (data) {
    case 1:
      initialSpeed = 250
      break
    case 2:
      initialSpeed = 200
      break
    case 3:
      initialSpeed = 150
      break
    case 4:
      initialSpeed = 100
      break
    case 5:
      initialSpeed = 50
      break
  }
}

// 贪吃蛇的身体部分
let snakeBody = ref([
  { x: 20, y: 10 },
  { x: 20, y: 10 },
  { x: 20, y: 10 },
])

// 食物的位置
const foodPosition = ref({ x: 5, y: 5 })

// 贪吃蛇的头部方向
const direction = ref({ x: 0, y: 1 })

// 获取画布和上下文
const canvasRef = ref(null)
const ctxRef = ref(null)

// 设置画布大小
const setCanvasSize = () => {
  canvasRef.value.width = canvasSizeWidth
  canvasRef.value.height = canvasSizeHeight
}

// 初始化游戏
const initGame = () => {
  setCanvasSize()
  ctxRef.value = canvasRef.value.getContext('2d')
  spawnFood()
  gameLoop()
}

// 移动蛇
const moveSnake = () => {
  const head = {x: snakeBody.value[0].x + direction.value.x, y: snakeBody.value[0].y + direction.value.y}
  snakeBody.value.unshift(head)
  snakeBody.value.pop()
}

// 游戏循环
const gameLoop = () => {
  const speed = ref(initialSpeed)
  if (!gameOverRef.value) {
    moveSnake()
    checkCollisions()
    render()
    setTimeout(gameLoop, speed.value)
  }
}

// 渲染蛇和食物到画布上
const render = () => {
  ctxRef.value.fillStyle = 'black'
  ctxRef.value.fillRect(0, 0, canvasSizeWidth, canvasSizeHeight)
  snakeBody.value.forEach((part) => {
    ctxRef.value.fillStyle = 'green'
    ctxRef.value.fillRect(part.x * cellSize, part.y * cellSize, cellSize - 2, cellSize - 2)
  })

  ctxRef.value.fillStyle = 'red'
  ctxRef.value.fillRect(foodPosition.value.x * cellSize, foodPosition.value.y * cellSize, cellSize, cellSize)
}

// 生成食物
const spawnFood = () => {
  foodPosition.value = {
    x: Math.floor(Math.random() * (canvasSizeWidth / cellSize)),
    y: Math.floor(Math.random() * (canvasSizeHeight / cellSize)),
  }
}

const usePower = () => {
  const increase = initialSpeed * 0.20
  const powerNum = Math.round(Math.random() * 10) % 3
  switch (powerNum) {
    case 0:
      textPower.value = "加速5秒"
      initialSpeed -= increase
      setTimeout(() => initialSpeed += increase ,5000)
      break
    case 1:
      textPower.value = "加200分"
      scoreRef.value += 200
      break
    case 2:
      textPower.value = "蛇蛇收缩"
      snakeBody.value = snakeBody.value.slice(0, 3)
      initialSpeed += 5
      break
  }
}

// 检查碰撞
const checkCollisions = () => {
  const head = snakeBody.value[0]
 
  // 检查是否吃到食物
  if (head.x === foodPosition.value.x && head.y === foodPosition.value.y) {
    scoreRef.value += 20
    if(scoreRef.value % 100 == 0){
      textPower.value = "【POWER】"
      powerRef.value = true
    }
    snakeBody.value.push({x: snakeBody.value.at(-1).x - direction.value.x, y: snakeBody.value.at(-1).y - direction.value.y})
    spawnFood()
  } 

  // 检查是否撞到自己
  for (let i = 3;i < snakeBody.value.length;i++) {
    if (head.x === snakeBody.value[i].x && head.y === snakeBody.value[i].y) {
      gameOverRef.value = true
    }
  }
  
  // 检查是否撞到墙
  if (head.x < 0 || head.x >= canvasSizeWidth / cellSize || head.y < 0 || head.y >= canvasSizeHeight / cellSize) {
    gameOverRef.value = true
  }
}

// 监听键盘事件以改变蛇的方向
const handleKeyDown = (event) => {
  if (gameOverRef.value) return
  if(event.code === 'Space'){
    if(powerRef.value){
        powerRef.value = false
        usePower()
        setTimeout(()=>textPower.value='', 5000)
      }
  }
  switch (event.key) {
    case 'ArrowUp':
      if (direction.value.y !== 1) direction.value = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (direction.value.y !== -1) direction.value = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (direction.value.x !== 1) direction.value = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (direction.value.x !== -1) direction.value = { x: 1, y: 0 }
      break
  }
}

const handleRestart = () => {
  // 重置游戏状态
  startShowRef.value = false
  gameOverRef.value = false
  powerRef.value = false
  scoreRef.value = 0
  snakeBody = ref([
    { x: 20, y: 10 },
    { x: 20, y: 10 },
    { x: 20, y: 10 },
  ])
  initGame()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <GameStartShow v-show="startShowRef" :restartGame="handleRestart" @speed="renew"/>
  <div v-show="!startShowRef">
    <div><span id="score">score:{{ scoreRef }}</span><span id="power">{{ textPower }}</span></div>
    <canvas ref="canvasRef" id="myCanvas"></canvas>
    <GameOverShow v-show="gameOverRef" :score="scoreRef" :restartGame="handleRestart" />
  </div>
  
</template>

<style scoped>
#myCanvas{
  margin: 100px 0 0 200px;
  border:5px solid rgb(105, 105, 105);
  border-radius:10px;
}

#score{
  text-align: left;
  font-size: xx-large;
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
}

#power{
  margin-left: 200px;
  font-size: xx-large;
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
}
</style>