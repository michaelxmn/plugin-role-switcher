# NocoBase Role Switcher

[English](README.md) | [简体中文](README.zh-CN.md)

![NocoBase](https://img.shields.io/badge/NocoBase-2.x-blue)
![Client](https://img.shields.io/badge/Client-V2-orange)
![License](https://img.shields.io/badge/license-MIT-green)

一个为 **NocoBase** 提供顶部导航栏角色切换功能的插件，让角色切换更加直观、高效。

---

## ✨ 效果预览

> *（此处放置插件截图或 GIF 动图）*

---

## 🚀 安装

请选择以下任意一种安装方式。

### 方式一：通过 NPM Package 安装（推荐）

打开 NocoBase **插件管理（Plugin Manager）**。

选择：

**添加插件（Add Plugin） → NPM Package**

输入插件包名：

```text
@michaelxmn/plugin-role-switcher
```

然后点击 **Install** 即可完成安装。

---

### 方式二：上传插件安装包

如果您的部署环境无法访问互联网，可以通过本地安装包进行安装。

1. 从 GitHub Releases 页面下载最新的 **`.tgz`** 插件安装包。
2. 打开 **插件管理（Plugin Manager） → Upload**。
3. 选择下载好的 `.tgz` 文件。
4. 点击 **Install** 完成安装。

**下载地址：**

https://github.com/michaelxmn/plugin-role-switcher/releases

---

### 方式三：通过压缩包链接安装（Compressed File URL）

打开 **插件管理（Plugin Manager） → Compressed File URL**。

输入插件安装包的下载地址，例如：

```text
https://github.com/michaelxmn/plugin-role-switcher/releases/download/v1.0.0/plugin-role-switcher-1.0.0.tgz
```

然后点击 **Install**。

> 请将 `v1.0.0` 替换为需要安装的版本号。

---

### 方式四：从源码安装（开发模式）

此方式适用于插件开发者或希望参与贡献的用户。

#### 1. 克隆 NocoBase 源码仓库

```bash
git clone https://github.com/nocobase/nocobase.git
cd nocobase
```

#### 2. 将本插件克隆到插件目录

```bash
cd packages/plugins

git clone https://github.com/michaelxmn/plugin-role-switcher.git @michaelxmn/plugin-role-switcher
```

#### 3. 安装依赖

```bash
cd ../..
yarn install
```

#### 4. 启动开发环境

```bash
yarn dev
```

启动完成后，如插件未自动启用，请前往 **插件管理（Plugin Manager）** 启用 **Role Switcher** 插件。

---

## 📦 发布方式

| 安装方式                | 说明                          |
| ------------------- | --------------------------- |
| NPM Package         | 通过 NocoBase 插件管理器直接从 npm 安装 |
| Upload              | 上传本地 `.tgz` 插件安装包           |
| Compressed File URL | 通过 `.tgz` 下载链接在线安装          |
| Source Code         | 用于插件开发或二次开发                 |

---

## ✨ 功能特性

* 在顶部导航栏快速切换角色
* 比默认的用户中心入口更加醒目，更容易被用户发现
* 减少操作步骤，提高角色切换效率
* 支持国际化（i18n）
* 兼容 NocoBase Client V2
* 轻量、易于集成

---

## 🤔 为什么需要这个插件？

NocoBase 已内置角色切换功能。

但默认入口位于 **用户中心（User Center）** 中，很多用户在日常使用过程中并不容易发现，尤其是第一次使用系统的新用户，往往不知道系统已经提供了角色切换功能。

本插件将角色切换入口直接放置在**顶部导航栏**，使角色切换更加直观、便捷，显著提升管理员、开发者以及需要频繁切换角色用户的使用体验。

---

## 📖 环境要求

* Node.js 20+
* NocoBase 2.x

### 兼容版本

| NocoBase | 支持情况  |
| -------- | ----- |
| 2.x      | ✅ 已支持 |

---

## 🤝 参与贡献

欢迎各种形式的贡献！

您可以通过以下方式参与项目：

* 提交 Issue
* 提交功能建议
* 提交 Pull Request

---

## ⭐ 支持项目

如果您觉得这个插件对您有所帮助，欢迎在 GitHub 上为项目点一个 ⭐ Star！

您的支持将帮助项目持续改进，并激励后续功能的开发与维护。

---

## 📄 开源协议

本项目基于 **MIT License** 开源。
