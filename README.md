# Next.js Auth + Product Details (UI Task)

A small Next.js (App Router) app with an auth flow (Register → Verify → Login → Dashboard) and a pixel-perfect Product Details page accessible from Our Category.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS**
- **Zod** validation
- **Server Actions** for API calls
- **LocalStorage** token + simple client guard for `/dashboard`

## Getting Started

### Requirements

- Node.js >= 18.17 (or 20+)
- npm or pnpm

### Install

```bash
npm i
```

### Environment

- Create .env.local in the project root:

# Base URL from your Postman collection / backend

API_BASE_URL=https://your-api.example.com

# (optional) client-side usage if ever needed

NEXT_PUBLIC_API_BASE_URL=https://your-api.example.com

### Run

```bash
npm run
```

Open [http://localhost:3000]

### Routes

- /register – Full Name, Email, Password, Phone, Country Code
- /verify – Enter verification code (testing code 123456)
- /login – Email + Password
- /dashboard – Guarded; after login we store token & name in localStorage and show "Welcome, [User Name]"
- /ourCategory/[productSlug] – Dynamic Product Details page (the UI task page)
- Main page just links to Our Category

### Auth Flow & API Integration

Server Actions call your API:

- POST ${API_BASE_URL}/auth/register
- POST ${API_BASE_URL}/auth/verify
- POST ${API_BASE_URL}/auth/login

```bash
localStorage.setItem('token', token);
localStorage.setItem('userName', user.fullName || '');
```

components/ProtectedClient.tsx redirects to /login if no token is present.

### Scripts

```bash
npm run dev     # start local dev
npm run build   # production build
npm run start   # run production build
npm run lint    # lints
```

### Project Structure

```bash
├── .gitignore
├── README.md
├── app
│ ├── (auth)
│ │ ├── lib
│ │ │ ├── inputFields.ts
│ │ │ └── navbarData.ts
│ │ ├── login
│ │ │ ├── action.ts
│ │ │ └── page.tsx
│ │ ├── register
│ │ │ ├── action.ts
│ │ │ └── page.tsx
│ │ └── verify
│ │ ├── action.ts
│ │ └── page.tsx
│ ├── components
│ │ ├── Footer.tsx
│ │ ├── ProductDescription.tsx
│ │ ├── ProductDetails.tsx
│ │ ├── ProductGallery.tsx
│ │ ├── ProtectedClient.tsx
│ │ ├── RatingReviews.tsx
│ │ ├── footer
│ │ │ ├── ContactUs.tsx
│ │ │ ├── NewsLetter.tsx
│ │ │ └── Socials.tsx
│ │ ├── forms
│ │ │ ├── AuthShell.tsx
│ │ │ ├── PasswordField.tsx
│ │ │ ├── SubmitButton.tsx
│ │ │ ├── TextField.tsx
│ │ │ └── ValidateInput.tsx
│ │ ├── ratingReviews
│ │ │ ├── StarIcon.tsx
│ │ │ └── Stars.tsx
│ │ └── ui
│ │ ├── BreadCrumb.tsx
│ │ ├── Header.tsx
│ │ └── Navbar.tsx
│ ├── dashboard
│ │ └── page.tsx
│ ├── globals.css
│ ├── layout.tsx
│ ├── lib
│ │ ├── api.ts
│ │ ├── productDescription.ts
│ │ ├── productGalleryImages.ts
│ │ ├── ratingReviews.ts
│ │ └── validator.ts
│ ├── ourCategory
│ │ └── [productSlug]
│ │ └── page.tsx
│ ├── page.tsx
│ ├── types
│ │ ├── img.ts
│ │ ├── navbar.ts
│ │ └── productDescription.ts
│ └── utils
│ ├── productSlugTransfer.ts
│ ├── ratingReviews.tsx
│ └── styleClass.ts
├── public
│ ├── footer/… (bg + icons)
│ ├── productGallery/… (gallery images)
│ └── other assets…
├── next.config.ts
├── tsconfig.json
├── package.json
└── etc.
```

### Deployment (Vercel)

- Push to GitHub
- Import the repo in Vercel
- Set project env vars:
  API_BASE_URL
  (optional) NEXT_PUBLIC_API_BASE_URL

- Deploy

### Notes

- UI mockup page is static for accuracy; auth pages are graded on API integration
- If you must call APIs from the client, ensure CORS is enabled or proxy through a server action
- To log out, clear local storage
  ```bash
   localStorage.removeItem('token');
    localStorage.removeItem('userName');
  ```

### License

- MIT.
