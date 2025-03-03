<template>
  <div :class="['main-content', isDarkMode ? 'dark' : 'light']">
    <div class="site-title">HokoriChan's Website();</div>
    <div class="spacer"></div>
    <div class="profile-container">
      <div class="profile-content flex-col md:flex-row">
        <div class="avatar">
          <img src="/src/assets/padoru.png" alt="HokoriChan's Avatar" class="avatar-image">
        </div>

        <div class="intro">
          <div class="text-container">
            <h1 class="name">{{ name }}</h1>
            <h3 class="title">{{ title }}<span class="cursor">&nbsp</span></h3>
            <p class="description">{{ description }}</p>
          </div>
        </div>
      </div>

      <div class="buttons">
        <button class="blog-btn" @click="openBlog">
          <i class="fa-solid fa-blog icon"></i> BLOG
        </button>
        <button class="friends-btn">
          <i class="fa-solid fa-paw icon" @click="openFriends"></i> 喵友们
        </button>
        <button class="fediverse-btn" @click="openFediverse">
          <i class="fa-solid fa-earth-americas icon"></i>喵窝
        </button>
        <button class="mode-btn" @click="toggleMode">
          <i class="fa-solid fa-adjust icon">{{ isDarkMode? '&nbsp 日间模式' : '&nbsp 夜间模式' }}</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      name: '尘尘酱 HokoriChan',
      title: '个人势 Blogger, Coder, Cosplayer, \nRythmgame Player, 以及笨蛋⑨和车万厨',
      description: '很高兴你能找到咱ˋ( ° ▽、° ) ！\n泥可以叫咱 『尘尘酱』 或者 『鹿鹿酱』 \n什么都会但又不会，前端开发绝赞学习中！👋',
      isDarkMode: false,
    };
  },
  methods: {
    loadSnowEffect(){
      const script = document.createElement('script');
      script.src = '/src/assets/js/snowEffect.ts';
      script.async = true;
      script.onload = () => console.log('Snow effect loaded');
      script.onerror = () => console.log('Snow effect error');
      document.body.appendChild(script);
    },
    mounted() {
      this.checkTimeForMode();
      setTimeout(() => {
        this.loadSnowEffect();
      },0);
    },
    // 检查时间，切换模式
    checkTimeForMode: function () {
      const hours = new Date().getHours();
      this.isDarkMode = !(hours >= 6 && hours <= 20);
    },
    openBlog() {
      window.location.href = 'https://blog.shika-mori.top';
    },
    openFriends() {
      window.location.href = 'https://blog.shika-mori.top/friends/';
    },
    openFediverse() {
      window.location.href = 'https://nya.one/@hokori';
    },
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  },
  mounted() {
    this.checkTimeForMode();
  },
  name: 'ProfileCard'
});
</script>

<style scoped>
.spacer {
  height: 6rem; /* 设置高度以产生间隔 */
}

.site-title {
  position: absolute;
  top: 2rem;
  left: 3.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #4db6e1; /* 柔和的蓝色 */
  user-select: none; /* 禁用文本选择 */
  pointer-events: none; /* 禁用鼠标事件 */
  cursor: default; /* 设置为默认光标 */
  margin-bottom: 10px;
  word-wrap: break-word;
}

.main-content {
  background-color: #1e1e2f; /* 深蓝色背景 */
  min-height: 100vh; /* 高度至少覆盖整个视窗 */
  width: 100vw; /* 宽度覆盖整个视窗宽度 */
  display: flex; /* 使用 flex 布局来调整内容位置 */
  flex-direction: column; /* 垂直布局 */
  align-items: center; /* 水平居中对齐 */
  text-align: center; /* 文本居中 */
  max-width: 100%; /* 最大宽度为 100% */
  padding: 20px; /* 去除内边距 */
  margin: 0; /* 去除外边距 */
  box-sizing: border-box; /* 防止 padding 影响元素尺寸 */
  transition: background-color 0.5s ease, color 0.5s ease; /* 过渡效果 */
}

