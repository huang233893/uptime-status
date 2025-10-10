window.Config = {
  // 显示标题
  SiteName: '酥米的网页检测小站',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur3131603-4cee34ff0f5df874b0f6d246',
  ],

  // 日志天数
  CountDays: 90,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://up.sumi233.top'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/huang233893/uptime-status'
    },
    {
      text: '博客',
      url: 'https://www.sumi233.top'
    },
  ],
};

// 新增：动态渲染美化页脚（避免重复）
function renderFooter() {
  // 检查是否已存在页脚，避免重复渲染
  if (document.getElementById('footer')) return;

  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.innerHTML = `
    <div class="footer-content">
      <div class="api-info">
        基于 UptimeRobot 接口制作，检测频率 5 分钟 © 2020-2025 
        <a href="https://up.sumi233.top">https://up.sumi233.top</a> Version 2.0.0
      </div>
      <div class="stats">
        <div class="stat-item">
          本文总阅读量 
          <span id="busuanzi_page_pv" class="number" 
                style="color: #50ebc4; font-size: 14px; font-weight: bold;"></span> 次
        </div>
        <div class="stat-item">
          本文总访客量 
          <span id="busuanzi_page_uv" class="number" 
                style="color: #03ec16; font-size: 14px; font-weight: bold;"></span> 人
        </div>
        <div class="stat-item">
          本站总访问量 
          <span id="busuanzi_site_pv" class="number" 
                style="color: #9775f5; font-size: 14px; font-weight: bold;"></span> 次
        </div>
        <div class="stat-item">
          本站总访客数 
          <span id="busuanzi_site_uv" class="number" 
                style="color: #e95faf; font-size: 14px; font-weight: bold;"></span> 人
        </div>
      </div>
      <div class="copyright">
        本站所有数据仅供参考 | <a href="/about">关于本站</a>
      </div>
    </div>
  `;

  // 将页脚添加到页面主容器
  const app = document.getElementById('app');
  if (app) app.appendChild(footer);
}

// 页面加载完成后渲染页脚（确保只执行一次）
document.addEventListener('DOMContentLoaded', () => {
  // 等待主内容渲染完成后再渲染页脚，避免位置错乱
  setTimeout(renderFooter, 300);
});
