# 📧 Panduan Setup Email untuk Contact Form

Aplikasi portfolio Anda sekarang sudah siap untuk mengirim email! Ikuti langkah berikut untuk mengaktifkan fitur email:

## 🔧 Langkah 1: Setup EmailJS Account

1. **Buka website EmailJS**
   - Kunjungi: https://www.emailjs.com
   - Klik "Sign Up Free"
   - Gunakan GitHub, Google, atau email untuk mendaftar

2. **Setup Gmail Service**
   - Di dashboard, pilih "Email Services"
   - Klik "Add Service"
   - Pilih "Gmail"
   - Login dengan akun Gmail Anda (iqbaldwinulhakim04@gmail.com atau akun lain)
   - Authorize EmailJS untuk akses
   - Catat **Service ID** (contoh: `service_xxxxx`)

## 🎯 Langkah 2: Buat Email Template

1. **Buat Template Baru**
   - Di dashboard, pilih "Email Templates"
   - Klik "Create New Template"
   - Beri nama: **Contact Form**

2. **Setup Template Content**
   Gunakan template berikut:

   **Template Name:** Contact Form Template

   **Subject:** New Message from Portfolio Contact Form

   **Email Content:**
   ```
   Hello Iqbal,

   You have received a new message from your portfolio website:

   From: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}

   ---
   This message was sent from your portfolio contact form.
   You can reply to: {{reply_to}}
   ```

3. **Variable Mapping**
   Pastikan variable berikut tersedia di template:
   - `{{from_name}}` - Nama pengirim
   - `{{from_email}}` - Email pengirim
   - `{{message}}` - Isi pesan
   - `{{reply_to}}` - Email untuk reply
   - `{{to_email}}` - Email penerima (iqbaldwinulhakim04@gmail.com)

4. **Save Template**
   - Klik "Save"
   - Catat **Template ID** (contoh: `template_xxxxx`)

## 🔑 Langkah 3: Get Public Key

1. Di dashboard EmailJS, pilih "Account"
2. Copy **Public Key** (contoh: `xxxxx_yyyyyyy`)

## 📝 Langkah 4: Update .env File

File `.env` sudah ada di project root. Update dengan credentials Anda:

```env
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_DARI_STEP_3
VITE_EMAILJS_SERVICE_ID=service_xxxxx_DARI_STEP_2
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx_DARI_STEP_2
```

**Contoh:**
```env
VITE_EMAILJS_PUBLIC_KEY=ABC123xyz_DEF456uvw
VITE_EMAILJS_SERVICE_ID=service_a1b2c3d4e5f6
VITE_EMAILJS_TEMPLATE_ID=template_abc123xyz789
```

## ⚠️ PENTING - Jangan push .env ke GitHub!

File `.env` sudah ada di `.gitignore`, jadi credentials Anda aman.

Untuk production di GitHub Pages atau Vercel:
1. Tambahkan environment variables di platform Anda
2. Contoh untuk Vercel: Settings → Environment Variables
3. Tambahkan 3 variable di atas

## 🧪 Langkah 5: Test Email Form

1. **Development:**
   ```bash
   npm run dev
   ```

2. **Test Form:**
   - Buka Contact section di portfolio
   - Isi form dengan data test
   - Klik "Send Message"
   - Cek email Anda (iqbaldwinulhakim04@gmail.com)

3. **Troubleshooting:**
   - Buka Developer Console (F12)
   - Cek tab Network untuk request emailjs
   - Cek Console tab untuk error messages

## 📋 Checklist Setup

- [ ] Daftar di EmailJS.com
- [ ] Setup Gmail Service di EmailJS
- [ ] Create Email Template
- [ ] Copy Public Key, Service ID, Template ID
- [ ] Update .env file dengan credentials
- [ ] Test form di localhost
- [ ] Commit & push ke GitHub (jangan push .env)
- [ ] Setup environment variables di Vercel/hosting platform

## 🚀 Deploy ke Production

Jika host di Vercel:
1. Push code ke GitHub
2. Connect GitHub ke Vercel
3. Di Vercel Project Settings → Environment Variables
4. Tambahkan:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`

## ✅ Selesai!

Email form sekarang akan mengirim pesan langsung ke: **iqbaldwinulhakim04@gmail.com**

Setiap ada yang submit contact form, Anda akan menerima email dengan detail nama, email, dan pesan mereka.

---

**Pertanyaan?** Cek dokumentasi EmailJS: https://www.emailjs.com/docs/
