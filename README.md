# satisfaction-input

A VueJS component to ask your users satisfaction

## How to run the project

Clone or download this repo.

### Development
First of all, you need [npm](https://www.npmjs.com/get-npm) installed.
To install all the dependencies, run

```
npm install
```

and then to serve the Vue app on your computer, run

```
npm run serve
```

### Tests and production building
To run unit tests, run:
```
npm run test:unit
```
For production building, run
```
npm run build
```

## Technologies

### Vue CLI

The project was generated with [Vue CLI](https://cli.vuejs.org/). 

### Tests

Unit test are written with [jest](https://jestjs.io/) and [vue-test-utils](https://vue-test-utils.vuejs.org/)

### vue-slider-component

This project is built with [vue-slider-component](https://github.com/NightCatSama/vue-slider-component). Since the visuals requirements of this project are quite specific, the input[type="range"] Html element didn't seem quite a fit. Indeed, its pseudoclasses behavior change a lot on each browser and the amount of time to have a consistant look and feel on every major browser would ask a lot of time. ```vue-slider-component``` comes with a solid development (more than 1300 stars on github, tests, typescript, active maintenance) and offers endless possibilities of customization.
