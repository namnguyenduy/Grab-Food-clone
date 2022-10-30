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
        |-- authScreens
            |-- SignInScreen.js
    |-- components
    |    |-- Header.js
    |-- global
        |-- styles.js

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
