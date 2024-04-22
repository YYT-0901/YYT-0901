<script setup>
import {ref} from 'vue'
import GameSettingsShow from '@/components/game/GameSettingsShow.vue'

const settingShow = ref(false)
let speed = ref(3)

defineProps({
restartGame: {
    type: Function,
    required: true,
},
})

const emit = defineEmits(['speed'])

const cancel = (data) => {
    speed.value = data
    emit('speed',speed.value)
    settingShow.value = false
}

const init = () => {
    settingShow.value = true 
}

</script>

<template>
    <div class="game-start-container">
        <div class="game-start">
            <p>贪吃蛇</p>
            <button @click="restartGame">开始游戏</button>
            <br>
            <br>
            <button @click="init">设置</button>
            <GameSettingsShow v-if="settingShow" @cancel="cancel" :speedNum="speed">设置</GameSettingsShow>
        </div>
    </div>
    
</template>

<style scoped>
.game-start-container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #353431;
    display: flex;
    justify-content: center;
    align-items: center;
}

.game-start {
    width: 700px;
    height: 700px;
    text-align: center;
    background-image: url('@/assets/snakeImg.jpg');
    background-size: 100%;
}

.game-start p {
    margin-top: 200px;
    font-size:80px; /*设置字体大小*/
    font-weight:800; /*设置字体粗细*/
    text-shadow:1px 0px #009916, 1px 2px #006615, 3px 1px #009916,
                2px 3px #006615, 4px 2px #009916, 4px 4px #006615,
                5px 3px #009916, 5px 5px #006615, 7px 4px #009916,
                6px 6px #006615, 8px 5px #009916, 7px 7px #006615,
                9px 6px #009916, 9px 8px #006615, 11px 7px #009916;/*设置文字阴影*/
    color: red;
    margin-bottom: 50px;
}

.game-start button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>