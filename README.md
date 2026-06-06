# TierTrack

A Chrome extension that adds a quick-search button to [Tiermaker.com](https://tiermaker.com) images. It extracts image titles and opens them directly on YouTube, automatically cleaning up file extensions and technical clutter.

## Features
- **Instant Search:** One-click YouTube search for any item.
- **Auto-Clean:** Removes .jpg, .png, and junk from filenames.
- **Dynamic:** Works seamlessly even as you update your tier list.

## Disclaimer: Compatibility
**Please note:** This extension relies on the filenames of the uploaded images on Tiermaker. 
- It works best on tier lists where images are uploaded with descriptive, clean filenames (e.g., `"title form sthe song".jpg`).
- If an image is uploaded with a random, technical filename (e.g., `image1.png`), the extension will only be able to search for the remaining readable text or the filename itself. The extension cannot "see" or "recognize" the actual content of the image via AI; it strictly processes the file's metadata.

## Installation
1. Download this code.
2. Go to `chrome://extensions/` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the folder.
5. Refresh Tiermaker and enjoy!