.main-content.light {
  background-color: #E0F7FA;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff; /* 白色文本 */
  min-height: fit-content;
  margin-bottom: 5rem;
  position: relative;
}

.profile-content {
  width: 100%;
  height: auto; /* 自适应高度 */
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
  text-align: left;
}

.main-content.dark .profile-container {
  color: #ffffff; /* 夜间模式下的白色文本 */
}

.main-content.light .profile-container {
  color: #000000; /* 日间模式下的黑色文本 */
}

.main-content.light .profile-container,
.main-content.light .name,
.main-content.light .title,
.main-content.light .description {
  transition: color 0.5s ease; /* 添加文本颜色过渡 */
}

.main-content.light .blog-btn,
.main-content.light .friends-btn,
.main-content.light .fediverse-btn,
.main-content.light .mode-btn {
  transition: background-color 0.5s ease, color 0.5s ease; /* 添加按钮的过渡效果 */
}

.main-content.light .blog-btn,
.main-content.light .friends-btn,
.main-content.light .fediverse-btn,
.main-content.light .mode-btn {
  border: 1px solid #0097A7; /* 日间模式下的边框颜色 */
  background-color: #f3f3f3; /* 日间模式下按钮背景颜色 */
  color: #333333; /* 日间模式下按钮字体颜色 */
}

.main-content.light .blog-btn:hover,
.main-content.light .friends-btn:hover,
.main-content.light .fediverse-btn:hover,
.main-content.light .mode-btn:hover {
  background-color: #0097A7; /* 悬停时的按钮背景颜色 */
  color: #FFFFFF; /* 悬停时的按钮字体颜色 */
}

.main-content.light .name {
   color: #00796B;
}

.main-content.light .description {
  color: #3f3f3f; /* 日间模式下描述文本的颜色 */
}

.main-content.light .title {
  color: #3a3a3a; /* 日间模式下 H3 的字体颜色 */
  background: linear-gradient(90deg, #4DB6E1, #A788FB); /* 绿色渐变 */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 头像样式 */
.avatar {
  border: 3px solid #4db6e1; /* 柔和的蓝色边框 */
  border-radius: 50%;
  overflow: hidden;
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.avatar-image {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro {
  text-align: left;
  flex: 1; /* 允许 intro 自适应宽度 */
  font-size: 1.2rem;
  margin-bottom: 2rem;
  word-wrap: break-word;
}

.text-container {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  justify-content: center; /* 垂直居中 */
  width: 100%; /* 宽度自适应 */
}

.name {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: #ffffff; /* 白色文本 */
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(90deg, #6ab04c, #badc58); /* 绿色渐变 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  position: relative;
  white-space: pre-line; /* 保持换行 */
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
  font-size: 1rem;
  margin-top: 0.5rem;
  white-space: pre-line;
  color: #f3f3f3; /* 浅灰色 */
}

/* 按钮部分 */
.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap; /* 确保按钮可以换行 */
}

.blog-btn,
.friends-btn,
.fediverse-btn,
.mode-btn {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #4db6e1; /* 柔和的蓝色边框 */
  color: #ffffff; /* 白色文本 */
  border-radius: 0.375rem;
  transition: background-color 0.3s, color 0.3s;
  width: auto; /* 自动宽度 */
  max-width: 180px; /* 最大宽度 */
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
}

@media (max-width: 600px) {
  .blog-btn,
  .friends-btn,
  .fediverse-btn,
  .mode-btn {
    width: 100%; /* 在小屏幕时设置按钮宽度为 100% */
  }
}

.blog-btn:hover,
.friends-btn:hover,
.fediverse-btn:hover,
.mode-btn:hover {
  background-color: #4db6e1; /* 悬停时的柔和蓝色背景 */
  color: #1e1e2f; /* 深色文本 */
}

.icon {
  margin-right: 0.5rem;
}
</style>
/**/