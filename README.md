# NocoBase Role Switcher

[English](README.md) | [简体中文](README.zh-CN.md)

![NocoBase](https://img.shields.io/badge/NocoBase-2.x-blue)
![Client](https://img.shields.io/badge/Client-V2-orange)
![License](https://img.shields.io/badge/license-MIT-green)

A NocoBase plugin that adds a **Role Switcher** to the top navigation bar, making role switching faster and easier to discover.

---

## ✨ Preview

> *(Add screenshots or a GIF here.)*

---

## 🚀 Installation

Choose one of the following installation methods.


### Option 1. Install from a Compressed File URL

Open **Plugin Manager → Compressed File URL**.

Enter the URL of the latest plugin package:

```text
https://github.com/michaelxmn/plugin-role-switcher/releases/download/v1.0.0/plugin-role-switcher-1.0.0.tgz
```

Then click **Install**.

> Replace `1.0.0` with the desired release version.

---

### Option 2. Upload a Plugin Package

If your environment does not have Internet access, you can install the plugin from a local package.

1. Download the latest **`.tgz`** package from the GitHub Releases page.
2. Open **Plugin Manager → Upload**.
3. Select the downloaded `.tgz` package.
4. Click **Install**.

**Download:**

https://github.com/michaelxmn/plugin-role-switcher/releases

---

### Option 3. Install from NPM Package

Open **Plugin Manager** in your NocoBase application.

**Add Plugin → NPM Package**

Enter the package name:

```text
@michaelxmn/plugin-role-switcher
```

Then click **Install**.

---

### Option 4. Install from Source Code (Development)

This method is intended for plugin developers and contributors.

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

Once the application is running, enable **Role Switcher** in **Plugin Manager** if it is not enabled automatically.

---

## 📦 Distribution

| Installation Method | Description                                       |
| ------------------- | ------------------------------------------------- |
| NPM Package         | Install directly from the NocoBase Plugin Manager |
| Upload              | Install from a local `.tgz` package               |
| Compressed File URL | Install directly from a hosted `.tgz` package     |
| Source Code         | Plugin development and customization              |

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

NocoBase already provides built-in role switching.

However, the feature is located inside the **User Center**, making it less discoverable for many users—especially first-time users.

This plugin moves the role switcher to the **top navigation bar**, making role switching more intuitive and significantly improving the experience for administrators, developers, and users who frequently switch roles.

---

## 📖 Requirements

* Node.js 20+
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
