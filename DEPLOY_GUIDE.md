# 🚀 CONVERSIQ Beta — Deployment Guide
### Get your shareable beta link in under 15 minutes. No coding required.

---

## What you'll need
- A free GitHub account (github.com)
- A free Render account (render.com)
- Your Anthropic API key (console.anthropic.com)

---

## STEP 1 — Get your Anthropic API key
*(Skip this if you already have one)*

1. Go to **console.anthropic.com**
2. Sign up for a free account
3. Click **"API Keys"** in the left menu
4. Click **"Create Key"** — give it any name like "CONVERSIQ Beta"
5. Copy the key (it starts with `sk-ant-...`) and paste it somewhere safe — **you won't see it again**

---

## STEP 2 — Create a free GitHub account
*(Skip this if you already have one)*

1. Go to **github.com**
2. Click **"Sign up"** — use any email
3. Verify your email

---

## STEP 3 — Upload your files to GitHub

1. Go to **github.com** and log in
2. Click the **green "New"** button (top left)
3. Name your repository: `conversiq-beta`
4. Make sure **"Public"** is selected
5. Check the box **"Add a README file"**
6. Click **"Create repository"**

Now upload your files:

7. Click **"uploading an existing file"** (small link near the top of the page)
8. Drag ALL the files from the `conversiq-beta` folder into the upload area:
   - `server.js`
   - `package.json`
   - `render.yaml`
   - The entire `public` folder (drag the folder itself)
9. Scroll down and click **"Commit changes"**

---

## STEP 4 — Deploy to Render (this is where your live link comes from)

1. Go to **render.com**
2. Click **"Get Started for Free"** — sign up with your GitHub account (click "Continue with GitHub")
3. Once logged in, click **"New +"** button (top right)
4. Select **"Web Service"**
5. Click **"Connect account"** next to GitHub if asked, then select your `conversiq-beta` repository
6. Render will auto-fill most settings. Check:
   - **Name:** conversiq-beta (or anything you like)
   - **Branch:** main
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
7. Scroll down to **"Environment Variables"**
8. Click **"Add Environment Variable"**
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** paste your key from Step 1 (the `sk-ant-...` one)
9. Click **"Create Web Service"**

Render will now build your app. This takes **2–4 minutes**. You'll see a log scrolling — that's normal.

---

## STEP 5 — Get your shareable beta link

When the log shows **"=✅ CONVERSIQ server running"**, look at the top of the page.

You'll see a URL like:
```
https://conversiq-beta.onrender.com
```

**That's your beta link.** Share it with anyone — clients, testers, your team. It works on any device, any browser.

- **Dashboard:** `https://your-url.onrender.com/dashboard.html`
- **Simulator:** `https://your-url.onrender.com/simulator.html`

---

## 💡 Important notes for beta testing

**Free tier goes to sleep:** Render's free tier pauses your app after 15 minutes of no traffic. The first visitor after a pause will wait ~30 seconds for it to wake up. This is fine for beta testing — just warn testers the first load may be slow.

**Upgrade when ready:** When you're ready to share with real clients, upgrade to Render's $7/month plan — no sleep, always fast.

**Your API key is safe:** It lives only on Render's servers. No one visiting the demo can see it.

---

## ❓ Something went wrong?

Common fixes:

| Problem | Fix |
|---------|-----|
| "Build failed" | Check that all files were uploaded, including the `public` folder |
| "Application error" | Check that ANTHROPIC_API_KEY was added correctly in Environment Variables |
| AI doesn't respond | Your API key may be incorrect — re-check it in Render → Environment |
| Can't find the URL | In Render, click your service name → the URL is at the very top |

---

*Built with CONVERSIQ Platform · Your AI-Powered WhatsApp & SMS Commerce Agency*
