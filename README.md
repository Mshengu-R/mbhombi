# Mbhombi Financial Services Mobile

Readable React Native mobile application built with Expo Router, TypeScript and NativeWind. It preserves the supplied authentication, dashboard, bank, account creation, messages, profile and About Us logic.

## Requirements

- Current Node.js LTS
- Android Studio emulator, iOS Simulator, or a physical device
- Backend/API gateway on port 8080

## Install

```bash
npm install
npx expo install --fix
cp .env.example .env
```

`expo install --fix` aligns native package versions to the installed Expo SDK. Do not manually copy `node_modules` from another project.

## API address

Android emulator uses the host alias:

```env
EXPO_PUBLIC_API_BASE_URL=http://10.0.2.2:8080
```

iOS Simulator commonly uses:

```env
EXPO_PUBLIC_API_BASE_URL=http://127.0.0.1:8080
```

A physical phone must use your computer's LAN address, for example:

```env
EXPO_PUBLIC_API_BASE_URL=http://192.168.1.10:8080
```

The phone and backend machine must be reachable on the same network. Use HTTPS in production.

## Run

```bash
npx expo start --clear
```

Then press `a` for Android, `i` for iOS, or scan the QR code. If Expo Go cannot load a native dependency, create a development build:

```bash
npx expo run:android
npx expo run:ios
```

## Backend endpoints

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/logout`
- `GET /api/v1/accounts`
- `POST /api/v1/accounts/`
- `GET /api/v1/profiles/me`
- `PUT /api/v1/profiles/me`
- `DELETE /api/v1/profiles/me`

The JWT is stored with Expo SecureStore. Every protected request adds `Authorization: Bearer <JWT>`. A 401 removes the stored token. Passwords, PINs and JWTs are never logged.

Messages remains protected but does not invent an endpoint. Connect it only when a real REST, WebSocket, SSE or push-notification contract exists.

## NativeWind

NativeWind v4 stable configuration is included:

- `tailwind.config.js`
- `babel.config.js`
- `metro.config.js`
- `global.css`
- `nativewind-env.d.ts`

If styles do not appear, stop Metro and run `npx expo start --clear`.

## Validate

```bash
npx expo-doctor
npm run typecheck
npm run lint
npx expo export --platform android
```

## API assumptions to verify

- Login returns either a plain JWT string or `{ "token": "..." }`.
- Account list returns an array, `{ "accounts": [] }`, or `{ "content": [] }`.
- Profile update uses PUT and profile deletion uses DELETE on `/me`.
- Signup enum values exactly match Java enums, including `PROFF` if that spelling is intentional.
- Account creation requires the trailing slash.

See `docs/BUSINESS_ICONS.md` for icon mappings.
