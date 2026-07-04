# NocoBase Role Switcher

[English](README.md) | [简体中文](README.zh-CN.md)

![NocoBase](https://img.shields.io/badge/NocoBase-2.x-blue)
![Client](https://img.shields.io/badge/Client-V2-orange)
![License](https://img.shields.io/badge/license-MIT-green)

一个为 **NocoBase** 提供顶部导航栏角色切换功能的插件，让角色切换更加直观、高效。

---

## ✨ 效果预览

> *（此处放置截图或 GIF 动图）*

---

## 🚀 快速开始

请选择以下任意一种安装方式。

### 通过 npm 安装（推荐）

```bash
npm install @michaelxmn/plugin-role-switcher
```

或

```bash
yarn add @michaelxmn/plugin-role-switcher
```

---

### 通过本地安装包安装

如果您的部署环境无法访问互联网，或希望采用离线安装方式，可以使用本地安装包进行安装。

1. 从 **GitHub Releases** 页面下载最新的 **`.tgz`** 安装包。
2. 将安装包复制到 NocoBase 服务器。
3. 使用 npm 或 Yarn 安装。

```bash
npm install ./plugin-role-switcher-x.x.x.tgz
```

或

```bash
yarn add ./plugin-role-switcher-x.x.x.tgz
```

> **下载地址：**
>
> https://github.com/michaelxmn/plugin-role-switcher/releases

---

### 从源码安装（开发模式）

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

启动完成后，如果插件未自动启用，请前往 **插件管理（Plugin Manager）** 启用 **Role Switcher** 插件。

---

## 📦 发布方式

| 安装方式                  | 说明            |
| --------------------- | ------------- |
| npm                   | 通过 npm 仓库直接安装 |
| GitHub Release (.tgz) | 适用于离线安装       |
| Source Code           | 用于插件开发或二次开发   |

---

## ✨ 功能特性

* 在顶部导航栏快速切换角色
* 比默认的用户中心入口更加醒目，方便用户发现
* 减少操作步骤，提高角色切换效率
* 支持国际化（i18n）
* 兼容 NocoBase Client V2
* 轻量易集成

---

## 🤔 为什么需要这个插件？

NocoBase 已内置角色切换功能。

但默认入口位于 **用户中心（User Center）**，很多用户在日常使用过程中并不容易发现，尤其是新用户，往往不知道系统已经提供了角色切换功能。

本插件将角色切换入口直接放置在**顶部导航栏**，让角色切换更加直观、便捷，能够显著提升管理员、开发者以及需要频繁切换角色用户的使用体验。

---

## 📖 使用要求

### 环境要求

* Node.js 20+
* Yarn 或 npm
* NocoBase 2.x

### 兼容版本

| NocoBase | 支持情况  |
| -------- | ----- |
| 2.x      | ✅ 已支持 |

---

## 🤝 参与贡献

欢迎提交各种形式的贡献！

您可以通过以下方式参与项目：

* 提交 Issue
* 提交功能建议
* 提交 Pull Request

---

## ⭐ 支持项目

如果您觉得这个插件对您有所帮助，欢迎在 GitHub 上给项目点一个 ⭐ Star！

您的支持将帮助项目持续改进，并激励后续功能的开发与维护。

---

## 📄 开源协议

本项目采用 **MIT License** 开源协议。
