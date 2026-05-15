# Testinger Design System

Minimal SaaS — matte black, high contrast, glassmorphism cards.

## Colors (`src/theme/colors.ts`)

- Background: `#0a0a0b` (matte black)
- Elevated surfaces: semi-transparent white overlays
- Accent: `#3b82f6` for CTAs and labels
- Text: zinc scale (`#f4f4f5` / `#a1a1aa` / `#71717a`)

## Typography (`src/theme/typography.ts`)

- Display: screen titles (28px bold)
- Title: card headings (20px semibold)
- Body: descriptions (15px)
- Label: uppercase category chips (12px)

## Components

| Component | Use |
|-----------|-----|
| `GlassCard` | Frosted container (BlurView iOS / fallback Android) |
| `TestCard` | Feed item for published tests |
| `PrimaryButton` | High-contrast CTA |

## Layout

- Horizontal padding: `spacing.md` (16)
- Card gap in lists: `spacing.md`
- Border radius: `radii.lg` for cards
