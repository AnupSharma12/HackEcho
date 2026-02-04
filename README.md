# HackEcho

**HackEcho** is an open-source, AI‑powered learning platform that turns coding lessons into interactive, gamified quests. Each level generates **documentation**, **example code**, and **answer feedback** tailored to the user’s language and level—**only once** per user + level + language to preserve consistency and save AI credits.

---

## ✨ Highlights

- **AI‑Generated Levels** (Docs + Example Code + Task)
- **Answer Checking with AI Feedback** (correct/incorrect + suggestions)
- **Level Progression** (unlock next only after completion)
- **Multi‑Language Tracks** (different content per language)
- **JWT Auth** (email/password + Google + GitHub OAuth)
- **MongoDB Persistence** (no duplicate AI generation)

---

## 🧠 Core Rule

For each **User + Level + Language**, AI content is generated **once** and stored. Replaying the same level loads the existing content (no regeneration, no extra credits).

---

## 🖥️ Product UI (What You’ll See)

- **Dashboard**
	- Language selector
	- Level selector + topic
	- Generated documentation + example code
	- Answer input + AI feedback
	- Progress indicator

---

## 🧩 Tech Stack

- **Next.js (App Router)**
- **Tailwind CSS**
- **MongoDB + Mongoose**
- **JWT Auth**
- **Google Gemini (Generative AI)**

---

## ✅ Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment

Create `.env.local` from the template and update values:

```env
MONGODB_URI=mongodb+srv://USER:PASSWORD@cluster0.mongodb.net/hackecho
JWT_SECRET=replace-with-strong-secret
GEMINI_API_KEY=your-gemini-api-key

NEXT_PUBLIC_BASE_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### 3) Run dev server

```bash
npm run dev
```

Open http://localhost:3000

---

## 🔐 Auth Flow

- **Email + Password** → JWT stored as HTTP‑only cookie
- **Google OAuth** → `/api/auth/oauth/google` → callback → JWT cookie
- **GitHub OAuth** → `/api/auth/oauth/github` → callback → JWT cookie

Protected routes: `/dashboard`, `/levels`, `/profile`, `/settings`

---

## 🧪 AI Flow (Per Level)

**Step 1:** User selects language + level

**Step 2:** Server checks MongoDB for existing content

- ✅ If found → return cached docs/code/task
- ❌ If missing → generate once using Gemini and store

**Step 3:** User submits answer

**Step 4:** AI validates and returns feedback

**Step 5:** If correct → unlock next level

---

## 📦 Collections (MongoDB)

### Users

- name
- email
- passwordHash
- provider info
- currentLevelByLanguage
- progress history

### Levels

- userId
- language
- levelNumber
- documentation
- exampleCode
- question
- aiFeedback
- attempts

---

## 🔌 API Routes

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `GET /api/auth/oauth/google`
- `GET /api/auth/oauth/google/callback`
- `GET /api/auth/oauth/github`
- `GET /api/auth/oauth/github/callback`

### AI Levels

- `POST /api/levels/ensure` → generate or load cached level
- `POST /api/levels/submit` → evaluate answer + unlock next

---

## 🧭 Roadmap

- [ ] Admin panel to manage AI prompts
- [ ] Leaderboards + streaks
- [ ] Team classrooms
- [ ] Export learning reports (PDF)

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Submit a PR

---

## 📄 License

MIT

