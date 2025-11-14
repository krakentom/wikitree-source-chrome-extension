# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Chrome extension that generates WikiTree source citations from European archive websites. Extracts information from online archive pages and formats them as proper WikiTree `<ref>` tags, copying the result to the clipboard.

## Architecture

### Extension Structure

- **manifest.json**: Manifest V3 extension definition
- **background.js**: Service worker that injects content scripts when extension icon is clicked
- **content.js**: Routing logic - detects URL and calls appropriate archive function
- **archives/actapublica-brno.js**: Moravian Provincial Archive implementation
- **archives/matriken-tirol.js**: Tyrolean Archive implementation

### Architecture Pattern

The extension uses URL-based routing to call archive-specific functions:

1. **background.js** loads all scripts: `archives/actapublica-brno.js`, `archives/matriken-tirol.js`, `content.js`
2. **content.js** detects URL and routes to the appropriate function
3. Each archive module (`archives/actapublica-brno.js`, `archives/matriken-tirol.js`):
   - Uses CSS selectors to extract data from the page DOM
   - Formats extracted data into a WikiTree reference
   - Copies reference to clipboard
   - Shows alert with the result

### Adding New Archives

When adding support for a new archive:

1. Create new file in `archives/` directory (e.g., `archives/opava.js`)
2. Implement function `get{ArchiveName}Source()` in that file
3. Add the new file to `background.js` script loading array
4. Add URL pattern to routing logic in `content.js`
5. Identify DOM selectors for required data on that archive's website
6. Format the reference according to WikiTree citation standards
7. Use English for all error messages

### Data Extraction Pattern (Brno Example)

The Brno implementation shows the typical pattern:
- Extract location, book number, page number from DOM
- Determine record type (N=birth, O=marriage, Z=death) from available year ranges
- Build formatted reference with URL, location, type, years, page info, archive name

## Development

### Testing
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select this directory
4. Navigate to a supported archive page
5. Click extension icon to test

### No Build Process
This is vanilla JavaScript - edit files directly and reload extension in Chrome to test changes.

### Archive-Specific Notes

**Moravský zemský archiv Brno (mza.cz)**: Uses ActaPublica platform with structured matrika (register) header containing metadata.

**Tirolský archiv (matriken.tirol.gv.at)**: Implementation pending - different structure from ActaPublica.
