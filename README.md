<h2 align="center">仓库管理系统前端</h2>

# Quick Start

## 依赖安装

- nodejs >= 8.0.0
- npm >= 5.6.0(推荐使用[cnpm](https://npm.taobao.org/))

## 启动

### node依赖安装：

```bash
  $ npm install 
  或
  $ cnpm install
```

### 启动项目
```bash
  $ npm start
```

## 打包发布

执行命令：
```bash
  $ npm run build
```

压缩后的js文件会出现在dist目录下，使用nginx/apache将里面的文件作为静态文件访问即可.

## 可配置项

项目采用roadhog作为打包器，具体配置请参考 [roadhog](https://www.npmjs.com/package/roadhog).

## 工具介绍

- 项目框架： [dva](https://www.npmjs.com/package/dva)
- 打包器: [roadhog](https://www.npmjs.com/package/roadhog)
- UI框架： [antd](https://www.npmjs.com/package/antd)
