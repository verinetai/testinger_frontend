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
  theme/               # Renk, tipografi, spacing, shadow token'ları
  mocks/               # Mock data (Discover ekranı)
  components/          # UI ve feature kartları
  screens/             # Discover, Tests, Friends, Profil
  navigation/          # Tab navigator + özel alt bar
  services/            # Supabase (ileride API bağlantısı)
  api/                 # Edge Function wrapper
  types/               # DB tipleri (backend ile senkron tutun)
App.tsx
```

Tasarım dili: [`DESIGN.md`](./DESIGN.md)

## Git

Bu klasör **kendi git reposudur**. Tüm push'lar **yalnızca** buraya gider:

**https://github.com/verinetai/testinger_frontend**

Detaylı akış: [`GIT.md`](./GIT.md)

Kök `testinger_backend` klasöründen frontend push **yapmayın**.

## Arkadaşınız için notlar

- Auth, feed ve test çözme ekranları burada geliştirilecek
- Puanlama **doğrudan DB’ye yazılmaz** → `submitTest()` (`src/api/submit-test.ts`)
- FCM token → `device_tokens` tablosu (PostgREST)
- Sürüm kontrolü → `app_versions` tablosu
