# clientside

### git clone 后安装套件

```
npm install
```

### 开发环境

```
npm run serve


等同于：vue-cli-service serve [options] [entry]
选项：

  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)
```

### 正式模式

```
npm run build

等同于：vue-cli-service build [options] [entry|pattern]

选项：

  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化
```

### 开发环境 正式环境 的档案

- .env.development 开发模式
- .env.production 正式模式

### PROXY

参考文件

- [CLI 服务](https://cli.vuejs.org/zh/guide/cli-service.html)
- [官方说明文件](https://cli.vuejs.org/zh/config/#devserver-proxy)
- [vue cli4 跨域问题](https://segmentfault.com/q/1010000022185695)
- [vue.config.js 的详细代理 devServer.proxy 配置](https://blog.csdn.net/iteye_10432/article/details/103757786)
- [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#proxycontext-config)
- [PeterLiao,环境变数 mode & .env 档](https://ithelp.ithome.com.tw/articles/10208796)

如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。

`devServer.proxy` 可以是一个指向开发环境 API 服务器的字符串：

`vue.config.js`

```JS
devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

vue-cli 4 建构专案

资料夹结构：

components

- layout - UI 等介面
- views - router 页面

---

format 格式:

.prettierrc

{
"singleQuote": true, //单引号
"printWidth": 200, //200 断行
"trailingComma": "es5",
"semi": false //不要每句后都有分号
}

---

套件架构:

- bootstrap-vue - 主要框架
- font-awesome - icon
- sass-loader - sass
- vee-validate - 检查格式
- vue-router - 换页路径

- fontawesome 相关

  - @fortawesome/fontawesome-svg-core
  - @fortawesome/free-brands-svg-icons
  - @fortawesome/free-regular-svg-icons
  - @fortawesome/free-solid-svg-icons
  - @fortawesome/vue-fontawesome

- 表格 ag-grid

安裝

```
npm install --save ag-grid-community ag-grid-vue vue-property-decorator
npm install --save ag-grid-enterprise
```

- 表格樣式 https://www.ag-grid.com/javascript-grid-themes-provided/#customising-themes

- vue step 進度
  - https://www.cssscript.com/step-flow-bootstrap/
