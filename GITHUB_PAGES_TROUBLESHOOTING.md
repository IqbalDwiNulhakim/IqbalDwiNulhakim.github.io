# 🔧 GitHub Pages Deployment Troubleshooting

Portfolio Anda tidak muncul di GitHub Pages. Mari debug step-by-step.

## 🔍 Kemungkinan Masalah

### 1. GitHub Pages Settings Tidak Benar

**Penyebab paling umum:** Branch tidak set ke `gh-pages`

**Cara Fix:**
1. Buka GitHub Repository
   - URL: https://github.com/IqbalDwiNulhakim/IqbalDwiNulhakim.github.io

2. **Settings → Pages**
   
3. Di section "Build and deployment", pastikan:
   ```
   Source: Deploy from a branch
   Branch: gh-pages
   Folder: / (root)
   ```

4. Klik **Save**

5. Tunggu ~5 menit untuk propagasi

---

### 2. GitHub Actions Workflow Belum Run atau Error

**Cara Check:**
1. Buka: https://github.com/IqbalDwiNulhakim/IqbalDwiNulhakim.github.io/actions

2. Lihat workflow runs
   - Hijau ✅ = Berhasil
   - Merah ❌ = Error
   - Kuning ⏳ = Sedang jalan

3. Klik workflow yang latest untuk lihat logs

**Jika belum ada workflow:**
- Berarti `.github/workflows/deploy.yml` belum ter-push ke GitHub
- Solution: `git push origin main` lagi dengan force

---

### 3. Build Error di GitHub Actions

Jika workflow merah ❌, klik untuk lihat error:

**Common errors:**
- `npm ERR! ERESOLVE unable to resolve dependency tree`
  - Solution: Run `npm install` locally, commit package-lock.json, push

- `error TS2688: Cannot find type definition file for 'vite/client'`
  - Solution: Delete `src/vite-env.d.ts`, recreate dengan:
  ```typescript
  /// <reference types="vite/client" />
  ```

- `React Router error`
  - Check Router basename di App.tsx

---

### 4. Browser Cache Issue

Jika Pages setting sudah benar tapi masih blank:
1. Hard refresh browser: **Ctrl+Shift+R** (Windows) atau **Cmd+Shift+R** (Mac)
2. Clear cookies: Settings → Clear browsing data
3. Coba incognito mode
4. Coba URL berbeda device

---

## ✅ Checklist untuk Debug

- [ ] GitHub Pages Settings → Branch = gh-pages?
- [ ] GitHub Pages Settings → Source = "Deploy from a branch"?
- [ ] GitHub Actions workflow ada di Actions tab?
- [ ] Workflow run berhasil (hijau) atau error (merah)?
- [ ] Jika error, lihat error message di logs
- [ ] vite.config.js ada `base: "/"`?
- [ ] App.tsx Router ada `basename=""`?
- [ ] Browser cache sudah di-clear?

---

## 🚀 Quick Fix (Jika masih blank)

### Step 1: Verify GitHub Pages Settings
```
Settings → Pages
Source: Deploy from a branch
Branch: gh-pages
Folder: / (root)
→ Save
```

### Step 2: Check if gh-pages branch exists
```bash
git branch -a | grep gh-pages
```
- Jika ada: ✅ OK
- Jika tidak ada: GitHub Actions belum run

### Step 3: Force re-run GitHub Actions
```bash
# Make a small change
echo "# Updated" >> README.md

# Commit & push
git add README.md
git commit -m "trigger deployment"
git push origin main

# Monitor di GitHub Actions
# Tunggu workflow selesai (~2 menit)
```

### Step 4: Verify Live
- Buka: https://iqbaldwinulhakim.github.io/
- Hard refresh: Ctrl+Shift+R
- Tunggu 2-3 menit jika masih propagating

---

## 📝 What Should Happen

**Ideal Flow:**
```
1. You: git push origin main
         ↓
2. GitHub: Trigger workflow (dalam 30 detik)
         ↓
3. Build: npm install, npm run build (dalam 1-2 menit)
         ↓
4. Deploy: Push ke gh-pages branch
         ↓
5. GitHub Pages: Serve dari gh-pages branch
         ↓
6. Live: https://iqbaldwinulhakim.github.io/ (1-5 menit)
```

---

## 🔗 Useful Links

- **Your Repo:** https://github.com/IqbalDwiNulhakim/IqbalDwiNulhakim.github.io
- **Actions Tab:** https://github.com/IqbalDwiNulhakim/IqbalDwiNulhakim.github.io/actions
- **Pages Settings:** https://github.com/IqbalDwiNulhakim/IqbalDwiNulhakim.github.io/settings/pages
- **Live Portfolio:** https://iqbaldwinulhakim.github.io/
- **GitHub Actions Docs:** https://docs.github.com/en/actions

---

## 📞 If Still Not Working

Kalau sudah follow semua tapi masih tidak muncul, berarti:

1. **GitHub Pages Settings tidak benar**
   - Check: Settings → Pages → Source dan Branch

2. **Workflow belum run**
   - Check: Actions tab → Cari "Deploy to GitHub Pages"
   - Jika tidak ada: `.github/workflows/deploy.yml` belum ter-push

3. **Build error di GitHub**
   - Check: Actions → Latest workflow → Logs
   - Copy error message dan fix locally

4. **DNS/SSL propagation**
   - Tunggu 5-10 menit untuk propagasi penuh

---

**Mari fix sekarang! Ikuti langkah di atas dan report hasilnya.** ✅
