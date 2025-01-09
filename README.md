# Kanji Reading Helper

**Kanji Reading Helper** is a Chrome extension that provides the **hiragana readings** for selected Japanese kanji or text. It uses both a local database and the Goo Labs API to fetch and display readings, making it a convenient tool for Japanese learners.

---

## Features

- Displays the hiragana reading of selected Japanese kanji or text.
- Uses a tooltip to display the reading directly on the webpage.
- Local database for frequently used words for faster access.
- Fallback to Goo Labs API (`https://labs.goo.ne.jp/api/hiragana`) for unknown words.

---

## Installation

1. **Clone or Download the Repository**
   - Clone the repository using Git:
     ```bash
     git clone https://github.com/wespc/kanji-reading-helper.git
     ```
   - Or download the repository as a ZIP file and extract it.

2. **Open Chrome Extensions Page**
   - Navigate to `chrome://extensions` in your Chrome browser.

3. **Enable Developer Mode**
   - Toggle the **Developer mode** switch in the top-right corner.

4. **Load the Extension**
   - Click on **Load unpacked** and select the folder containing the extension files (`content.js`, `manifest.json`, and `popup.html`).

---

## Contributing

We welcome contributions to improve Kanji Reading Helper! To maintain a clean and stable workflow, all development should be done on the `dev` branch. Here’s the step-by-step process:

1. **Fork and Clone the Repository**
   - Fork this repository to your GitHub account.
   - Clone the forked repository locally:
     ```bash
     git clone https://github.com/wespc/kanji_reader.git
     cd kanji_reader
     ```

2. **Switch to the `dev` Branch**
   - Make sure you are working on the `dev` branch:
     ```bash
     git checkout dev
     ```

3. **Create a New Branch for Your Work**
   - Create a new branch for your feature or bug fix based on `dev`. Use a meaningful name for your branch:
     ```bash
     git checkout -b feature/your-feature-name
     ```

4. **Make Changes**
   - Implement your feature or fix the bug.
   - Test your changes thoroughly to ensure they work as expected.

5. **Commit Your Changes**
   - Write clear and descriptive commit messages:
     ```bash
     git add .
     git commit -m "Add a clear description of your changes"
     ```

6. **Push Your Branch**
   - Push your branch to your forked repository:
     ```bash
     git push origin feature/your-feature-name
     ```

7. **Submit a Pull Request**
   - Open a pull request targeting the `dev` branch of the main repository.
   - Provide a clear description of your changes in the pull request.

---

## Usage

1. After loading the extension, it will automatically run on all webpages.
2. Select any Japanese kanji or text on a webpage.
3. A tooltip will appear showing the selected text and its hiragana reading.

---

## API Configuration

This extension uses the Goo Labs API (`https://labs.goo.ne.jp/api/hiragana`) to fetch hiragana readings for unknown words. To use the extension, you must:

1. **Register for a Goo Labs API Key**
   - Visit [Goo Labs API](https://labs.goo.ne.jp/api/) to register and obtain an API key.

2. **Add Your API Key**
   - Open `content.js` and replace the placeholder `your_api_key` with your actual API key:
     ```js
     app_id: 'your_api_key',
     ```

---

## File Structure

- `content.js`: The main script that handles text selection, tooltip creation, and API requests.
- `manifest.json`: Defines the extension's permissions, scripts, and metadata.
- `popup.html`: The popup UI for the extension, providing a simple description.

---

## Permissions

The following permissions are required by the extension:

- **Active Tab**: To interact with content on the active webpage.
- **Host Permissions**: To access `https://labs.goo.ne.jp/api/hiragana`.

---

## Troubleshooting

1. **Tooltip Doesn't Appear**:
   - Ensure the extension is properly loaded in `chrome://extensions`.
   - Check the console for errors (`Ctrl+Shift+J`).

2. **Error Fetching Readings**:
   - Verify that the API key in `content.js` is correct.
   - Ensure you have an active internet connection.

3. **Extension Not Working on Some Pages**:
   - The extension may not work on restricted pages like `chrome://` or `file://`.

---

## Future Enhancements

- Add katakana reading support.
- Enable custom styling for the tooltip.
- Expand the local word database.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Created by **[PENG CHENG/wespc]**.
