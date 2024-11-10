<template>
  <div class="main-content">
  <div class="site-title">HokoriChan's Website();</div>
  <div class="spacer"></div>
  <div class="profile-container">
    <!-- 网站标题 -->
    <!-- 个人简介和头像分开 -->
    <div class="profile-content flex-col md:flex-row">
      <div class="avatar">
        <img src="/src/assets/avatar.png" alt="Avatar" class="avatar-image">
      </div>

      <div class="intro">
        <h1 class="name">{{ name }}</h1>
        <h3 class="title">{{ title }}<span class="cursor">&nbsp</span></h3>
        <p class="description">{{ description }}</p>
        <!-- 一言 API -->
        <div id="hitokoto">
          <p id="hitokoto_text">鹿鹿酱的外星电波 :D 获取中...</p>
        </div>
      </div>
    </div>

    <!-- 按钮部分 -->
    <div class="buttons">
      <button class="blog-btn" onclick="window.open('https://nya.one')">
        <i class="fa-solid fa-blog icon"></i> BLOG
      </button>
      <button class="friends-btn">
        <i class="fa-solid fa-paw icon"></i> 喵友们
      </button>
      <button class="fediverse-btn" onclick="window.open('https://nya.one/@hokori')">
        <i class="fa-solid fa-earth-americas"></i>&nbsp喵窝
      </button>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfileCard',
  data() {
    return {
      name: '尘尘酱 HokoriChan',
      title: '个人势 Blogger, Coder, Cosplayer, \nRythmgame Player, 以及笨蛋⑨和车万厨',
      description: '很高兴你能找到咱ˋ( ° ▽、° ) ！\n泥可以叫咱 【尘尘酱】 或者 【鹿鹿酱】 \n什么都会但又不会，前端开发绝赞学习中！👋'
    };
  },
});
</script>

<style scoped>
.spacer {
  height: 6rem; /* 设置高度以产生间隔 */
}
.main-content {
  background-color: #262626; /* 浅蓝色背景 */
  min-height: 100vh;        /* 高度至少覆盖整个视窗 */
  width: 100vw;             /* 宽度覆盖整个视窗宽度 */
  display: flex;            /* 使用 flex 布局来调整内容位置 */
  flex-direction: column;   /* 垂直布局 */
  align-items: center;      /* 水平居中对齐 */
  padding: 0;               /* 去除内边距，防止背景边缘留黑边 */
  margin: 0;                /* 去除外边距 */
}
/* 页面容器 */
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  min-height: fit-content;
  margin-bottom: 5rem;
  position: relative;
}
/* 用户名样式 */
.profile-card h1 {
  font-size: 2.2em;
  color: #005fa3; /* 更深一点的蓝色 */
}
.profile-card h3 {
  font-size: 1.5em;
  background: linear-gradient(90deg, #33a1ff, #66c2ff);
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

/* 左上角网站标题 */
.site-title {
  position: absolute;
  top: 2rem;
  left: 3.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #007acc; /* yellow-500 */
  user-select: none;         /* 禁用文本选择 */
  pointer-events: none;      /* 禁用鼠标事件 */
  cursor: default;           /* 设置为默认光标 */
}
/* 个人简介和头像的容器 */
.profile-content {
  width: 100%;
  height: 20rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
  text-align: left;
}

/* 头像样式 */
.avatar {
  border: 3px solid #007acc;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-image {
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
}

/* 个人简介样式 */
.intro {
  text-align: left;
}

.name {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(90deg, #33a1ff, #66c2ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  position: relative;
}
.title {
  white-space: pre-line;
}
.cursor::after {
  content: '|';
  animation: blink 1s infinite;
}
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.description {
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
.description {
  white-space: pre-line;
  font-size: 1rem;
  color: #58B2DC;
}

/* 按钮部分 */
.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.blog-btn,
.friends-btn,
.fediverse-btn {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #007ACC;
  color: #58B2DC;
  border-radius: 0.375rem;
  transition: background-color 0.3s, color 0.3s;
}

.blog-btn:hover,
.friends-btn:hover,
.fediverse-btn:hover{
  background-color: #007acc;
  color: WHITE;
}

.icon {
  margin-right: 0.5rem;
}
</style>
