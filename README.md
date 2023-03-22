# Challenge - Olio App 🌱

Evaluate general front end development skills and capabilities.

| <img width="413" alt="Screen Shot 2022-01-05 at 23 14 01" src="https://user-images.githubusercontent.com/13490305/226493820-cc754253-1916-4799-abda-5a2d5e483c00.png"> | <img width="414" alt="Screen Shot 2022-01-05 at 23 14 26" src="https://user-images.githubusercontent.com/13490305/226493900-6e80349b-435c-40cd-a472-12a6ee655dd4.png"> | <img width="415" alt="Screen Shot 2022-01-05 at 23 15 46" src="https://user-images.githubusercontent.com/13490305/226494766-f4b468f8-97eb-4b3b-863b-42b224d0d4ac.png"> |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="413" alt="Screen Shot 2022-01-05 at 23 14 01" src="https://user-images.githubusercontent.com/13490305/226494260-7d4d8197-1d50-4e5f-8893-c586c5773d48.png"> | <img width="414" alt="Screen Shot 2022-01-05 at 23 14 26" src="https://user-images.githubusercontent.com/13490305/226583810-884dc00b-d961-4d86-bddb-7433417b8dc1.png"> | <img width="415" alt="Screen Shot 2022-01-05 at 23 15 46" src="https://user-images.githubusercontent.com/13490305/226494474-f0336603-a556-428c-9d06-8248c1751fdf.png"> |

### Summary

- [Architecture](#architecture)
- [Built With](#built-with)
- [Installation](#installation)
- [Points of Improvement and Comments](#points-of-improvement-and-comments)
- [Author](#author)

## Architecture

    .
    ├── ...
    ├── src
    │   ├── components          # Page components
    │   ├── routes              # React navigation
    │   │   ├── BottomTabs      # Bottom menu router
    │   │   └── Stack           # Stack router
    │   ├── screens             # Project screens
    │   │   ├── Home
    │   │   ├── LocationMap
    │   │   └── ProductDetails
    │   ├── store               # Redux, store, hooks
    │   │   ├── articles
    │   │   ├── hooks
    │   │   └── visited
    │   ├── utils               # Utility functions
    │   └── App.js              # App Loader
    └── ...

## Built With

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- [Node.js 19.8.1](https://nodejs.org/en/)
- [Styled Components](https://styled-components.com/docs/api)
- [TypeScript](https://www.typescriptlang.org/)
- [Date-fns](https://date-fns.org/)
- [Redux](https://redux.js.org/)

## Installation

1 - First of all clone this repo to your local machine using:

```shell
git clone https://github.com/anaarezo/olio-app-challenge.git
```

2 - Run npm to install the required packages:

```shell
npm install
```

3 - First access the folder `/ios` and run the pod installation.

```shell
pod install
```

4 - To open the project use xCode
<img src="https://user-images.githubusercontent.com/13490305/226761973-d6b59506-3c1c-4bd2-aa05-a40a64a48678.png" width="100px" />

5 - Open the project workspace using xCode `ios/OlioApp.xcworkspace`
<img width="161" alt="Untitled" src="https://user-images.githubusercontent.com/13490305/226764683-58a92fdb-bf92-4c27-b980-cbafae526fb7.png">

6 - Click on play icon (circled in red) to run the project as the image below:
<img width="961" alt="Untitled-2" src="https://user-images.githubusercontent.com/13490305/226766017-6b935e2d-d013-448f-b799-011013678a9b.png">

# Points of Improvement and Comments

- As there was no recent information I decided to leave the date exposed instead of label `just added`
- I'm having trouble getting it to run Android Studio on my Macbook and I ended up doing tests only using xCode.
- In order not to take too long to develop, I ended up choosing to focus on the development of the App on iOS.
- The Request button does not go to another screen, I prefer to focus on developing the main screens based on API data.
- I would improve the map information by getting the grouped item numbers and also the Icon.
- Should start the unit tests as TDD, but I ended up leaving it for the end. These made it more complex to resolve the failures.
- Could make an accessible layout focused on WCAG if it was the project.
- Isolate environment variables, such as API URL using env.
- I ended up separating the tests only into components to make testing the rendering simpler than testing large screens. It also contributes to maintainability and to discover possible failitures.
- As I tried to make the app work fast, I ended up not focusing so much on the layout colors that should be gray and not white. I chose to focus on the functionalities working as correctly as possible, according to the limited time.
- The `allergy` link does not redirect to a WebView or external link. I just put it as a layout item.
- The folder structure of screen components could be modified according to domain(screen), in this case I chose to build reusable components.
- I decided at the last minute to make a reusable component with ProductCard to make it easier instead of ["Rule of Three" (code duplication)](https://wou.edu/las/cs/csclasses/cs161/Lectures/rulesofthumb.html)
- Some items on the page could be better styled, due to the time limit I ended up not focusing on this part, like BottomTabs, for example.
- The colour codes could have been part of a theme file instead of being scattered throughout the code and hardcoded.
- The pink flags over the product photos are representing a visited product.

## Author

Ana Laura Arezo

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anaarezo//)](https://www.linkedin.com/in/anaarezo/)
[![Whatsapp Badge](https://img.shields.io/badge/-Whatsapp-4CA143?style=flat-square&labelColor=4CA143&logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send?phone=447423393211&text=Hello!)](https://api.whatsapp.com/send?phone=447423393211&text=Hello!)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:laura.arezo@gmail.com)](mailto:laura.arezo@gmail.com)

💡 Feel free to contact me if you have difficulties running the project or to clarify informations about architecture and functionalities in general.

#### 😃 Thank you Olio!
