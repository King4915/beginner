import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 假设你用的是 React

// 注意这里必须是 export default defineConfig({
export default defineConfig({
  base: '/beginner/',      // 👈 必须有逗号结尾
  plugins: [react()],      // 👈 你的 plugins 属性在这，注意和上面一行用逗号隔开
})
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
});
