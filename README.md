# Moe-Kyaw-Aung-Portfolio-v1.1 🚀

A premium, production-ready multi-page portfolio website for **Moe Kyaw Aung** — **⭐ MOE KYAW AUNG ⭐ ANDROID SENIOR DEVELOPER**.

This project is designed as a polished, terminal-inspired portfolio and SaaS-style landing page built with **HTML**, **Tailwind CSS via CDN**, and **vanilla JavaScript**. It highlights Android development expertise, modern UI engineering, performance optimization, and a strong personal brand.

## 🌟 Live Preview

- **GitHub Pages:** `https://dev-moekyawaung.github.io/moe-kyaw-aung-portfolio-v1.1/` (Note: The original README had placeholder URLs, this is the likely deployment URL based on repo name conventions.)

## 📝 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ℹ️ About

This repository contains a complete multi-page portfolio experience showcasing the skills and experience of Moe Kyaw Aung, an Android Senior Developer. The project features a cinematic terminal-style hero section with animated typing, a responsive multi-page layout, dark/light mode toggle, custom cursor, smooth scrolling, and scroll-triggered animations across various pages like contact, newsletter, FAQ, pricing, testimonials, and services.

It's built with a focus on production use, maintainability, and fast hosting on static platforms.

## ✨ Features

- **10-page multi-page structure**: Offers a comprehensive view of skills and services.
- **Animated terminal hero**: Engaging introductory section with a typing effect.
- **Dark/light mode toggle**: User-friendly interface with local storage persistence.
- **Responsive navigation**: Includes a mobile hamburger menu for seamless access.
- **Animated statistics counters**: Dynamically displays key metrics.
- **Scroll reveal and UX micro-interactions**: Enhances user engagement.
- **FAQ accordion**: Easily navigable frequently asked questions.
- **Contact form validation**: Ensures valid user input.
- **Newsletter/mail collection form**: For capturing leads and updates.
- **Pricing section**: Clear tiers for services offered.
- **Testimonials section**: Social proof from clients/collaborators.
- **Certificates section**: Showcases professional credentials.
- **Services page**: Details offered services.
- **Privacy policy page**: Transparent data handling practices.
- **Cloudflare Worker proxy**: For cache control and security headers.
- **GitHub Actions CI/CD**: For streamlined deployment of the Worker.

## 🛠️ Tech Stack

- **HTML5**
- **Tailwind CSS (via CDN)**
- **Vanilla JavaScript**
- **Font Awesome**
- **Google Fonts**
- **TypeScript** (Mentioned in analysis, but not explicitly used in provided code snippets for core frontend)
- **Cloudflare Workers**
- **Wrangler**
- **GitHub Actions**
- **GitHub Pages**

## 📁 Project Structure

```txt
moe-kyaw-aung-portfolio-v1.1/
├─ worker.js
├─ wrangler.toml
├─ package.json
├─ README-deploy.md (Not analyzed in detail, but its presence suggests deployment-specific info)
├─ .gitignore
├─ .github/
│  └─ workflows/
│     └─ deploy-worker.yml (Implies CI/CD for Cloudflare Workers)
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  └─ main.js
│  ├─ img/
│  └─ icons/
├─ partials/
│  ├─ header.html
│  └─ footer.html
├─ index.html
├─ about.html
├─ projects.html
├─ services.html
├─ pricing.html
├─ certificates.html
├─ testimonials.html
├─ faq.html
├─ contact.html
├─ privacy.html
└─ mail-collection.html
```

## ⬇️ Installation

This project is a static website primarily served via GitHub Pages, with a Cloudflare Worker for enhanced caching and security. There's no complex backend or server-side installation required for the frontend itself.

**Prerequisites:**

- **Node.js and npm/yarn**: Required for managing the `wrangler` dependency and running deployment scripts.
- **Wrangler CLI**: The tool for deploying Cloudflare Workers.

