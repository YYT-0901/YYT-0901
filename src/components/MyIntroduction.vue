<template>
  <div class="baseCard">
    <div class="box">
      <div class="content">
        <h1 style="font-size: 60px; text-shadow: 5px 5px black">自我介绍</h1>
        <p>
          <strong>丘绎楦</strong
          >，一个<strong>怀揣梦想</strong>、<strong>热爱挑战</strong>的年轻人。
        </p>
        <p>
          我的专业是<strong>计算机科学与技术</strong>，对计算机领域充满了无限的好奇心与热情。
        </p>
        <p>
          我<strong>喜欢下棋</strong>，尤其是中国象棋，它是我难以言喻的热爱。对我来说，象棋不仅是一种游戏，更是一门<strong>智慧的体现</strong>。其中<strong>复杂的策略</strong>和<strong>深邃的算计</strong>让我着迷，也提高了我的<strong>决策能力</strong>和<strong>思维灵活性</strong>。
        </p>
        <p>
          我有着多种<strong>兴趣爱好</strong>，<strong>绘画</strong>让我感受到创造的乐趣，<strong>足球</strong>教会我团队合作的重要性，而<strong>唱歌</strong>则成为我释放情感的出口。
        </p>
        <p>
          对于未来，我立志成为一名<strong>最强程序员</strong>。我相信编程是一门无限延伸的艺术，掌握技术不仅可以改变世界，更可以<strong>让我和身边的人生活变得更美好</strong>。我渴望在这个快速发展的数字时代，成为<strong>创新的推动者</strong>，为社会进步贡献自己的一份力量。
        </p>
        <hr />
        <div class="well-phrase">
          <p>
            激励着我的三句话：<br />
            1.
            “<strong>冰封三尺，非一日之寒</strong>”-这句话告诉我学习没有捷径，知识都是一点一点累积起来的<br />
            2.
            “<strong>学如逆水行舟，不进则退</strong>”-这句话告诉我不断学习、不断进步的重要性。<br />
            3.
            “<strong>纸上得来终觉浅，绝知此事需躬行</strong>”-这句箴言教诲我知行合一，只有亲身实践，才能获得更深的体会和领悟。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.baseCard {
  position: relative;
  top: 90px;
  margin-left: 100px;
  width: 80%;
  height: 700px;
  padding: 20px;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: #111845a6;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgb(23, 32, 90);
  padding: 20px;
}

.box .content {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 2px solid #f0a591;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 20px;
  box-shadow: 0 5px 10px rgba(9, 0, 0, 0.5);
}

.box .content p {
  font-family: 宋体;
  margin-bottom: 10px;
}
.box .content p strong {
  color: #eaeaae;
}

.well-phrase p {
  text-align: left;
}

.box .content h1 {
  margin-bottom: 15px;
}
</style>
