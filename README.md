# Learn with Bishams — Student Accounts update

This version adds student sign-up, login, logout and password-reset email using Supabase Auth.

## Before uploading
1. Open `config.js`.
2. Replace `PASTE_YOUR_SUPABASE_PROJECT_URL_HERE` with your base project URL, for example `https://YOURPROJECT.supabase.co` (do not add `/rest/v1/`).
3. Replace `PASTE_YOUR_SUPABASE_PUBLISHABLE_KEY_HERE` with the `sb_publishable_...` key from Supabase.
4. Never use an `sb_secret_...` or `service_role` key in this website.

## Upload to GitHub
Upload and commit these files to the root of your existing repository, replacing the old `index.html`, `styles.css`, and `app.js`, and adding `config.js`. Keep the repository's existing manifest and service-worker files if you want.

## Supabase settings
In Supabase Authentication settings:
- Keep Email provider enabled.
- If email confirmation is enabled, students must confirm their email before logging in.
- Under Authentication URL Configuration, add your published GitHub Pages URL as a Site URL and as an allowed Redirect URL, e.g. `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

## Notes
- Full name and phone number are stored as Supabase Auth user metadata.
- Supabase manages passwords; this website does not store passwords itself.
- This is an initial authentication version. It does not yet include a separate teacher role, paid subscriptions, protected course content, or cloud progress tracking.
