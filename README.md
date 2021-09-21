# Spacestagram

This project was made for the Shopify Winter 2022 Frontend Internship challenge. [Description](https://docs.google.com/document/d/1QlC6htA5SXEl3YruAOkJWj2-0W3w-n0UOzGuJ1EcktQ/)

## Design Choice

I decided to make a very simple looking webpage using React, that kept a space-like theme. I made heavy use of [MaterialUI](https://mui.com/) for visually appealing and functional React components. To cut down on load time, I instead make use of a 'view more' button to load 5 more images at a time, allowing for a more responsive feel. Alternatively, the user can choose to select a date and view all images from that date to the present. If the user selects an invalid date, it will simply default to loading random images. Due to using asynchronous functions when loading images, the user also gets visual feedback in the form of a loading icon while pictures are being loaded. Users also have the ability to like and un-like images, using the heart icon beside the image name. 

## Limitations

If I had more time, I would have liked to enable a backend as well. This would allow me to create an easier way to keep track of user likes between sessions, as well as, give users a way to filter by liked images. Furthermore, I would have liked to allow a user to select an image to view it's description and some more information about it. Ultimately though, these features would not be difficult to add, given my current code architecture. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
