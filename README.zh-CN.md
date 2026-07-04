# NocoBase Role Switcher

[English](README.md) | [简体中文](README.zh-CN.md)

一个为 NocoBase 提供**顶部导航栏角色切换**功能的插件，用户无需进入用户中心即可快速切换角色。

## ✨ 为什么需要这个插件？

NocoBase 已内置角色切换功能，但入口位于**用户中心（User Center）**中，很多用户在日常使用过程中并不容易发现，也需要额外点击才能完成角色切换。

本插件将角色切换入口直接放置在**顶部导航栏（Top Navigation Bar）**，使角色切换更加直观、高效，尤其适合需要频繁切换角色的场景。

## 功能特性

* 🚀 在顶部导航栏快速切换角色
* 👀 比默认入口更加醒目，方便用户发现
* ⚡ 减少操作步骤，提升使用效率
* 🌍 支持国际化（i18n）
* 🎨 兼容 NocoBase Client V2
* 🔌 易于集成到 NocoBase 源码项目

## 适用场景

* 系统管理员
* 权限测试
* 开发调试
* 产品演示
* 需要频繁切换角色的业务系统

## 环境要求

* Node.js 20+
* Yarn
* NocoBase 2.x

## 安装方式

首先克隆 NocoBase 源码：

```bash
git clone https://github.com/nocobase/nocobase.git
cd nocobase
```

然后将本插件克隆到插件目录：

```bash
cd packages/plugins

git clone https://github.com/michaelxmn/plugin-role-switcher.git @michaelxmn/plugin-role-switcher
```

安装依赖：

```bash
yarn install
```

启动开发环境：

```bash
yarn dev
```

## 兼容版本

| NocoBase 版本 | 是否支持 |
| ----------- | ---- |
| 2.x         | ✅    |

## 开源协议

MIT License。
