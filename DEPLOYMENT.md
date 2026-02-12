# Skills-Based Talent Allocation - Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended - 2 minutes)

### Option 1: Vercel CLI (Fastest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy (from this project folder):**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Setup and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N**
   - Project name? (Press enter or type a name)
   - In which directory is your code? **./

**   - Want to override settings? **N**

5. **Done!** You'll get a URL like: `https://your-project.vercel.app`

---

### Option 2: Vercel Dashboard (No CLI needed)

1. **Go to:** https://vercel.com/new

2. **Import Git Repository:**
   - Click "Add New Project"
   - Import your Git repository (GitHub/GitLab/Bitbucket)
   
   OR
   
   **Upload files directly:**
   - Zip this entire project folder
   - Drag and drop the ZIP file

3. **Configure:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Click "Deploy"**

5. **Wait ~1 minute** for the build to complete

6. **Done!** Your presentation is live! 🎉

---

## 📤 Alternative: Static HTML Export

If you prefer a single HTML file, here's what you need to do:

### Download Presentation as ZIP:
1. Click "Download" button in Figma Make
2. Extract the ZIP file
3. Share the entire folder with colleagues
4. They open `index.html` in their browser

**Note:** Make sure they extract the ZIP first! Opening HTML directly from ZIP won't work.

---

## 🔗 Sharing Your Presentation

After deploying to Vercel, you'll get a URL like:
```
https://skills-allocation-presentation.vercel.app
```

### Features:
- ✅ Works on any device (desktop, mobile, tablet)
- ✅ Interactive (all animations, navigation, expandable cards work)
- ✅ No installation needed - just share the link
- ✅ Always available online
- ✅ Free forever
- ✅ Can update anytime by redeploying

---

## 🆘 Need Help?

If you run into any issues:
1. Make sure you're in the project folder
2. Run `npm install` first
3. Then run `vercel`

The Vercel CLI will guide you through everything!
