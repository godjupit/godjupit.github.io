# Wang Qibo · 中文技术主页

轻量静态个人主页，使用 HTML、CSS、JavaScript，直接由 GitHub Pages 发布，无需后端或构建工具。

- 网站：https://godjupit.github.io/
- 仓库：https://github.com/godjupit/godjupit.github.io
- 视觉参考：https://astro-starter-portfolio.vercel.app/ （米白 / 深色背景、衬线标题、蓝色强调色、细分隔线项目列表）
- 实现为独立静态页面，未使用 Astro 框架。

## 本地预览

在项目目录执行：

```bash
python3 -m http.server 8000
```

访问 http://localhost:8000 。

## 修改内容

- **个人介绍、首页项目、技术方向、联系信息**：编辑 `index.html`。
- **项目详情**：编辑 `projects/` 中的对应 HTML 文件。
- **源码链接**：在 `assets/main.js` 的 `projectLinks` 中填写真实公开仓库 URL；留空时不显示源码按钮。
- **添加项目**：在 `projects/` 创建详情页，在首页复制一个 `.project-row` 并修改链接、标题和介绍，再更新项目计数。需要源码按钮时，在 JS 中添加同名项目键，并在详情页的 `main` 上设置 `data-project`。
- **名字**：当前使用 GitHub 上的公开姓名 Wang Qibo；可以修改首页、详情页、页脚和元信息中的名字。
- **邮箱**：当前联系方式为 GitHub。公开邮箱应由本人确认后再添加。
- **颜色、排版、移动端适配**：编辑 `assets/styles.css`。
- 修改 CSS / JS 后，可同步更新各 HTML 资源地址的版本参数，减少浏览器旧缓存影响。

## 自动发布

GitHub Pages 已配置为从 `main` 分支根目录自动发布，发布类型为 branch publishing。无需额外部署工作流或令牌。

修改完成后执行：

```bash
git add index.html assets projects README.md
git commit -m "Update personal website"
git push origin main
```

GitHub 会自动重新发布。查看状态：

```bash
gh api repos/godjupit/godjupit.github.io/pages --jq '.status'
```

如 CLI 遇到 `unexpected EOF`，可在命令前临时添加 `GODEBUG=http2client=0`。登录和 Git 凭据已经在本机配置；不需要把令牌写入网站代码。

## 目录结构

```text
.
├── .nojekyll
├── index.html
├── README.md
├── assets/
│   ├── favicon.svg
│   ├── main.js
│   └── styles.css
└── projects/
    ├── llm.html
    ├── cuda.html
    ├── agent.html
    └── xv6.html
```

网站介绍仅基于已提供的技术兴趣与项目方向，不添加未确认的学历、工作经历、论文或性能指标。
