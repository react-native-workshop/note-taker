# note-taker
This repo contains the code for all the chapters of the workshop. It is a simple note taking application that runs on both Android and iOS.


This is an example app created using concepts learnt from the book.



#### For Android:
In a separate tab
1. `cd <Android SDK path>/tools/ && ./emulator`
2. Start emulator `emulator @<AVD name>` - keep this running, AVD name is as created from AVD Manager

#### Running the application

`yarn ios`: Run the app on iOS

`yarn android`: Run the app on android(your simulator must be running in the background)

### Android SDK installation and configuration
- https://developer.android.com/studio/index.html download Android studio
- Steps for installation : https://developer.android.com/studio/install.html
- After installation, open Android Studio -> Preferences -> Appearance & Behavior -> System Settings -> Android SDK

In SDK Platforms tab:
Select option Show Package Details.

Then select following packages to install:
```
- android-23 (Android 6.0 -> Android SDK Platform 23)
- addon-google_apis-google-23 (Android 6.0 -> Google APIs, Android 23)
```

Switch to SDK Tools tab.
Select option Show Package Details.
Then select following packages to install:
```
- build-tools-23.0.1 (Android SDK Build-Tools -> 23.0.1)
- extra-google-google_play_services (Google Play Services)
- extra-google-m2repository (Support Repository -> Google Repository)
- extra-android-m2repository (Support Repository -> Android Support Repository)
```
Apply

#### Setup Android Emulators
1. Open Android studio
2. Open Existing Project -> Select -> Project folder -> Android
3. Tools -> Android -> AVD Manager from Menu
4. Create Virtual Device - https://developer.android.com/studio/run/managing-avds.html for reference
5. Start emulator using AVD name as created in AVD Manager


### XCODE
- Install Version 8.3.3

### Coding Practices
 - We are using `class properties + arrow function` instead of class methods and using `super(props)` syntax to define class methods. Blog [URL (in "ECMAScript 2015 classes with class properties" section)](http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/)
 - We are using Flow for static type checking. Install a compatible plugin for Flow in your editor to see errors(can use linter-flow for Atom). Also install flow-bin globally. Add `/* @flow */` to all the files you want to typecheck. Use `flow check` from command line to see complete list of issues. https://github.com/facebook/flow


### Helper NPM scripts
Before we continue any further, lets two helper scripts to our package.json

Modify the `package.json` scripts to look like this

```
{
  .....
  .....
  .....
	"scripts": {
		"start": "node node_modules/react-native/local-cli/cli.js start",
		"test": "jest",
		"ios": "react-native run-ios",
		"android": "cd android && ./gradlew clean && cd .. && react-native run-android"
	},
  .....
  .....
  .....
}
```
Here to run the app in iOS we will type `yarn ios` or `yarn run ios` from now on the command line.

Similarly, for android we will type `yarn android` or `yarn run android`.

In case of android we are doing an additional step `./gradlew clean`. This allows us to clear any build cache that android created before making an apk. This solves a lot of cache related issues in case of android during development.

`yarn start` launches the React Native Packager on port 8081.

`yarn test` runs the test and shows the coverage in terminal.

### Project directory structure


```
.
├── __tests__
│   ├── index.android.js
│   └── index.ios.js
├── app
│   ├── assets
│   ├── config
│   ├── styles
│   ├── utils
│   ├── components
│   ├── pages
│   ├── routes
│   ├── redux
│   └── index.js`
├── app.json
├── index.android.js
├── index.ios.js
├── package.json
└── yarn.lock
```

- `app/assets` - This is where all the images, videos, etc will go in.
- `app/config` - This is where configurations for the app will go in. For example your environment specific config for dev and prod ,etc.
- `app/styles` - This is where your global styles, themes and mixins will go.
- `app/utils` - This is where all the services/utility files such as http utility to make api calls, storage utility, data transformation utility,etc will go.
- `app/components` - The directory will contain all the dumb components. In short these components will only do layouting and wont contain any states or business logic inside them. All the data to these components will be passed in as props. This concept will be explained in much detail later.
- `app/pages` - This directory will hold all the smart component. Smart components are those components which contain business logic and states in them. Their job is basically to pass the props to the dumb components after all the business logic is executed.
- `app/routes` - This is where we will keep all our app's routing logic. This will contain the map between the pages(smart components) and the routes.
- `app/redux` - This will contain all our redux state management files like actions ,reducers, store config, thunks etc.
