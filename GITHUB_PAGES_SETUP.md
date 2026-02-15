# GitHub Pages Deployment Guide

## ✅ Steps Already Completed:
1. ✅ Configured `next.config.mjs` for static export
2. ✅ Created GitHub Actions workflow (`.github/workflows/deploy.yml`)
3. ✅ Added `.nojekyll` file
4. ✅ Pushed code to repository

## 🔧 Manual Steps You Need to Do:

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository: **https://github.com/Muhilanraj18/portfolio2**

2. Click on **Settings** (top right)

3. In the left sidebar, click **Pages**

4. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"** (NOT "Deploy from a branch")
   
5. Click **Save**

### Step 2: Check GitHub Actions

1. Go to the **Actions** tab in your repository:
   https://github.com/Muhilanraj18/portfolio2/actions

2. You should see a workflow running called "Deploy to GitHub Pages"

3. Wait for it to complete (green checkmark ✅)

4. If it fails (red X ❌), click on it to see the error

### Step 3: Access Your Website

After the workflow completes successfully, your website will be available at:

**https://muhilanraj18.github.io/portfolio2/**

⚠️ **Important:** The URL includes `/portfolio2/` because that's your repository name.

---

## 🐛 Common Issues & Solutions:

### Issue 1: "GitHub Pages Not Found in Settings"
**Solution:** Make sure you're in the repository settings, not your account settings.

### Issue 2: "Actions Tab Shows Nothing"
**Solution:** 
- Check if GitHub Actions are enabled for your account
- Go to Settings → Actions → General
- Enable "Allow all actions and reusable workflows"

### Issue 3: "Workflow Fails with 'Permission Denied'"
**Solution:**
1. Go to Settings → Actions → General
2. Scroll down to "Workflow permissions"
3. Select "Read and write permissions"
4. Check "Allow GitHub Actions to create and approve pull requests"
5. Click Save

### Issue 4: "404 Page Not Found After Deployment"
**Solution:** 
- Make sure you're using the correct URL: `https://muhilanraj18.github.io/portfolio2/`
- Note the `/portfolio2/` at the end
- Wait 2-3 minutes after deployment completes

### Issue 5: "Build Fails During GitHub Actions"
**Solution:**
- Check the Actions tab for error details
- Common fix: Make sure all dependencies are in `package.json`
- The workflow will show detailed error messages

---

## 📝 Quick Checklist:

- [ ] Go to Settings → Pages
- [ ] Set Source to "GitHub Actions"
- [ ] Check Actions tab for running workflow
- [ ] Wait for green checkmark ✅
- [ ] Visit https://muhilanraj18.github.io/portfolio2/
- [ ] If 404, wait 2-3 more minutes and refresh

---

## 🔄 Redeploy After Making Changes:

After you enable GitHub Pages, any time you push code:

```bash
git add .
git commit -m "Your changes"
git push
```

The GitHub Actions workflow will automatically:
1. Build your Next.js site
2. Export static files
3. Deploy to GitHub Pages
4. Your site updates in 2-3 minutes

---

## 🎯 Your Website URL:

**https://muhilanraj18.github.io/portfolio2/**

---

## ⚠️ Important Notes:

1. **First Deployment:** Can take 5-10 minutes
2. **Subsequent Deployments:** Take 2-3 minutes
3. **Workflow Must Complete:** Check the Actions tab for green checkmark
4. **Source Must Be "GitHub Actions":** Not "Deploy from a branch"

---

## 🆘 Still Not Working?

Check these:
1. Actions tab shows green checkmark?
2. Settings → Pages → Source is "GitHub Actions"?
3. Waited 5 minutes after first deployment?
4. Using correct URL with `/portfolio2/`?
5. Workflow permissions set to "Read and write"?

If all else fails, check the Actions tab for error messages!

---

**Created:** February 15, 2026  
**Status:** Waiting for manual GitHub Pages setup
