# Testinger Design System

Genel tasarım dili: **açık zemin**, renkli gradient kartlar, sosyal/oyunlaştırılmış mobil app (Spotify Wrapped + Duolingo + NGL hissi).

Kaynak: `src/theme/`

## Renkler (`src/theme/colors.ts`)

- Zemin: `#F7F7FB` (`background`)
- Kart: `#FFFFFF` (`backgroundElevated`)
- Marka: `#7C3AED` (`brand`), vurgu: `#FF4F8B` (`accent`)
- Metin: `#0E0F1A` / `#5A5C6B` / `#8A8D9C`
- Kategoriler: `categoryStyle` (personality, relationship, dark, friendship, money, quick, couple)

## Gradientler (`gradients`)

Hero, daily, candy, sunset, ocean, forest, midnight, electric, royal — büyük kartlarda `LinearGradient` ile.

## Tipografi (`src/theme/typography.ts`)

| Token | Kullanım |
|-------|----------|
| `hero` | Selamlama, büyük başlık |
| `display` | Kart başlıkları |
| `title` / `subtitle` | Bölüm ve kart |
| `body` / `caption` | Açıklama, meta |
| `label` | Bölüm etiketi (KATEGORİLER) |
| `tiny` | Tab, badge |

## Spacing & radius

- `spacing`: xxs → xxxl (2–40)
- `radii`: xs → xl, `pill` (999)
- `shadows`: sm | md | lg | brand

## Component’lar

| Component | Rol |
|-----------|-----|
| `Avatar` | Profil baş harfi |
| `Badge` | Pill etiket |
| `ProgressBar` | XP / paket ilerleme |
| `SectionHeader` | Bölüm başlığı |
| `PrimaryButton` | CTA (gradient varsayılan) |
| `TabIcon` | Alt tab ikonları |
| `UserProgressCard` | Level, XP, streak |
| `DailyTestCard` | Günün testi hero |
| `CategoryChips` | Yatay kategori |
| `PopularTestCard` | Popüler test listesi |
| `PackageCard` | Test paketi |

## Ekranlar

- **Discover** (`DiscoverScreen`) — ana feed, mock data
- **Tests / Friends / Profile** — `ComingSoonScreen` placeholder

## Mock data

`src/mocks/` — backend bağlanana kadar sabit veri (`user`, `categories`, `tests`, `packages`).

## Sonraki ekranlar (sıra)

1. Test çözme
2. Sonuç / Wrapped paylaşım kartı
3. Profil haritası
4. Arkadaş / Couple uyumluluk
