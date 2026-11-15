# Learn with Bishams — first working prototype

A free, responsive, installable-web-app starter for the Learn with Bishams education platform.

## What's included
- Responsive student dashboard
- Sample lesson library with five subjects
- Practice quiz with automatic marking
- Local progress tracking using browser storage
- Teacher dashboard preview
- Membership-plan preview
- PWA manifest and basic offline cache

## Run it on your computer
1. Download and extract the ZIP file.
2. Open the extracted `learn_with_bishams` folder.
3. For the simplest preview, open `index.html` in a modern browser.

For install/offline features, serve the folder over HTTPS or localhost. One easy option is VS Code with the Live Server extension, or Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Important limitations
This is a front-end prototype, not a production education platform. Data is stored only in the current browser/device. It has no real student accounts, teacher permissions, cloud database, video hosting, payment gateway, paid-content protection, or live subscriptions. The teacher and membership screens are previews only. Do not collect real student personal information or payment details in this version.

## Recommended next development stage
1. Create a Supabase project for authentication and database.
2. Add role-based access for student, teacher and administrator.
3. Move courses, lessons, questions, results and progress into the database.
4. Add secure server-side subscription verification with a supported payment provider (for example, Paystack for eligible Nigerian businesses).
5. Add hosted video delivery and access controls.
6. Test privacy, security, accessibility and age-appropriate safeguards before public launch.

## Suggested free starting tools
- Visual Studio Code: edit the project
- GitHub: source-code backup and version control
- Vercel: deploy the front end (check current free-plan limits)
- Supabase: backend starter (check current free-plan limits)

Free tiers and payment-provider eligibility/fees can change. Verify current terms before launch.
