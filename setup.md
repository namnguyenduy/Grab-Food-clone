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
    |-- screens
    |   |-- authScreens
    |      |-- SignInScreen.js
    |      |-- SignInWelcomeScreen.js
    |-- components
    |   |-- Header.js
    |-- global
    |   |-- styles.js
    |-- navigation
        |-- authNavigators.js
        |-- RootNavigator.js

```

## 4. Install `Native Wind`

- [https://www.nativewind.dev/]

1.

```
yarn add nativewind
yarn add --dev tailwindcss
```

- 2. create `tailwind.config.js` by run

```
npx tailwindcss init
```

-

3. In `tailwind.config.js`

```
content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"]
```

4. Modify your `babel.config.js`

```
plugins: ["nativewind/babel"],
```

## 5: Install `React Native Swiper`

- [https://github.com/leecade/react-native-swiper]

```
yarn add react-native-swiper
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
