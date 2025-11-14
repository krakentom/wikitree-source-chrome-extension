# WikiTree Source - Chrome Extension

Chrome extension for easily creating source citations from online archives for WikiTree. Get a properly formatted citation copied to your clipboard with just one click.

## What does this extension do?

When browsing historical documents (church registers) in supported online archives, this extension automatically:

1. Reads information from the page (city, register type, years, image number, etc.)
2. Creates a properly formatted WikiTree citation
3. Copies it to your clipboard
4. Shows the result in a dialog

The resulting citation is ready to paste into a WikiTree profile as a `<ref>` tag.

## Supported Archives

- **[Moravian Provincial Archive in Brno](https://www.mza.cz/actapublica/)** (ActaPublica platform)
- **[Tyrolean State Archive](https://matriken.tirol.gv.at/)** (Matriken Tirol)

## Installation

### Step 1: Download the extension

1. Click the green **Code** button at the top of this page
2. Select **Download ZIP**
3. Extract the downloaded file to a folder on your computer

### Step 2: Install in Chrome

1. Open Google Chrome
2. Type in the address bar: `chrome://extensions/`
3. Turn on **Developer mode** in the top right corner
4. Click **Load unpacked**
5. Select the extracted directory with the extension
6. The extension will appear in the list and is ready to use

## How to use

1. Open a register page in a supported archive
2. Navigate to the image you want to cite
3. Click the extension icon in Chrome (top right corner, next to the address bar)
4. The extension automatically creates the citation and copies it to clipboard
5. A dialog box displays the generated citation
6. Paste the citation (Ctrl+V) into your WikiTree profile

## Example Citations

### Moravian Provincial Archive in Brno

**Input:** Register Halenkovice, book 4226, image 11 of 291
**Output:**
```html
<ref>[https://www.mza.cz/actapublica/matrika/detail/10794 Halenkovice 4226]. Zemřelí: 1885 - 1940. Image 11 of 291. Moravský zemský archiv Brno.</ref>
```

### Tyrolean State Archive

**Input:** Stams, marriage register 1919-1969, index _MF 0770-08, image 1
**Output:**
```html
<ref>[https://matriken.tirol.gv.at/781830 Stams Traubuch 1919-1969 mit Index_MF 0770-08]. Image 1 of 134, file: _MF 0770-08_Stams - TR 6_1919-_1969_0001.jpg. Tiroler Landesarchiv.</ref>
```