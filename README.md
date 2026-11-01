# WhatsApp Clone

A WhatsApp clone built with [Expo](https://expo.dev), [Expo Router](https://docs.expo.dev/router/introduction), and [Redux Toolkit](https://redux-toolkit.js.org/).

> ⚠️ Note: The OTP verification flow is a demo. The "Verify" button simulates a successful login using Redux Toolkit and renders the main screen (`src/app/(main)/index.tsx`). No real backend or SMS service is connected.

## Tech Stack

- [Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/)
- [Expo Router](https://docs.expo.dev/router/introduction) — file-based routing
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/) + [React Redux](https://react-redux.js.org/)
- [react-native-mmkv](https://github.com/mmateev/react-native-mmkv) — fast, persistent key-value storage
- [react-native-size-matters](https://github.com/nirsky/react-native-size-matters) — responsive scaling
- [@expo/vector-icons](https://icons.expo.fyi/) — icons
- [@codsod/react-native-otp-input](https://www.npmjs.com/package/@codsod/react-native-otp-input) — OTP input

## Project Structure

```
src/
├── app/
│   ├── _layout.tsx              # Root layout (Redux Provider + auth redirect)
│   ├── index.tsx                # Entry redirect
│   ├── (auth)/                  # Auth screens group
│   │   ├── _layout.tsx          # Auth stack navigator
│   │   ├── index.tsx            # Splash / branding screen
│   │   ├── terms_agree.tsx      # Terms & conditions
│   │   ├── login.tsx            # Phone login
│   │   └── verify_otp.tsx       # OTP verification (Verify -> main screen)
│   └── (main)/                  # Main app screens group
│       ├── _layout.tsx          # Main stack navigator
│       └── index.tsx            # WhatsApp home (Chats / Status / Calls)
├── components/                  # Reusable UI components
│   ├── big/                     # Chats, Status, Calls
│   └── small/                   # Button, etc.
├── redux/
│   ├── store.js                 # Redux Toolkit store
│   ├── productSlice.js          # Example product slice
│   └── authSlice.js             # Auth slice (login / logout)
├── constants/
├── hooks/
├── styles/
├── translations/
├── utils/
│   └── utils.ts                 # MMKV storage helpers
├── assets/
└── global.css
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Bun](https://bun.sh/) (this project uses `bun.lock`)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

### Install dependencies

```bash
bun install
```

> If you prefer npm, run `npm install` instead.

### Start the development server

```bash
bun start
```

You can also run on a specific platform:

```bash
bun android    # expo start --android
bun ios        # expo start --ios
bun web        # expo start --web
```

Open the app with [Expo Go](https://expo.dev/go), an Android emulator, or an iOS simulator.

> After adding any library with native code, create a development build:
> ```bash
> bunx expo run:android
> bunx expo run:ios
> ```
> Or build in the cloud with [EAS](https://docs.expo.dev/eas/index.md):
> ```bash
> bunx eas-cli build
> ```

## How the Auth Flow Works

1. The app starts at `src/app/_layout.tsx`, which wraps everything in a Redux `Provider`.
2. The root layout checks Redux `auth.isAuthenticated` and the stored `access_token`:
   - If authenticated → redirects to `/(main)` (renders `src/app/(main)/index.tsx`).
   - Otherwise → redirects to `/(auth)` (auth screens).
3. On the OTP screen (`src/app/(auth)/verify_otp.tsx`), tapping **Verify**:
   - Dispatches the Redux `login()` action (sets `isAuthenticated = true`).
   - Saves a fake `access_token` to MMKV storage.
   - Navigates to `/(main)`, immediately rendering `src/app/(main)/index.tsx` (the WhatsApp home screen).

## Scripts

| Script | Description |
|--------|-------------|
| `bun start` | Start the Expo dev server |
| `bun android` | Start on Android |
| `bun ios` | Start on iOS |
| `bun web` | Start on web |
| `bun run lint` | Run ESLint |
| `bun run reset-project` | Reset to a blank project |

## Typecheck & Lint

```bash
npx tsc --noEmit     # TypeScript typecheck
npx expo lint        # ESLint
```

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router docs](https://docs.expo.dev/router/introduction)
- [Redux Toolkit docs](https://redux-toolkit.js.org/)
- [React Redux docs](https://react-redux.js.org/)

## License

MIT