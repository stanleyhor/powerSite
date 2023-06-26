# Tesla Power Site

This is a sample Tesla Power Site project.

## Prerequisite
- Install node (version 18 or above), npm or yarn
- You will need `serve` to serve (run) the app. You may install `serve` with this command: `yarn global add serve` or `npm install -g serve`

## Running the app
If this is the first time you run the app, please run this command first (only needed for the first time):
`npm install` or `yarn`

To start the app (use for development), please run this command:
`yarn start` or `npm start`

## Build and run the final build
To serve/run the app (as a final product), you will need to build the app, and then serve(run) the app

To build the app, please run this command:
`yarn build` or `npm run build`

Finally, serve (run) the app with this command:
`serve -s build -l 8000`

## Run test
To run jest test, please run this command: `npx jest`

## Shortcuts
After cloning the project, run `yarn`.
Then, run this command to build and start the app:
`./run.sh`

## Explore the app
To explore the app, open a browser and browse [http://localhost:8000](`http://localhost:8000`)

## Note
- This is only the UI app, an API server/service will be needed for a complete project
- All the backend services are simulated, no backend API is included in this app.
- I didn't use TypeScript. Need to brush up on my TypeScript. :)
- Checkout the master branch for the final version.
- The layout is for demo purposes, for a final product, I understand that there are some improvements needed to make the powerpacks layout more presentable.
- Special feature/s: 
  - If the number of items is more than 100, the layout of the power pack will be display with small icons, so that more powerpacks can be shown on the screen (this will reduce the scroll on the layout section).
  - Try a different version of the app by checking out the "click-to-select" branch.


## Assumptions
- Node version 18 or above is installed
- `yarn` or `npm` has been installed
- The app will be served on port 8000
- Most customers using desktop computer