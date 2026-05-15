# Testinger — Mobil Frontend (Expo)

React Native + Expo + TypeScript. Backend: Supabase (`testinger_backend` repo).

## Kurulum

```bash
cp .env.example .env   # Windows: copy .env.example .env
npm install
npm start
```

## Yapı

```
src/
  lib/supabase.ts      # Supabase client
  api/submit-test.ts   # Edge Function wrapper
  types/database.ts    # DB tipleri (backend ile senkron tutun)
App.tsx                # Giriş ekranı + bağlantı testi
```

## Git

Bu klasör **kendi git reposudur**. Push yalnızca:

https://github.com/verinetai/testinger_frontend

Kök `testinger_backend` klasöründen push **yapmayın**.

## Arkadaşınız için notlar

- Auth, feed ve test çözme ekranları burada geliştirilecek
- Puanlama **doğrudan DB’ye yazılmaz** → `submitTest()` (`src/api/submit-test.ts`)
- FCM token → `device_tokens` tablosu (PostgREST)
- Sürüm kontrolü → `app_versions` tablosu
