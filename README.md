# Uptime-status-modify

基于 UptimeRobot API 的在线状态面板，由 geekyouth 大佬的原项目修改而来

原项目地址：[点我跳转]("点我跳转" https://github.com/geekyouth/uptime-status)

<img width="1152" alt="image" src="https://raw.githubusercontent.com/huang233893/uptime-status/refs/heads/master/image/2.JPG">

## 手机端截图
![](https://raw.githubusercontent.com/huang233893/uptime-status/refs/heads/master/image/2.JPG)

## 页尾截图
![](https://raw.githubusercontent.com/huang233893/uptime-status/refs/heads/master/image/3.JPG)

# 优势
- 更好的界面和动画
- 适应式布局
- 网格式览图
- 手机端适配

# 准备

- 您需要先到 [UptimeRobot](https://uptimerobot.com/ "UptimeRobot") 添加站点监控，并在 My Settings 页面获取 API Key，仅推荐使用ReadOnly API（没有安全问题）
- 推荐使用vercel、netlify进行托管

# 如何部署

- 克隆或者 fork 本仓库
- 修改 `config.js` 文件：
   - `SiteName`: 要显示的网站名称
   - `ApiKeys`: 从 UptimeRobot 获取的 Read-Only API Key
   - `CountDays`: 要显示的日志天数，建议 60 或 90，显示效果比较好
   - `ShowLink`: 是否显示站点链接
   - `Navi`: 导航栏的菜单列表
- 傻瓜式部署到 vercel 或者 netlify
