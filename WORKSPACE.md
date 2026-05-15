# Testinger — Workspace ve Git Rehberi (Frontend repo)

Bu dosya, kök workspace’teki `WORKSPACE.md` ile **aynı kuralları** içerir.  
Yalnızca `testinger_frontend` reposunu clone edenler için kopyalandı.

## Özet

| Bu repo | Remote | Branch |
|---------|--------|--------|
| **testinger_frontend** (bu klasör) | https://github.com/verinetai/testinger_frontend | `main` |

Backend ayrı repoda: https://github.com/verinetai/testinger_backend

## Push kuralı

Tüm mobil/Expo değişiklikleri **bu klasörde**:

```powershell
git status
git add .
git commit -m "feat: ..."
git push origin main
```

Backend (`supabase/`, SQL, Edge Functions) **bu repoya push edilmez.**

## Tam rehber

Tam matris, MCP, Supabase URL ve tip senkronu için ana workspace’teki `WORKSPACE.md` dosyasına bakın (veya backend repo kökündeki kopya).
