# Translation Guide - MCI Website

## Overview
The website now uses a **namespace-based translation system** following industry best practices. Translations are split into separate JSON files by feature/section for better maintainability.

## Directory Structure
```
/public/locales
  /en (English - Complete ✅)
    /common.json       (~200 bytes) - Navigation & Footer
    /hero.json         (~206 bytes) - Hero section  
    /about.json        (~2.5 KB)    - About, Vision, Mission, Immersive
    /journey.json      (~1.2 KB)    - Timeline milestones
    /services.json     (~13 KB)     - All service content with features & sections
  /es (Spanish - Needs Translation ⚠️)
  /ar (Arabic - Needs Translation ⚠️)
  /ru (Russian - Needs Translation ⚠️)
```

## Translation Status

### ✅ English (en/) - Complete
All content is in English and ready to use as reference.

### ⚠️ Spanish (es/), Arabic (ar/), Russian (ru/)
Currently contain **English text as placeholders**. These need proper translation.

## How to Translate

### Option 1: Manual Translation
1. Navigate to `/public/locales/[language]/`
2. Open each JSON file
3. Translate the text values (keep keys unchanged)
4. Maintain JSON structure exactly

### Option 2: Professional Translation Service
Upload these files to translation services like:
- **Crowdin** - https://crowdin.com
- **Lokalise** - https://lokalise.com  
- **Phrase** - https://phrase.com

## Priority Translation Order

1. **common.json** (Highest Priority - Navigation/Footer)
   - Small file, quick to translate
   - Visible on every page

2. **hero.json** (High Priority - First impression)
   - Homepage hero section
   - Rotating words

3. **about.json** (Medium Priority - Company info)
   - About us description
   - Vision & Mission
   - Immersive concept

4. **journey.json** (Medium Priority - Timeline)
   - Historical milestones (15 entries)

5. **services.json** (Lower Priority but Large - Detailed content)
   - Service cards (6 services)
   - Fintech: 3 features + 3 detailed sections
   - Platforms: 6 features + 6 detailed sections
   - Kids: 7 features + 7 detailed sections
   - B2B: 8 features + 8 detailed sections
   - SIM Card: Basic description

## Example Translation

### Before (English):
```json
{
  "nav": {
    "welcome": "Welcome",
    "about": "About"
  }
}
```

### After (Spanish):
```json
{
  "nav": {
    "welcome": "Inicio",
    "about": "Nosotros"
  }
}
```

## Important Notes

1. **DO NOT change JSON keys** - Only translate values
2. **Maintain JSON structure** - Brackets, commas, quotes must stay
3. **Test after translation** - Check the website renders correctly
4. **Numbers & brands stay the same** - "5.5G", "MCI", "IoT" don't translate
5. **Images don't need translation** - They're referenced by path

## Components Using Translations

Currently implemented with namespace system:
- ✅ Navigation
- ✅ Hero Section  
- ✅ About Section
- ✅ Journey Timeline
- ✅ Fintech Modal (full content)

Still need updating to namespace system:
- ⚠️ Platforms Modal
- ⚠️ Kids Modal
- ⚠️ B2B Modal
- ⚠️ SIM Card Modal

## Next Steps

1. **Translate** ar/, es/, ru/ namespace files
2. **Update** remaining service modals to use namespace translations
3. **Test** each language thoroughly
4. **Refine** translations based on native speaker feedback

## Getting Help

- Check `app/hooks/useLanguage.tsx` to see how translations load
- Look at `FintechContent.tsx` as example of namespace usage
- Translations merge into single `t` object: `t.services.fintech.features[0].title`
