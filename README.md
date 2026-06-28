# Moe-Kyaw-Aung-Portfolio-v1.0

A premium, production-ready multi-page portfolio website for **Moe Kyaw Aung** — **⭐MOE KYAW AUNG ⭐ANDROID SENIOR DEVELOPER**.

This project is designed as a polished, terminal-inspired portfolio and SaaS-style landing page built with **HTML**, **Tailwind CSS via CDN**, and **vanilla JavaScript**. It highlights Android development expertise, modern UI engineering, performance optimization, and a strong personal brand.

---

## Live Preview

- **GitHub Pages:** `https://your-username.github.io/moe-kyaw-aung-portfolio/`
- **Cloudflare-proxied custom domain:** `https://portfolio.example.com`

> Replace the placeholder URLs with your actual deployment links.

---

## Overview

This repository contains a complete multi-page portfolio experience with:

- A cinematic terminal-style hero section.
- Animated typing scaffold for identity presentation.
- Responsive multi-page layout.
- Dark and light mode toggle.
- Custom cursor and smooth scroll enhancements.
- Scroll-triggered reveal animations.
- Contact, newsletter, FAQ, pricing, testimonials, and services pages.
- Cloudflare Worker proxy support for custom caching and security headers.
- GitHub Actions deployment workflow.

The project is intentionally structured for production use, maintainability, and fast hosting on static platforms like GitHub Pages.

---

## Features

- **10-page multi-page structure**.
- **Animated terminal hero** with live typing effect.
- **Dark / light mode** with local storage persistence.
- **Responsive navigation** with mobile hamburger menu.
- **Animated statistics counters**.
- **Scroll reveal and UX micro-interactions**.
- **FAQ accordion**.
- **Contact form validation**.
- **Newsletter / mail collection form**.
- **Pricing section**.
- **Testimonials section**.
- **Certificates section**.
- **Services page**.
- **Privacy policy page**.
- **Cloudflare Worker proxy** for cache-control and security headers.
- **GitHub Actions CI/CD** deployment for the Worker.

---

## Tech Stack

- **HTML5**
- **Tailwind CSS via CDN**
- **Vanilla JavaScript**
- **Font Awesome**
- **Google Fonts**
- **Cloudflare Workers**
- **Wrangler**
- **GitHub Actions**
- **GitHub Pages**

---

## Project Structure

```txt
moe-kyaw-aung-portfolio/
├─ worker.js
├─ wrangler.toml
├─ package.json
├─ README-deploy.md
├─ .gitignore
├─ .github/
│  └─ workflows/
│     └─ deploy-worker.yml
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
