import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('big-user', () => {
  const user = ref({
    name: '丘绎楦',
    gender: '男',
    birthday: '2003/09/01',
    email: 'yitxuanyou506@gmail.com',
    phoneNum: '+86 15010901562',
    major: '计算机科学与技术'
  })
  return {
    user
  }
})
