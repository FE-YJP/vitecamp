<template>
  <div>
    <div>这是示例页面</div>
    <div>鼠标坐标{{ x }}—{{ y }}</div>
    <div>这是示例页面</div>
    <el-button @click="bindQQ">bindQQ</el-button>
    <el-button @click="test">测试</el-button>

    <el-button @click="startShare">分享</el-button>
    <el-button type="primary" @click="toLogin">登录</el-button>
    <el-button @click="mubanEasy">测试2</el-button>
    <el-button @click="checkToken">检测登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue';
import { useMouse, useShare, useLocalStorage } from '@vueuse/core';
import loginApi from '@/api/modules/login';

let store1 = '';
const { x, y } = useMouse();
console.log('x', x.value);

const { share, isSupported } = useShare();
console.log('isSupported', isSupported);

const startShare = () => {
  share({
    title: 'Hello',
    text: 'Hello my friend!',
    url: window.location.href,
  });
};
function checkToken() {
  loginApi
    .checkToken({
      uniIdToken: store1,
    })
    .then((res) => {
      console.log('res', res);
    });
}
function bindQQ() {
  loginApi.bindQQ({}).then((res) => {
    console.log('res', res);
  });
}
function test() {
  loginApi
    .test({
      uniIdToken: store1,
    })
    .then((res) => {
      console.log('res', res);
    });
}
function mubanEasy() {
  loginApi.muban_easy({}).then((res) => {
    console.log('res', res);
  });
}
function toLogin() {
  loginApi
    .login({
      appid: '__UNI__1EC916D',
      platform: 'h5',
      username: 'admin',
      password: '123456',
    })
    .then((res) => {
      console.log('res', res);
      store1 = res.data.token;
    });
}

onMounted(() => {
  const mouse = useMouse();
  console.log('mouse.x', mouse.x.value);

  const mouse1 = reactive(useMouse());
  console.log('mouse_', mouse1.x);

  const isDark = usePreferredDark();
  console.log('isDark', isDark.value);

  const store = useLocalStorage('my-storage', {
    name: 'Apple',
    color: 'red',
  });

  console.log('store', store);
});
</script>

<style scoped></style>
