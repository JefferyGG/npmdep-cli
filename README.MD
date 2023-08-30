## 安装

`npm i npmdeps-cli -g`

## 使用

`npmdeps-cli analyze`

在需要分析的项目目录下敲以上命令，工具会从该目录下的 `package.json`开始分析。

> 注意：本工具仅支持分析当前目录与 `package.json`文件同级的 `node_modules`文件夹里的npm包

## 参数

-   `--json <file-path>` : 支持把分析结果以json形式输出，无需打开网页，把文件（deps-trees.json）输出到指定路径
-   `--depth <n>` : 支持控制递归分析的深度，默认为**300**

例：

```
npmdeps-cli analyze --json ./
npmdeps-cli analyze --depth 600
npmdeps-cli analyze --depth 600 --json ./
```
