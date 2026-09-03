# MajorLift

A React Native (CLI) mobile application with email/password authentication and Google Sign-In, built with Redux Toolkit for state management and Axios for API communication.

---

## Tech Stack

- **React Native CLI** `0.87.1`
- **React** `19.2.3`
- **TypeScript**
- **Redux Toolkit** — global state management
- **React Navigation** (Native Stack) — screen navigation
- **Axios** — API requests, with request/response interceptors
- **AsyncStorage** — local session persistence
- **@react-native-google-signin/google-signin** — Google authentication (Android)
- **react-native-vector-icons** — icons (e.g. Google icon on the "Continue with Google" button)

---

## Features

- Email/password Login & Signup
- Google Sign-In (Android)
- Persistent sessions via AsyncStorage
- Centralized API layer with Axios interceptors (auto-attaches auth token, handles 401 responses)
- Redux-managed auth state

---

## Project Structure

```
src/
├── components/          # Reusable UI components (Button, Input, Card, Header)
├── config/               # App-level config (colors, API base URL)
├── features/
│   ├── auth/
│   │   └── screens/      # Login, Signup screens
│   └── home/
│       └── screens/      # Home screen
├── navigation/           # RootNavigator (React Navigation stack)
├── services/
│   ├── api-endpoints.ts  # All API route paths
│   ├── auth.ts           # authService — login, signup, googleLogin
│   ├── google-auth.ts    # Google Sign-In wrapper (configure, signIn, signOut)
│   └── http-client.ts    # Axios instance + interceptors
├── store/
│   ├── authSlice.ts      # Redux auth state (user, isLoggedIn)
│   └── index.ts          # Redux store configuration
├── types/                # Shared TypeScript types
└── utils/
    └── storage.ts         # AsyncStorage helpers for session token
```

---

## Getting Started

### Prerequisites

- Node.js `>= 22.11.0`
- Android Studio (with an emulator or a physical device connected via USB debugging)
- JDK (as required by your React Native/Android setup)

### Installation

```bash
# Install dependencies
npm install

# Start Metro bundler
npm start

# Run on Android (in a separate terminal)
npm run android
```

**iOS (not the focus of this project's current auth work, but for completeness):**

```bash
bundle install
bundle exec pod install
npm run ios
```

> If you run into setup issues, see React Native's [Troubleshooting guide](https://reactnative.dev/docs/troubleshooting).

### Environment / API Configuration

The API base URL is set in `src/config/index.ts`:

```typescript
export const API_URL = 'https://dummyjson.com'; // currently a mock/testing API
```

Update this to point to your real backend once available.

---

## Authentication

### Email/Password

Standard login/signup flow via `authService.login()` / `authService.signup()`, hitting the configured `API_URL`.

### Google Sign-In (Android)

Google Sign-In is fully configured and working on the mobile side (account picker, token retrieval, cancellation/error handling, sign-out). Full setup steps — including Google Cloud Console configuration, OAuth Client IDs, SHA-1 fingerprint generation, and code walkthrough — are documented separately:

📄 **[docs/GOOGLE_LOGIN.md](./docs/GOOGLE_LOGIN.md)**

> ⚠️ **Note:** Backend verification of the Google ID Token is not yet integrated (see the "Pending Work" section in the doc above) — the current API (`dummyjson.com`) is a mock API with no Google auth endpoint. This is a known, documented limitation, not a bug.

> iOS Google Sign-In is intentionally out of scope for this project at this time.

---

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start Metro bundler |
| `npm run android` | Build & run on Android |
| `npm run ios` | Build & run on iOS |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest tests |

---

## Known Limitations

- Backend is currently a placeholder (`dummyjson.com`); real API integration pending.
- Google ID Token is temporarily used as the session token until real backend verification is wired in.
- Only debug-keystore SHA-1 is registered with Google — a release-keystore SHA-1 must be added before a production/Play Store build.

---

## Learn More (React Native)

- [React Native Website](https://reactnative.dev)
- [Environment Setup](https://reactnative.dev/docs/environment-setup)
- [Basics Guide](https://reactnative.dev/docs/getting-started)
