<script></script>

<template>
  <div class="navTop">
    <img class="rollMove" src="@/assets/logo.jpg" alt="" />
    <ul>
      <li>
        <router-link router-link-active to="/home">
          <i class="el-icon-user"></i>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/paintroom">
          <i class="el-icon-brush"></i>
          <span>画廊</span>
        </router-link>
      </li>
      <li>
        <router-link to="/game">
          <el-icon><Cellphone /></el-icon>
          <span>小游戏</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navTop {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 50;
  height: 50px;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  box-shadow: 0 2px rgba(9, 0, 0, 0.5);
}

.navTop img {
  position: absolute;
  width: 45px;
  vertical-align: middle;
  border-radius: 50%;
  float: left;
  margin-left: 200px;
  transition: transform 2s;
}

.navTop img:hover {
  transform: rotate(360deg);
}

.navTop ul {
  margin-right: 100px;
  display: flex;
  justify-content: flex-end;
}

.navTop ul li {
  list-style: none;
  margin: 0 5px;
  /* background-color: #fff; */
}
.navTop li a {
  position: relative;
  padding: 0 20px;
  height: 100%;
  line-height: 50px;
  text-decoration: none;
  font-family: Arial;
  color: white;
  font-size: 35px;
}

.navTop li a.router-link-active {
  background-color: #8ab5ff;
  color: rgb(31, 91, 255);
}
/* 取消最右边的分割线 */
</style>
