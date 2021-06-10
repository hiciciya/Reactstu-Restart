## react是什么
React已经是一个普通的js库 也不是一个框架儿而是一个庞大的体系 如果我们把react应用到实际开发中真个技术栈都需要围绕react进行开发改造需要学习一整套的解决方案 前端到后端都是全新的做法
```mermaid
graph LR
react[react重新学] --> 生态[技术生态]
生态-->React
生态-->tool
生态-->构建工具
subgraph 技术栈
React --> j[基本环境以及知识储备]
j-->基本环境
    基本环境-->NodeJS
    基本环境--> Npm
j-->基本知识
    基本知识-->熟悉基本的Html&Css
    基本知识-->掌握基本的JavaScript和基本的编程知识
    基本知识-->对Dom的基本了解
    基本知识-->ES6语法的掌握
React --> 基本语法
tool["包管理工具"]
    tool-->npm
    tool-->pnpm
    tool-->lerna
构建工具
    构建工具 --> webpack
    构建工具 -->gulp
end
```
## 我的计划
React18 即将到来 React自16.8版本后使用方式发生了翻天覆地的变化
重学React对于我来说已经变得重要且紧急。我的工作环境脱离实战，我无法从项目中更快更好的掌握它，如果看官方教程也只是零散不够系统得。因此我挑了一本书《React全家桶前端开发与实例详解》作为一个点 在过程中不端得补充学习 希望可以得到一个好的结果。
全书共1225页
```mermaid
    graph LR 
    book["React全家桶前端开发与实例详解"]-->part1[第一部分]
        part1-->capp[创建第一个React应用程序] 
            capp-->何如编写组件
            capp-->如何处理用户交互
            capp-->如何管理表单
            capp -->如何与服务器交互
        part1-->cra[Create-react-app]
            cra-->工作原理
            cra-->编写自动化单元测试
            cra-->客户端路由构建多页应用程序
    book-->part2[第二部分]
        part2--> Redux
        part2--> GraphQL
        part2--> Relay
```