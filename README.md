## 介绍

应该会是一个 UI 库..

## 使用

查看：`yarn start`
查看：`yarn docz:dev`

## 安装依赖

1. `yarn add docz docz-theme-default @types/react @types/react-dom -D`
2. `yarn add react react-dom`

## 准备

1. `package.json` 文件中加入启动脚本:
```
  "scripts": {
    "docz:dev": "docz dev",
    "docz:build": "docz build"
  },
```
2. 创建`docz`配置文件：`doczrc.js`:
```
  export default {
    title: 'Leo-docs',
    typescript: true,
    notUseSpecifiers: true,
    filterComponents: files => files.filter(file => /([^d]\.tsx?)$/.test(file)),
  };
```


