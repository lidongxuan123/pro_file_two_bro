# umi 目录 
<!--临时文件入口-->
> 临时文件目录，比如入口文件、路由等，都会被临时生成到这里。不要提交 .umi 目录到 git 仓库，他们会在 umi dev 和 umi build 时被删除并重新生成

>

> layouts/index.tsx 约定路由时的全局布局文件


<!--page 所有路由组件存放再这里-->


app.ts 运行时的配置文件，可以在这里扩展运行时的能力，比如修改路由修改render方法