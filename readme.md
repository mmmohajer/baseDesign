This repository is designed in order to develop basic components and create useful sass styles to be used in other react projects.
<br>
To initiate the project on your machine, you need to take the following steps:

1. Run `git clone https://github.com/mmmohajer/baseDesign.git`
2. Run `npm install`
3. Run `npm run dev`

<br>

To collaborate on this repository you need to make a request from the owner of this repository (https://github.com/mmmohajer) and then you need to push your changes into a new branch and create pull request.

<br>

Some important instructions:

1. In order to develop, a new componet, you must create it in the components folder, and then test it in App.js file.
2. For styling components, we are using sass and modular css. So, for general styling, css codes which are common between several components, you need to add your classes and css codes into the styles folder inside the assets folder. However, for css codes specifc to one component, you need to add it into the COMPONENT_NAME.module.scss. We also use cx function for combining multiple classes. (Please, have a look at the sample code written in App.js file.)
