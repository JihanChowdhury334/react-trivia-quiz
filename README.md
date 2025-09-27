# Quizzical — React Trivia Quiz (Learning Project)

A small but polished **React + Vite** trivia game that fetches questions from **Open Trivia DB** and focuses on clean state management, conditional rendering, and UI feedback. Built as a **final solo practice project before moving to Next.js**.

> **Why this project?**  
> To drill React fundamentals (hooks, state derivation, mapping lists), async data fetching, HTML‑entity decoding, and tasteful CSS animations while keeping the codebase tiny and readable for recruiters.

---

## 🚀 Features

- **Start → Play → Results flow** with clear state transitions (`quizStarted`, `score`)  
- **Live answer selection** per question with immediate visual state (selected / correct / incorrect)  
- **Scored summary** — “You scored X/5” and quick actions: **Play Again** / **Main Menu**  
- **API powered** — gets fresh questions from **Open Trivia DB** via `fetch`  
- **HTML‑entity decoding** (e.g., `&amp;`, `&quot;`) using the `he` library so prompts render cleanly  
- **Crisp UI polish** — subtle **fade / pop** animations and a full‑bleed hero background image  
- **Lean footprint** — only a few files: `App.jsx`, `main.jsx`, `index.css`

---

## 🧰 Tech Stack

- **React 19** + **Vite 7**
- **JavaScript (ES202x)** with modules
- **he** for HTML‑entity decoding
- **CSS3** (keyframes, transitions, blur backdrop)
- **ESLint** (modern flat config) for quick linting

---

## 📂 Project Structure

```
quizzical/
├── public/
│   └── intro-page.png             # hero background used by CSS
├── src/
│   ├── App.jsx                    # quiz logic + UI
│   ├── index.css                  # global styles & animations
│   └── main.jsx                   # React entry
├── index.html                     # root HTML + font
├── package.json                   # scripts & deps
├── vite.config.js                 # Vite + React plugin
└── eslint.config.js               # ESLint flat config
```

> The repo intentionally keeps **only three source files** in `src/` to spotlight fundamentals.

---

## ⚙️ How It Works (high level)

1. **Start quiz** sets `quizStarted=true`, clears any prior score, and **fetches 5 questions**.  
2. API results are normalized: incorrect + correct answers are merged and **shuffled**; each question gets a `selected` field.  
3. Clicking an answer updates that question’s `selected`.  
4. **Check answers** tallies score by comparing `selected` vs `correct_answer` and shows per‑answer styling:  
   - ✅ Correct answer → green  
   - ❌ Chosen but wrong → red  
   - Unselected wrong answers stay neutral  
5. **Play Again** fetches a fresh batch; **Main Menu** resets to the intro screen.

---

## 🧪 What I Practiced

- **React state** with `useState` for app flow (`quizStarted`, `questions`, `score`)
- **Conditional rendering** for start screen, question grid, and results block
- **Mapping arrays** to UI (questions → blocks; answers → buttons)
- **Async fetch** patterns (request → normalize → update state)
- **UI feedback** via **dynamic class names** (selected/correct/incorrect)
- **HTML‑entity decoding** for clean question text with **`he`**
- **CSS animations** (fade in / slide up / pop in) for smoothness
- **Simple, readable file layout** recruiters can scan in under a minute

---

## 🧭 Scripts

- `npm run dev` – start Vite dev server  
- `npm run build` – production build to `dist/`  
- `npm run preview` – preview the production build  
- `npm run lint` – run ESLint

---

## 🛠️ Run Locally

```bash
# 1) Install
npm install

# 2) Dev
npm run dev

# 3) Build (optional)
npm run build
npm run preview
```

**Node**: use a recent LTS (18+).

---

## 🎨 Styling Notes

- Full‑page background image served from `/public/intro-page.png`  
- Rounded, glassy quiz card with **backdrop‑filter blur**  
- Animated buttons and question blocks for subtle motion  
- Small, accessible color palette with high‑contrast states

If you don’t see the background, confirm the image exists at `public/intro-page.png` and that the dev server is running.

---

## 🛣️ Roadmap (quick ideas)

- Category & difficulty pickers
- Loading and error states
- Keyboard focus styles + reduced‑motion preference
- Per‑question explanations and timer mode
- Persist last score in `localStorage`

---

## 📸 Screenshots

> Add your own later. Example:
>
> ![Intro](public/intro-page.png)

---

## 📄 License

MIT — for learning and portfolio use.

---

## 🙏 Credits

- Questions by **Open Trivia DB**
- `he` by Mathias Bynens (HTML entity decoding)
- Font: **Karla** (Google Fonts)
