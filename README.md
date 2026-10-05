# No Face Night

Reservation site for No Face Night (Sunday, Nov 1, Houston). Static site on GitHub Pages with Firebase (Firestore + Google sign-in).

- `index.html`: public page. Guests reserve up to 3 tickets and get a QR ticket. They pay $25 per person at the door.
- `admin.html`: staff page (Google login, two authorized emails). Scan QR tickets, collect payment, admit, cancel, see live counts.
- `firestore.rules`: security rules. Publish them in Firebase console > Firestore > Rules. Capacity (250), per-person limit (3) and the admin emails are enforced here.
- Capacity and limits also appear in `firebase-init.js`; keep both in sync.

## One-time setup
1. Firebase console > Authentication > Settings > Authorized domains: add `reyhrm.github.io`.
2. Firestore > Rules: paste `firestore.rules` and Publish.
3. Open `admin.html`, sign in, and click "Open reservations".
