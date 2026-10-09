# 🚀 Astrophysics Learning Platform

**An interactive space for curious minds to explore astrophysics, ask questions, and learn something new along the way.**

🌐 **[Explore the Website](https://ananyaabburu.github.io/astrophysics-learning-platform/)**

## A Note From the Developer

Hi! I'm Ananya Abburu, a high school senior from Georgia with a passion for aerospace engineering, physics, and pretty much anything related to space.

I've always found astrophysics fascinating, but I've also realized how intimidating it can seem when you're first learning about it. Between the complicated equations, unfamiliar terminology, and concepts that are sometimes difficult to even visualize, it's easy to feel overwhelmed before you really get started.

I wanted to create something that would make that first step a little easier.

I originally began developing this website during a software development internship, combining two of my biggest interests: programming and astrophysics. What started as an educational website eventually grew into a larger project with interactive learning modules, quizzes, and AstroBot, an AI-powered tutor that can answer questions about space and physics.

One of my favorite parts of working on this project was figuring out how to make AstroBot actually work. Getting the frontend, backend, and AI model to communicate with each other involved a lot more troubleshooting than I initially expected, but seeing it finally generate a response on the live website made the process worth it.

My hope is that this website can be a resource for anyone who's curious about astrophysics, whether you're learning the basics for the first time or just have a random question about black holes at 2 a.m.

Thanks for checking it out, and I hope you learn something new!

— Ananya

## ✨ What You Can Explore

**AstroBot — Your AI Astrophysics Tutor**

Have a question about black holes, stars, gravity, or anything else related to space? AstroBot uses generative AI to explain astrophysics concepts in a conversational, approachable way.

**Learning Modules**

Explore educational content designed to introduce astrophysics concepts and make challenging topics easier to understand.

**Quizzes and Interactive Activities**

Test your understanding and apply what you've learned through interactive features throughout the website.

## 💻 Behind the Website

This project combines frontend web development with a serverless AI backend.

| Technology | How I Used It |
|---|---|
| HTML | Built the website's structure |
| CSS | Designed the website's appearance |
| JavaScript | Added interactivity and connected AstroBot |
| GitHub Pages | Published and hosted the website |
| Cloudflare Workers | Built the backend that handles AstroBot requests |
| Cloudflare Workers AI | Integrated generative AI |
| GLM-4.7-Flash | AI model used to generate AstroBot's responses |

### How AstroBot Works

When someone submits a question, the website sends it to a Cloudflare Worker, which communicates with the AI model and returns a generated response.

I also implemented input validation, origin restrictions, and rate limiting to help prevent misuse and manage the website's AI usage.

AstroBot currently operates within Cloudflare's free allowance of 10,000 neurons (AI computing units) per day. If that limit is reached, AstroBot may temporarily become unavailable until the allowance resets, but the rest of the website will continue working.

## 🌟 What I Learned

This project gave me the opportunity to go beyond writing code and actually deploy something that other people can use.

I learned a lot about connecting frontend and backend systems, working with APIs, integrating generative AI, and troubleshooting issues that don't always have an obvious solution.

More importantly, it showed me how I could bring together my interests in software development and aerospace engineering to create something educational and accessible.

## 🔭 Explore the Platform

Whether you're studying astrophysics or simply curious about the universe, I hope you'll give it a try!

**[Visit the Astrophysics Learning Platform →](https://ananyaabburu.github.io/astrophysics-learning-platform/)**

---

*Created by Ananya Abburu | 2026*
