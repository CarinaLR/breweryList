# Breweries List Implementation

Challenge - andculture.

Build a single page application using `React` to display a list of breweries with the ability to click on an item from the list to view more details on that brewery.

Features:
`List of breweries`, build a component that displays a list of breweries in a US city.
`Single brewery`, build a component that displays the details of a brewery.

This project is based on OpenBreweryDB API. (https://www.openbrewerydb.org/)

Built with `JavaScript`/ `ReactJS` / `React-Hooks`/ `Axios`/ `OpenBreweryDB API`/ `Google Maps`/`Bootstrap4` / `Sass`.

# Google Maps integration

`Google Maps` map indicating the brewery’s location using latitude and longitude.
Requirements: `Google Maps API key` and `google-map-react` package.

## Environment

- `git clone` with this repo url to get the code in the local machine
- `npm install` activates the environment and installs all dependencies used
- `cd client` to switch to the correct module and start using the app

## Available Scripts

### `npm start`

to view it in the browser.

# Getting Started with Create React App

- `npx create-react-app my app` no need to install or configure webpack or Babel, npx is pre-bundled with npm.
- `git init` initalizes an empty repository.
- `npm install axios` promise-based HTTP client for the browser and node.js, request data from URL provided.
- `npm install dotenv` to protect all sensitive keys and load variables from the .env file with process.env.
- `npm install --save google-map-react`allows you to render Google Map with latitude and longitude.
- `npm install bootstrap@4` framework for building responsive, mobile-first sites
- `npm install -g sass` alternative `npm install node-sass` preprocessor that help you write robust, maintainable CSS.
- `localhost 3000` port that supports our frontend.

```
# client -contains all the frontend modules, here we store all client-side modules, needed to connect to fetch our data from the api and display it to the DOM.
# src folder -the core of the frontend structure connects and renders our components and hooks.
# Hooks folder -contains useList and useSingleBrewery custom hooks, need it to set state using in our components, in a modular reusing way.
# Layout folder -contains Layout.js, List.js, SingleBrewery.js, and Gmap.js which are our components used to fetch the data required to render all the information and google maps on our client-side. Implementing functional components and utilizing react hooks.
# App.js -Wraps the Layout component, which at the same time wraps the List and SingleBrewery components allowing them to render in the application.
# src folder -contains ` assets` folder which contains all images using in the application and readme file.

React Hooks allows to break down the logic. Allows to reuse the component, and bringing in that logic to other components, providing stateless components which means, having a functional component.

```

## Breweries List Page.

![](/client/src/assets/home_page_top&scroll.png)

## Single Brewery, integrating Google Maps.

![](/client/src/assets/single_brewery_top&scroll.png)

## Responsive design.

![](/client/src/assets/responsive_design_allPages.png)
