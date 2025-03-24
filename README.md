# 📱 Apple-Inspired iPhone 15 Pro 3D Mocksite

A visually immersive 3D mocksite inspired by Apple's iPhone 15 Pro launch page. Built using **React**, **TailwindCSS v4**, **React Three Fiber (R3F)**, **GSAP**, and **Drei**. This mocksite showcases a dynamic product presentation with rich animations, 3D models, and interactive UI.

---


![3D iPhone Launch Demo](/public/gif.gif)



## ✨ Features

- 3D iPhone 15 Pro rendered via GLTF + React Three Fiber
- Smooth GSAP scroll animations and transitions
- Responsive design with TailwindCSS v4 utilities
- Multi-model color preview and device sizing
- Reusable components and animation logic

---

## 📂 Tech Stack

- React 18+
- TailwindCSS v4 (experimental theme variables)
- GSAP 3 (ScrollTrigger, timeline)
- Drei utilities
- React Three Fiber (r3f)

---

## ❗ Challenges & Lessons Learned

### ⚠️ Tailwind v4 Migration

- **Issue**: Many utility classes written using `@utility` stopped working.

- **Fix**: Tailwind v4 removed support for the `@layer utilities` shorthand syntax. Rewrote all custom utilities manually inline using full class names.

- **Lesson**: Always check the release notes before starting a project. Tailwind v4 treats design tokens as theme variables only.

### 🔍 Unknown Utility Classes Error

- **Issue**: Received build error `Cannot apply unknown utility class: flex-center`.

- **Fix**: Replaced custom utility with full Tailwind syntax `flex items-center justify-center` inline.

### 🎨 R3F: Canvas and View Usage

- **Issue**: Misused `<Canvas>` and `<View>` components in multiple places.

- **Fix**: Moved `<Canvas>` to the `Model.jsx` root and passed in `ModelView` inside Canvas.

- **Lesson**: React Three Fiber hooks like `useThree` or Drei components can only run inside `<Canvas>`.



### 🚕 Overlapping Model Scroll

- **Issue**: 3D model scrolled with the page due to fixed Canvas styling.
- **Fix**: Adjusted `Canvas` styles and ensured `overflow-hidden` wrapping containers.

### ⚖️ Callback Hooks Best Practice

- **Lesson**: Always clean up `eventListeners` in `useEffect` with return function. Prevents memory leaks and bugs.

### 💡 UX Improvement
- Learned to replace `gap-x` or `px-*` spacing using correct flex-gap syntax.

- Used manual Tailwind utility application when @utility didn't work.

- Used `text-gray-400` instead of `text-gray` which was not applying.

---

## ⛏️ Final Notes

- All animation logic is centralized in `utils/animations.js` for reusability.
- Color picker & size selection buttons fully interactive.
- GLTF preloading ensures seamless 3D model performance.
- Responsive on all screen sizes using Tailwind's breakpoint system.

---

## ✨ Author

Coded with love [Gabriela] ❤️

Mentored by Cody 🤖 a.k.a the world's greatest code sensei 🧙‍♂️

Inspired by:  YT: @javascriptmastery

React | Beginner Three.js & GSAP Tutorial

 https://github.com/adrianhajdin/iphone
---

## 📖 License
This is a personal project made for educational and portfolio purposes. Not affiliated with Apple Inc.

---



