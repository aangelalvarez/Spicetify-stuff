# Contributing — Full Screen (`Extensions/full-screen/`)

## Build and test locally

From the full-screen folder:
```bash
npm install
npm run build-local
```

Output: `dist/fullScreen.js`. **`npm run build`** (without `-local`) may only hit your Spicetify install, not `dist/`.

**Load it in Spotify (dev-friendly)**

If you installed **Full Screen** from the **Spicetify Marketplace**, remove or disable that marketplace extension first. Otherwise Spotify may still load the marketplace bundle (or two conflicting copies), and your local build will look like it “did nothing.”

Copy the bundle into Spicetify’s **Extensions** folder, then apply. Example on macOS/Linux (adjust the repo path; Spicetify root is usually `spicetify config-dir`):

```bash
cp dist/fullScreen.js ~/.config/spicetify/Extensions/fullScreenDev.js
spicetify apply
```

One-time: in **`config-xpui.ini`**, set **`extensions`** to include **`fullScreenDev.js`** (or whatever filename you used). On Windows, copy to `%appdata%\spicetify\Extensions\` instead.

**Committing:** include `dist/fullScreen.js` if the repo should ship a ready-to-run build.