**Steps:**

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Dev-moe-kyawaung/moe-kyaw-aung-portfolio-v1.1.git
    cd moe-kyaw-aung-portfolio-v1.1
    ```

2.  **Install dependencies**:
    The `package.json` file indicates `wrangler` as a dev dependency.
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Cloudflare Worker (if deploying custom worker)**:
    If you intend to deploy your own worker or customize the existing `worker.js`, you will need to configure `wrangler.toml` with your Cloudflare account details and Worker name. The provided `wrangler.toml` appears to be minimal and might need more configuration for actual deployment.

## ▶️ Usage

This project is a static portfolio website. It can be viewed directly in a web browser by opening the `index.html` file, or by deploying it to a static hosting service like GitHub Pages or Netlify.

### Running Locally

1.  **Open `index.html`**: Simply open the `index.html` file in your web browser.
2.  **Using a local development server (Recommended)**:
    To properly test features like JavaScript interactions and ensure correct path resolution, it's best to use a simple HTTP server. If you have Node.js installed, you can use `http-server`:
    ```bash
    # Install http-server globally if you haven't already
    npm install -g http-server

    # Navigate to the project directory
    cd moe-kyaw-aung-portfolio-v1.1

    # Start the server
    http-server .
    ```
    Then, access the site at `http://localhost:8080` (or the port provided by `http-server`).

### Key Functionality:

-   **Navigation**: Use the header navigation to move between pages. The mobile menu is toggled via the hamburger icon.
-   **Theme Toggle**: Click the sun/moon icon in the header to switch between light and dark modes.
-   **Scroll Animations**: Elements with the `reveal` class will animate into view as you scroll.
-   **Counter Animations**: Stats in the hero section animate when they enter the viewport.
-   **Contact Form**: The `contact.html` page includes a form. Note that the provided JavaScript (`main.js`) only handles local form submission feedback and reset; a backend service is required for actual message delivery.

### Deployment

-   **GitHub Pages**: The static HTML, CSS, and JS files can be hosted directly on GitHub Pages. Configure your repository settings to serve from the root or a `docs/` folder.
-   **Cloudflare Worker Deployment**:
    The `package.json` includes `deploy` and `deploy:dev` scripts using `wrangler deploy`. These are intended for deploying the `worker.js` script to Cloudflare.
    ```bash
    # Deploy to production environment (requires wrangler.toml configuration)
    npm run deploy

    # Deploy to development environment (requires wrangler.toml configuration)
    npm run deploy:dev
    ```
    Ensure your `wrangler.toml` is correctly configured with account ID, API token, and worker name for these scripts to function.

## 📋 Contributing

Contributions are welcome! Please follow these guidelines:

1.  **Fork the repository**.
2.  **Create a new branch** (`git checkout -b feature/YourNewFeature`).
3.  **Make your changes**.
4.  **Commit your changes** (`git commit -m 'Add some YourNewFeature'`).
5.  **Push to the branch** (`git push origin feature/YourNewFeature`).
6.  **Open a Pull Request**.

Please ensure your code adheres to the project's existing style and conventions.

## 📄 License

No license information was found in the repository. Typically, this means the code is under the default GitHub repository license if one was set during creation, or it may be proprietary.

## 📞 Contact

For inquiries, collaborations, or feedback, you can reach out via:

-   **Email**: `moekyawaung.mka2030@gmail.com`
-   **GitHub**: [Dev-moe-kyawaung](https://github.com/Dev-moe-kyawaung)
-   **Gravatar**: [gravatar.com/moekyawaung13721](https://gravatar.com/moekyawaung13721)

--- 

**Built with ❤️ by Moe Kyaw Aung**

[//]: # (Footer section based on analysis, actual footer in partials/footer.html was slightly different but this summarizes key elements)
**Repository**: [moe-kyaw-aung-portfolio-v1.1](https://github.com/Dev-moe-kyawaung/moe-kyaw-aung-portfolio-v1.1)
**Author**: Moe Kyaw Aung

[Fork it!](https://github.com/Dev-moe-kyawaung/moe-kyaw-aung-portfolio-v1.1/fork)
[Like it!](https://github.com/Dev-moe-kyawaung/moe-kyaw-aung-portfolio-v1.1) [Star it! ⭐](https://github.com/Dev-moe-kyawaung/moe-kyaw-aung-portfolio-v1.1)
[Report issues 🐞](https://github.com/Dev-moe-kyawaung/moe-kyaw-aung-portfolio-v1.1/issues)

---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**