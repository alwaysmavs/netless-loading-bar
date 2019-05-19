# @netless/react-loading-bar

> a loading bar

[![NPM](https://img.shields.io/npm/v/@netless/react-loading-bar.svg)](https://www.npmjs.com/package/@netless/react-loading-bar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 1. 说明

本项目技术选型为：`React` `Typescript`
打包工具为： `rollup`  



## 2. 安装

```bash
npm install --save @netless/react-loading-bar

或者

yarn add @netless/react-loading-bar
```



## 3. 接口说明

| 参数                       | 说明               | 类型                                         | 默认值 |
| :------------------------- | :----------------- | :------------------------------------------- | :----: |
| loadingPercent                | 载入百分比 （1 -100）   | number                                  |        |
| style?             | 进度条样式 | React.CSSProperties |        |



## 4. 使用概览

```tsx
import * as React from "react";
import TopLoadingBar from "@netless/react-loading-bar";

export default class TopLoadingBarBoxExample extends React.Component<{}, {}> 
  render () {
    return (
      <TopLoadingBar
        loadingPercent={percent}/>
    )
  }
}
```

## 5. 启动项目

1. 获取源码

    ```bash
    git clone git@github.com:netless-io/netless-react-loading-bar.git
    ```

2. 进入项目并安装库文件依赖

    ```bash
    cd netless-react-loading-bar
    yarn
    ```

3. 启动库文件项目

    ```bash
        yarn start
    ```

4. 进入项目并安装 `example` 文件依赖

    ```bash
        cd example
        yarn
    ```

5. 启动 `example` 项目

    ```bash
        yarn start
    ```

## 6. 项目截图

![loading-bar-898](https://ohuuyffq2.qnssl.com/loading-bar-898.png)

## License

MIT © [wushuang](https://github.com/wushuang)
