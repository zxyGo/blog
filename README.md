# blog-v1.0

> A blog for me.

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## 项目框架

[vuetify](https://github.com/vuetifyjs/vuetify)

[koa](https://github.com/koajs/koa)

[Nuxt.js](https://github.com/nuxt/nuxt.js)

## 结构分析
```
|- assets // 资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript
|- components // 组件目录 components 用于组织应用的 Vue.js 组件
|- layouts // 布局目录 layouts 用于组织应用的布局组件
|- middleware // 存放应用的中间件
|- pages // 页面目录 pages 用于组织应用的路由及视图
|- plugins // 插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
|- server // 服务器端渲染配置
|- static // 静态文件目录 static 用于存放应用的静态文件
|- store // store 目录用于组织应用的 Vuex 状态树 文件
|- .gitignore // git 忽略文件
|- nuxt.config.js // nuxt.config.js 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置
|- package.json // package.json 文件用于描述应用的依赖关系和对外暴露的脚本接口
```

## 问题合集
* 更改 vuetify 默认样式，可以在 assets-style-app.styl 中重置
