# Testinger Frontend — Git ve Push Rehberi

Bu proje **yalnızca** aşağıdaki GitHub reposuna push edilir:

**https://github.com/verinetai/testinger_frontend**

Clone:

```bash
git clone https://github.com/verinetai/testinger_frontend.git
cd testinger_frontend
```

---

## Kurallar

| Yap | Yapma |
|-----|--------|
| Tüm mobil/Expo kodunu **bu repo**da commit et | `testinger_backend` kökünden frontend push etme |
| Branch: **`main`** | `.env` dosyasını commit etme (gizli anahtarlar) |
| Remote: **`origin`** → `verinetai/testinger_frontend` | Backend SQL / Edge Functions bu repoya ekleme |

Backend (Supabase migration, Edge Functions):  
https://github.com/verinetai/testinger_backend

---

## İlk kurulum (yeni makine)

```powershell
cd c:\Users\me\Desktop\testinger_frontend
copy .env.example .env
npm install
```

`.env` içine Supabase URL ve anon key girin (Dashboard → Project Settings → API).

---

## Her değişiklikten sonra (standart akış)

```powershell
cd c:\Users\me\Desktop\testinger_frontend

git status
git add .
git commit -m "feat: kısa açıklama"
git push origin main
```

### Commit mesajı önerileri

- `feat:` yeni özellik / ekran / tasarım
- `fix:` hata düzeltme
- `chore:` bağımlılık, script, config
- `docs:` yalnızca dokümantasyon

Örnek: `feat: Discover ekranı ve design system temeli`

---

## Remote kontrolü

```powershell
git remote -v
```

Beklenen çıktı:

```
origin  https://github.com/verinetai/testinger_frontend.git (fetch)
origin  https://github.com/verinetai/testinger_frontend.git (push)
```

Yanlış remote varsa:

```powershell
git remote set-url origin https://github.com/verinetai/testinger_frontend.git
```

---

## Pull (arkadaşın değişikliği)

```powershell
git pull origin main
npm install
```

---

## İlgili dosyalar

- `README.md` — kurulum ve proje özeti
- `WORKSPACE.md` — backend + frontend repo ayrımı
- `DESIGN.md` — tasarım dili (renk, tipografi, component’lar)
