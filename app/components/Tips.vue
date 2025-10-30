<template>
    <header>
        <div class="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-500 text-white py-2 shadow-md">
            <div class="animate-scroll whitespace-nowrap flex items-center">
                <span class="inline-flex items-center mx-4">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clip-rule="evenodd" />
                    </svg>
                    本程序不会保存您的任何信息，请妥善处理个人信息
                </span>
                <span class="inline-flex items-center mx-4">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd" />
                    </svg>
                    所有信息都只会保存在您的浏览器中
                </span>
                <span class="inline-flex items-center mx-4">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd" />
                    </svg>
                    清除浏览器缓存后，您的信息将被删除
                </span>
                <a href="https://github.io/FocusBestStudio"
                    class="inline-flex items-center mx-4 underline hover:text-yellow-200 transition-colors">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path
                            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    浏览我们的其他作品
                </a>
                <a href="https://caoyang2002.xyz"
                    class="inline-flex items-center mx-4 underline hover:text-yellow-200 transition-colors">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd" />
                    </svg>
                    支持作者
                </a>
            </div>
        </div>
    </header>
</template>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
}

.animate-scroll {
    display: inline-block;
    animation: scroll 60s linear infinite;
    -webkit-animation: scroll 60s linear infinite;
    /* 确保动画在页面加载时立即开始 */
    animation-delay: 0s !important;
    -webkit-animation-delay: 0s !important;
}

/* 确保链接样式正确 */
.animate-scroll a {
    color: white;
    text-decoration: underline;
}

.animate-scroll a:hover {
    color: #fef08a;
    /* yellow-300 */
}

/* 确保容器正确隐藏溢出内容 */
.overflow-hidden {
    overflow: hidden !important;
}
</style>