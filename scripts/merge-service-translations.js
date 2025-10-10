const fs = require('fs');
const path = require('path');

const languages = ['es', 'ru', 'ar'];
const localesDir = path.join(__dirname, '..', 'public', 'locales');

languages.forEach(lang => {
  try {
    // Read old translation file
    const oldFilePath = path.join(localesDir, `${lang}.json`);
    const oldData = JSON.parse(fs.readFileSync(oldFilePath, 'utf8'));

    // Read new namespace file
    const newFilePath = path.join(localesDir, lang, 'services.json');
    const newData = JSON.parse(fs.readFileSync(newFilePath, 'utf8'));

    // Merge: Copy translated title/subtitle from old to new, keep features/sections from new
    if (oldData.services) {
      // Update main services title
      if (oldData.services.title) {
        newData.title = oldData.services.title;
      }

      // Update each service's title and subtitle
      const serviceKeys = ['5g', 'fintech', 'platforms', 'kids', 'b2b', 'sim'];
      serviceKeys.forEach(key => {
        if (oldData.services[key] && newData[key]) {
          if (oldData.services[key].title) {
            newData[key].title = oldData.services[key].title;
          }
          if (oldData.services[key].subtitle) {
            newData[key].subtitle = oldData.services[key].subtitle;
          }
          if (oldData.services[key].description) {
            newData[key].description = oldData.services[key].description;
          }
        }
      });
    }

    // Write updated file
    fs.writeFileSync(newFilePath, JSON.stringify(newData, null, 2), 'utf8');
    console.log(`✓ Updated ${lang}/services.json`);

  } catch (error) {
    console.error(`✗ Error processing ${lang}:`, error.message);
  }
});

console.log('\nDone! Service translations merged.');
