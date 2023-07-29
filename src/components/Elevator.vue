<script>
const sections = document.querySelectorAll('.section')
const navLinks = document.querySelectorAll('.nav-links li a')

function setActiveNavLink() {
  const scrollPosition = window.scrollY
  sections.forEach((section, index) => {
    const { offsetTop } = section
    const nextSectionOffsetTop =
      index < sections.length - 1 ? sections[index + 1].offsetTop : Infinity

    if (scrollPosition >= offsetTop && scrollPosition < nextSectionOffsetTop) {
      navLinks.forEach((link) => link.classList.remove('active'))
      navLinks[index].classList.add('active')
    }
  })
}

// 初始设置导航高亮
setActiveNavLink()

// 监听滚动事件，动态设置导航高亮
window.addEventListener('scroll', setActiveNavLink)
</script>

<template>
  <div class="elevator">
    <ul class="nav-links">
      <li><a href="#section1">Section 1</a></li>
      <li><a href="#section2">Section 2</a></li>
      <li><a href="#section3">Section 3</a></li>
    </ul>
  </div>
</template>

<style scoped>
.section {
  height: 500px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
}

/* 电梯样式 */
.elevator {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 999;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin-bottom: 10px;
}

.nav-links li a {
  color: #333;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-links li a.active {
  background-color: #007bff;
  color: #fff;
}

.nav-links li a:hover {
  background-color: #f0f0f0;
}
</style>
