
# react-native-permission-hooks 🎣

## Getting started

`$ npm install react-native-permission-hooks --save`

### Mostly automatic installation

`$ react-native link react-native-permission-hooks`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-permission-hooks` and add `RNPermissionHooks.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNPermissionHooks.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNPermissionHooksPackage;` to the imports at the top of the file
  - Add `new RNPermissionHooksPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-permission-hooks'
  	project(':react-native-permission-hooks').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-permission-hooks/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-permission-hooks')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNPermissionHooks.sln` in `node_modules/react-native-permission-hooks/windows/RNPermissionHooks.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Permission.Hooks.RNPermissionHooks;` to the usings at the top of the file
  - Add `new RNPermissionHooksPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNPermissionHooks from 'react-native-permission-hooks';

// TODO: What to do with the module?
RNPermissionHooks;
```
  
