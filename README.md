# M.C. Perry Author Website

Welcome to the M.C. Perry author website repository! This is a complete multi-page static website featuring a dark, elegant, fantasy-romance visual style. It is built using pure HTML, CSS, and Vanilla JavaScript, making it perfectly optimized for free hosting on GitHub Pages.

## Site Structure

- `index.html` - The Home Page
- `divine-academy.html` - Series Landing Page
- `books.html` - All Books Catalog
- `blog.html` - Blog Listing
- `contact.html` - Contact Form
- `css/styles.css` - Global Stylesheet & Theming
- `js/main.js` - Global Interactivity
- `assets/images/` - Directory for images, book covers, and icons (add your media here)

## How to Customize

Search the HTML code for comments starting with `<!-- Replace:` to find areas where you should update text, links, or image placeholders.

1. **Book Covers:** Place your actual book covers in the `assets/images/` folder and update the image tags in the HTML files (currently pointing to placeholders like `https://placehold.co/400x600`).
2. **Author Bio & Blurbs:** Update the placeholder text throughout the pages.
3. **Links & Socials:** Update `href="#"` attributes to point to your actual buy links, social media profiles, and other destinations.
4. **Blog Posts:** Simply copy an existing `article` block in `blog.html` to add new posts, since this is a static site.

## Deployment to GitHub Pages

To host this site for free on GitHub Pages:

1. Create a new public repository on GitHub (e.g., `mcperry-website`).
2. Upload all the files inside this directory directly to the root of the repository (do not put them in a subfolder).
3. Go to the repository **Settings**.
4. Click on **Pages** in the left sidebar.
5. Under **Source**, select `Deploy from a branch`.
6. Under **Branch**, select `main` (or `master`) and save.
7. Your site will be published at `https://[your-github-username].github.io/mcperry-website/`.
8. Once you configure a custom domain (like `MCperrybooks.com`), you can add that domain in the GitHub Pages settings to make it your primary URL!
