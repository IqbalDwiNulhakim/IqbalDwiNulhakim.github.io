# 🚀 Portfolio GitHub Pages Deployment Guide

Panduan lengkap untuk setup dan deploy portfolio Anda ke GitHub Pages dengan auto-update.

---

## 📋 Table of Contents
1. [Konfigurasi Saat Ini](#konfigurasi-saat-ini)
2. [Deployment Methods](#deployment-methods)
3. [GitHub Actions Setup](#github-actions-setup)
4. [Manual Deploy](#manual-deploy)
5. [Troubleshooting](#troubleshooting)
6. [Custom Domain](#custom-domain-optional)

---

## 📌 Konfigurasi Saat Ini

```
Repository: https://github.com/IqbalDwiNulhakim/IqbalDwiNulhakim.github.io
Live URL: https://iqbaldwinulhakim.github.io/
Type: User Pages (bukan project pages)
```

**Files yang sudah dikonfigurasi:**
- ✅ `package.json` - Memiliki deploy scripts
- ✅ `vite.config.js` - Base URL = "/"
- ✅ `src/App.tsx` - Router dengan basename
- ✅ `.github/workflows/deploy.yml` - Auto-deploy workflow
- ✅ `.env` - EmailJS configuration

---

## 🚀 Deployment Methods

### Method 1: GitHub Actions (Recommended - Otomatis)

**Keuntungan:**
- ✅ Otomatis deploy saat push ke branch main
- ✅ Tidak perlu install gh-pages CLI locally
- ✅ Workflow trackable di GitHub
- ✅ Automatic rollback jika build gagal

**Cara Kerja:**
1. Push code ke `main` branch
2. GitHub Actions otomatis trigger
3. Build project
4. Deploy ke `gh-pages` branch
5. GitHub Pages serve file dari `gh-pages` branch

**Status:** ✅ Sudah dikonfigurasi (.github/workflows/deploy.yml)

---

### Method 2: Manual Deploy (gh-pages CLI)

**Gunakan jika:**
- Mau deploy dari local machine
- GitHub Actions tidak bekerja
- Mau test sebelum push

**Cara:**
```bash
# Build application
npm run build

# Deploy ke GitHub Pages
npm run deploy
```

**Syarat:**
- Node.js terinstall
- gh-pages package terinstall (sudah ada: ✅)
- Git configured dengan GitHub

---

## 🔄 GitHub Actions Setup

### Step 1: Verify Workflow File

✅ File sudah ada: `.github/workflows/deploy.yml`

Konten:
- Build dengan Node.js 18
- Run `npm ci` (install dependencies)
- Run `npm run build`
- Deploy ke GitHub Pages branch

### Step 2: Konfigurasi GitHub Repository

1. **Buka GitHub Repository**
   - URL: https://github.com/IqbalDwiNulhakim/IqbalDwiNulhakim.github.io

2. **Settings → Pages**
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Save

3. **Settings → Actions → General**
   - Workflow permissions: Read and write permissions
   - Save

### Step 3: Push Code

```bash
# Stage files
git add .

# Commit
git commit -m "feat: Setup GitHub Pages auto-deployment with Actions"

# Push ke main branch
git push origin main
```

### Step 4: Monitor Deployment

1. **GitHub Actions Tab**
   - Buka: https://github.com/IqbalDwiNulhakim/IqbalDwiNulhakim.github.io/actions
   - Lihat workflow run status
   - Green ✅ = berhasil
   - Red ❌ = ada error (cek logs)

2. **Deployment Status**
   - Buka: https://github.com/IqbalDwiNulhakim/IqbalDwiNulhakim.github.io/deployments
   - Lihat deployment history

3. **Live Portfolio**
   - URL: https://iqbaldwinulhakim.github.io/
   - Refresh setelah ~1 menit deployment selesai

---

## 🖥️ Manual Deploy (gh-pages)

### Step 1: Pastikan Environment Siap

```bash
# Check Node.js
node --version  # Should be 18+

# Check npm
npm --version   # Should be 9+

# Check gh-pages
npm list gh-pages

# Check git config
git config user.name
git config user.email
```

### Step 2: Build & Deploy

```bash
# Navigate to project
cd "c:\Users\Hello\OneDrive\Desktop\Aplikasi\Portfolio"

# Install dependencies (jika perlu)
npm install

# Build production
npm run build

# Deploy ke GitHub Pages
npm run deploy
```

### Step 3: Verify

```bash
# Check if gh-pages branch created
git branch -r | grep gh-pages

# Check deploy history
git log --oneline --all | head -5
```

### Troubleshooting Manual Deploy

**Error: "Could not authenticate"**
- Solution: Configure Git credentials atau use GitHub CLI
```bash
gh auth login
```

**Error: "dist folder not found"**
- Solution: Run build first
```bash
npm run build
npm run deploy
```

**Changes tidak muncul di website**
- Check cached browser: Ctrl+Shift+Delete (clear cache)
- Check GitHub Pages settings (branch = gh-pages)
- Wait 2-3 menit untuk propagasi DNS

---

## 🐛 Troubleshooting

### Portfolio tidak update setelah push

1. **Check GitHub Actions**
   ```
   GitHub → Actions → Lihat workflow run
   ```
   - Jika ❌: Cek logs untuk error message
   - Jika ✅: Lanjut ke step 2

2. **Check GitHub Pages Settings**
   ```
   GitHub → Settings → Pages
   Branch: gh-pages
   Folder: / (root)
   ```

3. **Clear Browser Cache**
   - Hard refresh: Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac)
   - Atau buka dengan incognito mode

4. **Check DNS/SSL**
   ```
   https://iqbaldwinulhakim.github.io/
   Tunggu 2-3 menit untuk propagasi
   ```

### Build gagal di GitHub Actions

1. **Check logs di GitHub Actions**
   - GitHub → Actions → Recent workflow
   - Click pada workflow yang failed
   - Scroll ke error message

2. **Common errors:**
   - `npm ERR! ERESOLVE unable to resolve dependency tree`
     → Run `npm install` locally dan commit package-lock.json
   
   - `Vite: Could not resolve entry module`
     → Check index.html di root directory
   
   - `TypeScript error`
     → Run `npm run build` locally, fix errors, push again

3. **Debug locally**
   ```bash
   npm run build
   npm run preview
   ```

### Email form tidak kirim di production

1. **Check environment variables**
   - GitHub → Settings → Secrets and variables → Actions
   - Add 3 EmailJS variables:
     - VITE_EMAILJS_PUBLIC_KEY
     - VITE_EMAILJS_SERVICE_ID
     - VITE_EMAILJS_TEMPLATE_ID

2. **Update workflow** (jika perlu add env vars)
   - Edit `.github/workflows/deploy.yml`
   - Tambahkan section env di bawah jobs

3. **Check browser console**
   - F12 → Console tab
   - Lihat error messages

---

## 🎨 Custom Domain (Optional)

Jika mau menggunakan domain custom (e.g., iqbaldwi.com):

### Step 1: Buy Domain
- GoDaddy, Namecheap, atau registrar lain

### Step 2: Configure DNS
- Buka domain registrar settings
- Add A records:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- Add CNAME: `iqbaldwinulhakim.github.io`

### Step 3: Add Custom Domain ke GitHub

1. GitHub → Settings → Pages
2. Custom domain: `iqbaldwi.com`
3. Enable Enforce HTTPS

4. Create file di public folder:
   ```
   public/CNAME
   ```
   Content:
   ```
   iqbaldwi.com
   ```

5. Push ke GitHub
   ```bash
   git add public/CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

---

## ✅ Deployment Checklist

Sebelum production push:

- [ ] Build test locally: `npm run build`
- [ ] Preview test: `npm run preview`
- [ ] TypeScript check: `npm run build` (no errors)
- [ ] Environment variables di `.env` lengkap
- [ ] GitHub repository settings (Pages → gh-pages branch)
- [ ] GitHub Actions permissions enabled
- [ ] `.github/workflows/deploy.yml` ada
- [ ] All changes committed
- [ ] Push ke `main` branch

---

## 📊 Deployment Flow

```
Local Development
      ↓
(npm run dev)
      ↓
Test & Verify
      ↓
git add . && git commit && git push
      ↓
GitHub (main branch)
      ↓
GitHub Actions Triggered
      ↓
├─ npm ci (install)
├─ npm run build
└─ Deploy to gh-pages branch
      ↓
GitHub Pages
      ↓
Live: https://iqbaldwinulhakim.github.io/ 🎉
```

---

## 🔗 Useful Links

- GitHub Actions Docs: https://docs.github.com/en/actions
- GitHub Pages Docs: https://docs.github.com/en/pages
- Vite Docs: https://vitejs.dev/guide/static-deploy.html
- React Router: https://reactrouter.com/

---

## 🎯 Next Steps

1. **Push perubahan:**
   ```bash
   git add .
   git commit -m "feat: Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Monitor di GitHub Actions**
   - Dashboard: https://github.com/IqbalDwiNulhakim/IqbalDwiNulhakim.github.io/actions

3. **Test live portfolio**
   - URL: https://iqbaldwinulhakim.github.io/
   - Tunggu ~1 menit untuk update

4. **Setup EmailJS environment variables** (jika belum)
   - GitHub Settings → Secrets and variables → Actions
   - Add VITE_EMAILJS_* variables

---

**Selesai!** Portfolio Anda sekarang siap untuk auto-deploy ke GitHub Pages. 🚀

Setiap kali Anda push ke `main` branch, portfolio akan otomatis di-update dalam ~1-2 menit.
