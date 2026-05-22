# Ali Bin Saeed — Portfolio Website

Futuristic personal portfolio. Pure HTML, CSS, and vanilla JavaScript. No build step required.

## Files

```
ali-portfolio/
├── index.html   ← main page
├── style.css    ← all styles
├── main.js      ← cursor, particles, scroll reveal, mobile nav
└── README.md    ← this file
```

---

## 🚀 Deploy to GitHub + Vercel (Step by Step)

### Step 1 — Create a GitHub repository

1. Go to https://github.com and log in
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `portfolio` (or `ali-portfolio`)
4. Set to **Public**
5. Do NOT check "Add a README" (you already have files)
6. Click **Create repository**

---

### Step 2 — Upload your files to GitHub

**Option A — Using GitHub website (easiest):**

1. On your new repo page, click **"uploading an existing file"**
2. Drag and drop all 4 files: `index.html`, `style.css`, `main.js`, `README.md`
3. Scroll down → click **"Commit changes"**

**Option B — Using Git in terminal:**

```bash
# Navigate to your project folder
cd ali-portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add your GitHub repo as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push
git branch -M main
git push -u origin main
```

---

### Step 3 — Deploy to Vercel (free, instant)

1. Go to https://vercel.com and sign up with your GitHub account
2. Click **"Add New Project"**
3. Find your `portfolio` repo and click **"Import"**
4. Vercel will auto-detect it as a static site — no settings needed
5. Click **"Deploy"**
6. In ~30 seconds, your site is live at: `https://portfolio-yourusername.vercel.app`

---

### Step 4 — Get a custom domain (optional but professional)

**Free subdomain (instant):**
- Vercel gives you: `https://ali-bin-saeed.vercel.app`
- In Vercel dashboard → Settings → Domains → type your preferred name

**Buy a domain (~$10/year):**
- Recommended: Namecheap.com or Porkbun.com
- Buy: `alibinsaeed.com` or `alibinsaeed.dev`
- In Vercel → Settings → Domains → Add your domain
- Follow the DNS instructions (takes 5–30 min)

---

## 🔄 How to Update the Website

After any change to your files:

```bash
git add .
git commit -m "Update experience section"
git push
```

Vercel automatically redeploys within 30 seconds. ✅

---

## 📧 Contact Form (Optional Upgrade)

To make the contact section functional, add Formspree (free):

1. Go to https://formspree.io and sign up
2. Create a new form → copy your form endpoint
3. In `index.html`, replace the contact links section with:

```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="text"  name="name"    placeholder="Your Name" required>
  <input type="email" name="email"   placeholder="Your Email" required>
  <textarea            name="message" placeholder="Your Message" required></textarea>
  <button type="submit" class="btn-primary">Send Message</button>
</form>
```

---

## ✅ Pre-launch Checklist

- [ ] All 4 files uploaded to GitHub
- [ ] Site live on Vercel
- [ ] Test on mobile (looks good at 375px)
- [ ] Test all links (email, LinkedIn, phone)
- [ ] Add LinkedIn URL to your LinkedIn profile
- [ ] Share URL on your CV and applications

---

Built by Ali Bin Saeed · iamalibinsaeed@gmail.com
