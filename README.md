# Wang Qibo · 学习笔记

个人学习笔记网站，使用静态 HTML、CSS 和 JavaScript，由 GitHub Pages 发布。

- 网站：https://godjupit.github.io/
- 仓库：https://github.com/godjupit/godjupit.github.io

## 本地预览

在项目目录执行 `python3 -m http.server 8000`，然后访问 http://localhost:8000。

## 添加笔记

1. 在 `notes/` 中创建一篇独立 HTML 页面，沿用现有页面的头部、主题切换和正文样式。
2. 在 `index.html` 的“学习笔记”列表添加对应链接，并更新笔记数量。
3. 修改后提交并推送到 `main` 分支，GitHub Pages 会自动发布。

## 目录结构

```text
.
├── index.html
├── README.md
├── assets/
│   ├── favicon.svg
│   ├── main.js
│   └── styles.css
└── notes/
    └── cuda-memory.html
```
