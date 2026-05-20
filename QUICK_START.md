# 🚀 Quick Start - Portfolio Updates

Panduan cepat untuk update portfolio Anda dan auto-deploy ke GitHub Pages.

## ⚡ Quick Commands

### Development Mode
```bash
npm run dev
```
- Buka: http://localhost:3000
- Hot reload: Otomatis update saat save file

### Build Production
```bash
npm run build
```
- Create optimized build di folder `dist/`

### Test Production Build Locally
```bash
npm run preview
```
- Preview production build di local
- Useful untuk test sebelum deploy

### Deploy Manually (jika GitHub Actions tidak jalan)
```bash
npm run deploy
```
- Build dan deploy langsung ke GitHub Pages

---

## 📝 Workflow Update Portfolio

### 1. Buat Perubahan
```bash
# Edit file TypeScript/TSX
# Edit public assets (images, pdf)
# Test dengan npm run dev
```

### 2. Commit Perubahan
```bash
git add .
git commit -m "Description of changes"
# Contoh: "feat: Update project descriptions"
```

### 3. Push ke GitHub
```bash
git push origin main
```

### 4. Automatic Deploy
- GitHub Actions akan otomatis trigger
- Build project
- Deploy ke gh-pages branch
- Live dalam ~1-2 menit

### 5. Verify Update
- Buka: https://iqbaldwinulhakim.github.io/
- Hard refresh (Ctrl+Shift+R) jika belum update

---

## 📋 File Locations

| Folder | Gunakan Untuk |
|--------|--------------|
| `/src/components` | React components |
| `/src/pages` | Page components |
| `/src/data` | Data files (projects, skills, constants) |
| `/src/hooks` | Custom React hooks |
| `/src/types` | TypeScript types |
| `/public/images` | Portfolio images |
| `/public/pdf` | PDF documents |

---

## 🔧 Common Updates

### Update Project Information
**File:** `src/data/projects.ts`
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Short description",
    image: "/images/project-image.png",
    // ... more fields
  }
];
```

### Update Skills
**File:** `src/data/skills.ts`
```typescript
export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS"]
  }
];
```

### Update Contact Info
**File:** `src/data/constants.ts`
```typescript
export const SOCIAL_LINKS = {
  email: "your-email@gmail.com",
  phone: "+62-xxx-xxx-xxxx",
  location: "City, Country"
};
```

### Add/Update Images
1. Save image ke `/public/images/`
2. Update references di components/data files
3. Commit dan push

### Add/Update PDF
1. Save PDF ke `/public/pdf/`
2. Update file path di components
3. Commit dan push

---

## 🐛 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Dev server tidak start | `npm install` lalu `npm run dev` |
| Build error | `npm run build` locally untuk error details |
| Portfolio tidak update | Clear cache (Ctrl+Shift+R) dan tunggu 2 menit |
| GitHub Actions failed | Check logs di GitHub → Actions tab |
| Email tidak kirim | Check environment variables di GitHub Secrets |

---

## 📚 Full Documentation

- **Email Setup:** [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md)
- **Deployment:** [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **Project Structure:** [README.md](README.md)

---

## ✅ Deployment Checklist (setiap update)

- [ ] Test locally: `npm run dev`
- [ ] Build test: `npm run build`
- [ ] Commit changes: `git commit -m "..."`
- [ ] Push ke main: `git push origin main`
- [ ] Monitor Actions: GitHub → Actions tab
- [ ] Verify live: https://iqbaldwinulhakim.github.io/

---

**Happy updating! 🎉**
