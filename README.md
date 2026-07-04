# NocoBase Role Switcher

[English](README.md) | [简体中文](README.zh-CN.md)

A NocoBase plugin that adds a **Role Switcher** to the top navigation bar, allowing users to switch roles quickly without opening the User Center.

## ✨ Why This Plugin?

NocoBase already provides built-in role switching. However, the feature is located inside the **User Center**, which can make it difficult for users to discover or access during daily use.

This plugin moves the role switcher to the **top navigation bar**, making it more visible and significantly improving the user experience for users who frequently work with multiple roles.

## Features

* 🚀 Switch roles directly from the top navigation bar
* 👀 More visible than the default User Center entry
* ⚡ Reduce clicks and improve efficiency
* 🌍 Internationalization (i18n) support
* 🎨 Compatible with NocoBase Client V2
* 🔌 Easy to integrate into the NocoBase source code

## Use Cases

* Administrators managing multiple roles
* Developers testing role-based permissions
* Product demonstrations and training
* Organizations where users frequently switch roles

## Requirements

* Node.js 20+
* Yarn
* NocoBase 2.x

## Installation

Clone the NocoBase source code:

```bash
git clone https://github.com/nocobase/nocobase.git
cd nocobase
```

Clone this plugin into the plugins directory:

```bash
cd packages/plugins

git clone https://github.com/michaelxmn/plugin-role-switcher.git @michaelxmn/plugin-role-switcher
```

Install dependencies:

```bash
yarn install
```

Start the development environment:

```bash
yarn dev
```

## Compatibility

| NocoBase Version | Supported |
| ---------------- | --------- |
| 2.x              | ✅         |

## License

MIT License.
