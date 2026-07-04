# NocoBase Role Switcher

[English](README.md) | [简体中文](README.zh-CN.md)

![NocoBase](https://img.shields.io/badge/NocoBase-2.x-blue)
![Client](https://img.shields.io/badge/Client-V2-orange)
![License](https://img.shields.io/badge/license-MIT-green)

A NocoBase plugin that adds a **Role Switcher** to the top navigation bar, making role switching faster and easier to discover.

---

## ✨ Preview

> *(some screenshots or a GIF here.)*

---

## 🚀 Quick Start

Choose one of the following installation methods.

### Install from npm (Recommended)

```bash
npm install @michaelxmn/plugin-role-switcher
```

or

```bash
yarn add @michaelxmn/plugin-role-switcher
```

---

### Install from Local Package

If your environment does not have Internet access, or you prefer offline installation, you can install the plugin from a local package.

1. Download the latest **`.tgz`** package from the **GitHub Releases** page.
2. Copy the package to your NocoBase server.
3. Install it with npm or Yarn.

```bash
npm install ./plugin-role-switcher-x.x.x.tgz
```

or

```bash
yarn add ./plugin-role-switcher-x.x.x.tgz
```

> **Download:**
> https://github.com/michaelxmn/plugin-role-switcher/releases

---

### Install from Source Code (Development)

This method is intended for plugin development and contributors.

#### 1. Clone the NocoBase repository

```bash
git clone https://github.com/nocobase/nocobase.git
cd nocobase
```

#### 2. Clone this plugin into the plugins directory

```bash
cd packages/plugins

git clone https://github.com/michaelxmn/plugin-role-switcher.git @michaelxmn/plugin-role-switcher
```

#### 3. Install dependencies

```bash
cd ../..
yarn install
```

#### 4. Start the development server

```bash
yarn dev
```

Once the application is running, enable the **Role Switcher** plugin in the NocoBase Plugin Manager if it is not enabled automatically.


---

## 📦 Releases

| Method                | Description                              |
| --------------------- | ---------------------------------------- |
| npm                   | Install directly from the npm registry   |
| GitHub Release (.tgz) | Offline installation                     |
| Source Code           | For plugin development and customization |

---

## ✨ Features

* Switch roles directly from the top navigation bar
* Better visibility than the default User Center entry
* Faster role switching with fewer clicks
* Internationalization (i18n)
* Compatible with Client V2
* Lightweight and easy to integrate

---

## 🤔 Why This Plugin?

NocoBase already includes a built-in role switcher.

However, it is located inside the **User Center**, making it less noticeable to many users. Especially for new users, the feature can be difficult to discover.

This plugin places the role switcher directly in the **top navigation bar**, making role switching more intuitive and significantly improving the user experience for administrators, developers, and users who frequently switch roles.

---

## 📖 Documentation

### Requirements

* Node.js 20+
* Yarn or npm
* NocoBase 2.x

### Compatibility

| NocoBase | Status      |
| -------- | ----------- |
| 2.x      | ✅ Supported |

---

## 🤝 Contributing

Contributions are welcome!

Feel free to submit Issues, feature requests, or Pull Requests.

---

## ⭐ Support

If you find this plugin useful, please consider giving it a ⭐ on GitHub.

Your support helps improve the project and encourages future development.

---

## 📄 License

MIT License.
