# HackEcho

**HackEcho** is an open-source learning platform that turns coding lessons into interactive, gamified quests. Each level ships with structured **documentation**, **example code**, and **answer feedback** tailored to the user’s language and level.
🚀 **[Live Demo](#)** | 🔑 **[OAuth Setup](OAUTH_SETUP.md)**

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/AnupSharma12/HackEcho.git
cd HackEcho

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Visit **http://localhost:3000** to see the app!

 
---

## ✨ Highlights

- **Structured Levels** (Docs + Example Code + Task)
- **Answer Checking with Feedback** (correct/incorrect + suggestions)
- **Level Progression** (unlock next only after completion)
- **Multi‑Language Tracks** (different content per language)
- **JWT Auth** (email/password + Google + GitHub OAuth)
- **MongoDB Persistence** (no duplicate content generation)

---

## 🧠 Core Rule

For each **User + Level + Language**, content is created **once** and stored. Replaying the same level loads the existing content.

---

## 🖥️ Product UI (What You’ll See)

- **Dashboard**
	- Language selector
	- Level selector
	- Documentation + example code
	- Answer input + feedback
	- Progress indicator

---

## 🧩 Tech Stack

- **Next.js (App Router)**
- **Tailwind CSS**
- **MongoDB + Mongoose**
- **JWT Auth**
- **REST APIs**

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

## 🧪 Level Flow (Per Level)

**Step 1:** User selects language + level

**Step 2:** Server checks MongoDB for existing content

- ✅ If found → return cached docs/code/task
- ❌ If missing → create once and store

**Step 3:** User submits answer

**Step 4:** System validates and returns feedback

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

- levelId
- levelName
- language
- docs
- task
- expectedAnswer
- mcqs
- xpReward

### ✅ Completed
- [x] Level generation pipeline
- [x] Answer evaluation with feedback
- [x] Email/password authentication
- [x] Google OAuth integration
- [x] GitHub OAuth integration
- [x] User profile with avatar
- [x] Profile menu with navigation
- [x] Level progression system
- [x] MongoDB persistence

### 🔜 Upcoming
- [ ] Admin panel for curriculum management
- [ ] Leaderboards + global rankings
- [ ] Streak tracking and gamification
- [ ] Team classrooms and collaboration
- [ ] Export learning reports (PDF)
- [ ] Mobile app (React Native)
- [ ] Code playground with live execution
- [ ] Multi-language support (UI)

## TODO

- [ ] A Code Editor
- [ ] More Levels
- [ ] AI to check Answers
- [ ] Add MCQ review mode with explanations and retry guidance
- [ ] Add MCQ analytics (accuracy per level and per concept)
- [ ] Add question randomization and difficulty tags
- [ ] Improve Markdown rendering for long-form curriculum docs

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

### Levels

- `POST /api/levels/submit` → evaluate answer + unlock next

---

## 🧭 Roadmap

- [ ] Admin panel for curriculum management
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

