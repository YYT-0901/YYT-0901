<script setup>
import { ref } from 'vue'

const props = defineProps({
speedNum:{
    type: Number
}
})

const speed = ref(props.speedNum)
const emit = defineEmits(['cancel'])

const handleMin = () => {
    if (speed.value > 1) {
    speed.value--
    }
}

const handleAdd = () => {
    if (speed.value < 5) {
    speed.value++
    }
}

const cancel = () => {
    emit('cancel', speed.value)
}


</script>

<template>
    <div class="game-setting-container">
        <div class="game-setting">
            <h1><slot></slot></h1>
            <p>速度：<button @click="handleMin">-</button>{{ speed }}<button @click="handleAdd">+</button></p>
            <button @click="cancel">确定</button>
        </div>
    </div>
    
</template>

<style scoped>
.game-setting-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* 半透明的黑色背景 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.game-setting {
    text-align: center;
    margin: auto; /* 保持Flexbox的居中效果 */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.game-setting h1 {
    color: red;
}

.game-setting p {
    margin: 20px 0;
}

button{
    margin: 0 5px;
}

.game-setting button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>