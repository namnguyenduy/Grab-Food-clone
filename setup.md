## 1. Install `React Native Elements`

- [https://reactnativeelements.com/]

```
yarn add @rneui/themed @rneui/base
```

```
yarn add react-native-vector-icons
```

```
yarn add react-native-safe-area-context
```

## 2. Install `React Native Animatable`

- [https://github.com/oblador/react-native-animatable]

```
yarn add react-native-animatable
```

## 3. Structure folder

```
├── src
    |-- assets
    |   |-- data
    |-- screens
    |   |-- authScreens
    |      |-- SignInScreen.js
    |      |-- SignInWelcomeScreen.js
    |      |-- SignUpScreen.js
    |   |-- HomeScreen
    |   |-- SearchScreen
    |   |-- MyOrdersScreen
    |   |-- MyAccountScreen
    |   |-- RestaurantsMapScreens
    |   |-- SearchResultScreen
    |   |-- RestaurantHomeScreen
    |   |-- RestaurantTabs
    |       |-- MenuScreen.js
    |   |-- MenuTabs
    |   |-- PreferenceScreen
    |   |-- PreparingOrderScreen
    |   |-- DeliveryScreen
    |   |-- BasketScreen
    |-- components
    |   |-- Header.js
    |   |-- HomeHeader.js
    |   |-- FoodCard.js
    |   |-- DrawerContent.js
    |   |-- SearchComponent.js
    |   |-- SearchResultCard.js
    |   |-- ProductCard.js
    |   |-- RestaurantHeader.js
    |   |-- MenuCard.js
    |   |-- Categories.js
    |-- global
    |   |-- styles.js
    |-- navigation
    |   |-- appStack.js
    |   |-- authStack.js
    |   |-- RootNavigator.js
    |   |-- ClientTabs.js
    |   |-- DrawerNavigator.js
    |   |-- ClientStack.js
    |-- contexts
    |   |-- AuthContext.js
    |-- reducers
        |-- authReducers.js
    |-- features
        |-- basketSlice.js
        |-- restaurantSlice.js


```

## 4. Install `Native Wind`

- [https://www.nativewind.dev/]

1.

```
yarn add nativewind
yarn add --dev tailwindcss
```

2. Create `tailwind.config.js` by run

```
npx tailwindcss init
```

3. In `tailwind.config.js`

```
content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"]
```

4. Modify your `babel.config.js`

```
plugins: ["nativewind/babel"],
```

## 5 for ios: Install `React Native Swiper`

- [https://github.com/leecade/react-native-swiper]

```
yarn add react-native-swiper
```

## 5 for android: Install `Reactive Native Snap Carousel`

- [https://github.com/meliorence/react-native-snap-carousel]
- Fix issues when instal `Reactive Native Snap Carousel` : [https://stackoverflow.com/questions/73149910/react-native-0-69-1-i-am-facing-issue-deprecated-react-native-prop-types]
- [https://stackoverflow.com/questions/72755476/invariant-violation-viewproptypes-has-been-removed-from-react-native-migrate-t]

```
yarn add react-native-snap-carousel
```

## 6: Install `React Navigation`

```
yarn add @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
```

- `stack navigation`

```
yarn add @react-navigation/stack
npx expo install react-native-gesture-handler react-native-reanimated
npx expo install @react-native-masked-view/masked-view
```

- `tab navigation`

```
yarn add @react-navigation/bottom-tabs
```

- `drawer navigation`

```
yarn add @react-navigation/drawer
npx expo install react-native-gesture-handler react-native-reanimated

```

- add

```
  plugins: ['react-native-reanimated/plugin'],
```

in `babel.config.js`

- add

```
import "react-native-gesture-handler";
```

in the top in `App.js`

## 7: Install `React Native CountDown Component`

```
yarn add react-native-countdown-component
expo install react-native-pager-view
```

## 8: Install `React Native Tab View`

- [https://www.npmjs.com/package/react-native-tab-view]

```
yarn add react-native-tab-view
```

## 9: Install `React Native Format Currency`

- [https://www.npmjs.com/package/react-native-format-currency]

```
yarn add react-native-format-currency
```

## 10: Setup `Firebase`

### 10.1: Install `Firebase`. If you use `react native cli` install `React Native Firebase`

- [https://docs.expo.dev/guides/using-firebase/]

```
yarn add firebase
npx expo install firebase
```

- Configure metro

```
npx expo customize metro.config.js
```

- In `metro.config.js`

```
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;

```

### 10.2 In `Fire base`

#### 10.2.1

- [https://firebase.google.com/]
- B1: Go to console -> add project -> name project `grabfoodclone` -> `create project button`
- B2: Click on `web` icon if you use `expo cli`. If you use `react native cli`, you can click `android` icon
- B2.1: type an `app nickname` -> press `register app button
- B2.2: copy `firebaseConfig` and paste to `firebase.js` -> change some code in `firebase.js`

#### 10.2.2

- In tab `Authentication` -> get started -> `Email/Password` -> enable (don't need enable Email link) -> save
- In `project overview` -> click `project settings`
- - set `support email`
- - set `default gcp` (asia southeast: VN)

#### 10.2.3 Fix warning `AsyncStorage has been extracted from react-native core and will be removed in a future release`

- [https://amanhimself.dev/blog/remove-asyncstorage-has-been-extracted-warning-using-firebase/]

```
expo install @react-native-async-storage/async-storage
```

- Then change some code in firebase.js

#### 10.2.4

- In tab `Authentication` -> click `add user`

### 10.2 Setup `FireStore`

- [https://firebase.google.com/docs/firestore/quickstart]
- Fix error: @firebase/firestore: Firestore (9.14.0): Uncaught Error in snapshot listener: FirebaseError: [code=permission-denied]: Missing or insufficient permissions.
  [https://stackoverflow.com/questions/46590155/firestore-permission-denied-missing-or-insufficient-permissions]
- Click `build` -> `firestore database`
- In `data` -> click `start collection` -> pass `collection id` (name of table) -> click `auto id` -> add `field`

### 10.3 Setup `Google sign in`

- [https://firebase.google.com/docs/auth/web/google-signin]
- `Sign-in-method` -> `add new provider` -> `google` -> enable -> save

## 11: Install `formik`

- [https://formik.org/docs/overview]

```
yarn add formik
```

## 12: Install `React Native Process`

```
yarn add react-native-progress
yarn add react-native-svg
```

## 13: Install `React Native Maps`

```
yarn add react-native-maps
```

## 14: Install `Redux`

```
yarn add @reduxjs/toolkit react-redux
```
