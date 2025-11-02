This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Install Libraries

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm install

# Using yarn
yarn
```

## Step 2: Build and install the app on emulator/phone

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app. Also, whenever a new library/configuration is added, run this command to build and reinstall the app on emulator/phone:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Start Metro server

Run the below command and make changes as required and reload.
```sh
npm run start
```

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## Configurations and library versions

Java Development Kit installed using sdk man. http://sdkman.io/install/

- Node version: 24.11.0
- NPM version: 11.6.1
- Java Version: IBM Semeru Runtime Open Edition 17.0.17.0

## Notes: Android emulator

Enable usb debugging, and wireless debugging on your mobile. Make sure the dev environment and mobile are on the same network if using wireless debugging.

To check phone/emulator connection status:
- adb devices

Connect device via USB:
- adb reverse tcp:8081 tcp:8081

Connect device via WiFi:
- adb connect 192.168.1.<Go to About phone in phone settings - ip address>:5555 (Connects dev env to phone)
- hostname -I (Get ip address of dev env)
- adb shell input keyevent 82 (Opens dev menu in debug app) or alternatively press 'd' in npm run start
- Go to settings -> Debug server host & port for device
- Enter ip address of dev env, 192.168.1.<ip address of dev env>:8081

To add app icon in relevant android/ios locations from a given png:
- Package used: @bam.tech/react-native-make
- npx react-native set-icon --path ./assets/icon.png

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
a