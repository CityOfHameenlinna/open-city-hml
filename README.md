# Open City Hämeenlinna

Open City Hämeenlinna is a React Native application derived from the [`open-city-skeleton` repository](https://github.com/6aika/open-city-skeleton).
The application uses [`open-city-hml-modules` repository](https://github.com/CityOfHameenlinna/open-city-hml-modules), which contains modules that implement some specific functionality and can be installed to a derivate app.

Open City Hämeenlinna has been developed using:

`"react": "16.7.0"`

`"react-native": "0.57.1"`

## Functionalities
- Modules
  - Splash Screen
  - TavastiaEvents event list
  - RSS Reader
  - Library Card
  - Web Views for external services

### Configuration
Used modules and screens can be modified in [`src/modules/DrawerNavigator/index.js`](../master/src/modules/DrawerNavigator/index.js).

### Theming and UI customization
In [`src/config/colors.js`](../master/src/config/colors.js) change the `max, med, min` values of the `colors` object.

More colors can also be added to the object to be used in custom components and modules.

### Modules Configuration
To configurate open-city-hml-modules, check the documentation for each module found in the [`open-city-hml-modules` repository](https://github.com/CityOfHameenlinna/open-city-hml-modules).

## Installation
Pre-install requirements:
- React Native development environment https://facebook.github.io/react-native/docs/getting-started.html
- Android SDK Build-Tools version `27.0.3`
- Android emulator or a physical device running Android 4.1.2 or higher

Install steps:
- Clone the repository i.e with Git using `git clone https://github.com/CityOfHameenlinna/open-city-hml.git`
- Run `npm install` in the root of the project folder
- Run the project with `react-native run-android`
