import { createApp } from 'vue'
import ProfileCard from './components/MainContent.vue'
import SnowEffect from './assets/js/snowEffect.ts'


createApp(ProfileCard).mount('#app')

const snowEffect = new SnowEffect();
snowEffect.start();

let isSnowing = true; // 默认启用雪花特效
// 添加全局的开关按钮
const toggleButton = document.createElement("button");
toggleButton.innerText = "❄";
toggleButton.style.position = "fixed";
toggleButton.style.zIndex = "1000";
toggleButton.style.bottom = "20px"; // 距离底部20px
toggleButton.style.right = "20px"; // 距离右侧20px
toggleButton.style.width = "40px"; // 按钮宽度
toggleButton.style.height = "40px"; // 按钮高度
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "50%"; // 圆形按钮
toggleButton.style.fontSize = "20px"; // 字体大小
toggleButton.style.cursor = "pointer";
toggleButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
document.body.appendChild(toggleButton);

// 页面加载时启动雪花特效
snowEffect.start();


// 添加按钮点击事件，用于控制雪花特效
toggleButton.addEventListener("click", () => {
    if (isSnowing) {
        snowEffect.stop();
        toggleButton.innerText = "⛔";
    } else {
        snowEffect.start();
        toggleButton.innerText = "❄"; // 深灰色
    }
    isSnowing = !isSnowing;
});

// 页面离开前停止雪花特效，避免内存泄漏
window.addEventListener("beforeunload", () => {
    snowEffect.stop();
});