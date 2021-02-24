# exercise-react-forms
A simple App to train in react-forms

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Branch: react/forms.

Remember the form you created using "classic" JavaScript? Let's create a similar one in React, and you'll see how your skills have evolved since then!

- Create a new project using npx create-react-app my-form-2.0
- If necessary, create CSS styles for your form, according to your imagination.
- Do everything using the abstractions of React.
 
We will create a curriculum registration form based on the following specification:

1. Create a `<fieldset>` for the following personal data:
- Name - Text
  - 40 character limit
  - All characters must be transformed to UPPER CASE as soon as they are entered.
  - Required field

- Email - Text
  - 50 character limit
  - Required field

- CPF - Text
  - 11 character limit
  - Required field

- Address - Text
  - 200 character limit
  - Remove any special characters that are typed
  - Required field

- City - Text
  - 28 character limit
  - When removing the focus from that field (onBlur event), check if the city name starts with numbers. If you start, clear the field.
  - Required field.

- Status - ComboBox
  - All States of Brazil
  - Required field.

- Type - Radio Button
  - House, Apartment
  - Required field.

2. Create another `<fieldset>` for data from your last job:

- Resume Summary - TextArea
  - 1000 character limit
  - Required field.

- Cargo - TextArea
  - 40 character limit
  - When the mouse passes over this field (event onMouseEnter), display an alert saying 'Please fill this information carefully.'. Display this message only once.
  - Required field

- Job description - Text
  - 500 character limit
  - Required field

3. Create a button that, when clicked, assembles a `<div>` with the consolidated data that were inserted in the form.

4. Create a Clear button that clears all fields on the form and the `<div>` with your resume as well.

###### Finally, go to the form you created in the HTML & CSS - Forms class and see the differences in the code.

#### Bonus
- Use regex to validate the email field.
  - The expected format is: trybe@gmail.com.
##### **Tip: To study how the regex works, use the link**

---

# About REACT

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
