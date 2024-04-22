<script setup>
defineProps({
score: {
    type: Number,
    required: true,
},
restartGame: {
    type: Function,
    required: true,
},
});
</script>

<template>
    <div class="game-over-container">
        <div class="game-over">
            <h1>游戏结束</h1>
            <p>你的得分是: {{ score }}</p>
            <button @click="restartGame">重新开始</button>
        </div>
    </div>
    
</template>

<style scoped>
.game-over-container {
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

.game-over {
    text-align: center;
    margin: auto; /* 保持Flexbox的居中效果 */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.game-over h1 {
    color: red;
}

.game-over p {
    margin: 20px 0;
}

.game-over button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>