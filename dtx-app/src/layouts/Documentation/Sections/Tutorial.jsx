/*eslint-disable*/
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const files = `material-dashboard-pro-react
│
├── CHANGELOG.md
├── README.md
├── documentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   └── tutorial-components.html
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── img
    │   │   ├── faces
    │   │   ├── flags
    │   │   └── logo-white.svg
    │   ├── jss
    │   │   ├── material-dashboard-pro-react
    │   │   │   ├── components
    │   │   │   ├── layouts
    │   │   │   └── views
    │   │   └── material-dashboard-pro-react.jsx
    │   └── scss
    │       ├── material-dashboard-pro-react
    │       │   ├── mixins
    │       │   └── plugins
    │       └── material-dashboard-pro-react.scss
    ├── components
    │   ├── Accordion
    │   │   └── Accordion.jsx
    │   ├── Badge
    │   │   └── Badge.jsx
    │   ├── Card
    │   │   ├── Card.jsx
    │   │   ├── CardAvatar.jsx
    │   │   ├── CardBody.jsx
    │   │   ├── CardFooter.jsx
    │   │   ├── CardHeader.jsx
    │   │   ├── CardIcon.jsx
    │   │   └── CardText.jsx
    │   ├── Clearfix
    │   │   └── Clearfix.jsx
    │   ├── CustomButtons
    │   │   └── Button.jsx
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.jsx
    │   ├── CustomInput
    │   │   └── CustomInput.jsx
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.jsx
    │   ├── CustomTabs
    │   │   └── CustomTabs.jsx
    │   ├── CustomUpload
    │   │   ├── ImageUpload.jsx
    │   │   └── PictureUpload.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Grid
    │   │   ├── GridContainer.jsx
    │   │   └── GridItem.jsx
    │   ├── Header
    │   │   ├── Header.jsx
    │   │   ├── HeaderLinks.jsx
    │   │   └── PagesHeader.jsx
    │   ├── Heading
    │   │   └── Heading.jsx
    │   ├── InfoArea
    │   │   └── InfoArea.jsx
    │   ├── Instruction
    │   │   └── Instruction.jsx
    │   ├── NavPills
    │   │   └── NavPills.jsx
    │   ├── Pagination
    │   │   └── Pagination.jsx
    │   ├── Sidebar
    │   │   └── Sidebar.jsx
    │   ├── Snackbar
    │   │   ├── Snackbar.jsx
    │   │   └── SnackbarContent.jsx
    │   ├── Table
    │   │   └── Table.jsx
    │   ├── Tasks
    │   │   └── Tasks.jsx
    │   ├── Timeline
    │   │   └── Timeline.jsx
    │   ├── Typography
    │   │   ├── Danger.jsx
    │   │   ├── Info.jsx
    │   │   ├── Muted.jsx
    │   │   ├── Primary.jsx
    │   │   ├── Quote.jsx
    │   │   ├── Success.jsx
    │   │   └── Warning.jsx
    │   └── Wizard
    │       └── Wizard.jsx
    ├── index.js
    ├── layouts
    │   ├── Dashboard.jsx
    │   ├── Pages.jsx
    │   └── RTL.jsx
    ├── routes
    │   ├── dashboard.jsx
    │   ├── index.jsx
    │   ├── pages.jsx
    │   └── rtl.jsx
    ├── variables
    │   ├── charts.jsx
    │   └── general.jsx
    └── views
        ├── Calendar
        │   └── Calendar.jsx
        ├── Charts
        │   └── Charts.jsx
        ├── Components
        │   ├── Buttons.jsx
        │   ├── GridSystem.jsx
        │   ├── Icons.jsx
        │   ├── Notifications.jsx
        │   ├── Panels.jsx
        │   ├── SweetAlert.jsx
        │   └── Typography.jsx
        ├── Dashboard
        │   └── Dashboard.jsx
        ├── Forms
        │   ├── ExtendedForms.jsx
        │   ├── RegularForms.jsx
        │   ├── ValidationForms.jsx
        │   ├── Wizard.jsx
        │   └── WizardSteps
        │       ├── Step1.jsx
        │       ├── Step2.jsx
        │       └── Step3.jsx
        ├── Maps
        │   ├── FullScreenMap.jsx
        │   ├── GoogleMaps.jsx
        │   └── VectorMap.jsx
        ├── Pages
        │   ├── LockScreenPage.jsx
        │   ├── LoginPage.jsx
        │   ├── PricingPage.jsx
        │   ├── RTLSupport.jsx
        │   ├── RegisterPage.jsx
        │   ├── Timeline.jsx
        │   └── UserProfile.jsx
        ├── Tables
        │   ├── ExtendedTables.jsx
        │   ├── ReactTables.jsx
        │   └── RegularTables.jsx
        └── Widgets
            └── Widgets.jsx`;

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <h1>Tutorial</h1>
        <h2>License</h2>
        {
          // eslint-disable-next-line
        }
        <p>
          Copyright (c) 2017{" "}
          <a href="https://creative-tim.com/" target="_blank">
            Creative Tim
          </a>.
        </p>
        <p>
          {
            // eslint-disable-next-line
          }When you purchase an item from{" "}
          <a href="https://www.creative-tim.com/" target="_blank">
            Creative Tim
          </a>, you are actually purchasing a license to use that item. All our
          free items are under MIT license. All our premium items are covered by
          our Personal and Developer licenses. In order to understand the rights
          and restrictions that come with your purchase, please read the details
          from our{" "}
          {
            // eslint-disable-next-line
          }
          <a
            href="https://www.creative-tim.com/license?ref=license-page-material-dashboard-pro-react"
            target="_blank"
          >
            Official License Page
          </a>.
        </p>
        <h2>Getting started</h2>
        <p>
          <b>Material Dashboard Pro React</b> is built on top of{" "}
          {
            // eslint-disable-next-line
          }
          <a href="https://material-ui-next.com/" target="_blank">
            Material UI
          </a>{" "}
          using{" "}
          <a
            href="https://github.com/facebook/create-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            create-react-app
          </a>{" "}
          and does not support <code>TypeScript as of moment</code>.
        </p>
        <p>
          You can convert our theme to TypeScript support by <a href="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/14" target="_blank" rel="noopener noreferrer">reading this thread</a>.
        </p>
        <h3>Local Development</h3>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeJs Official Page
            </a>
          </li>
          {
            // eslint-disable-next-line
          }
          <li>
            Go to{" "}
            <a href="https://www.creative-tim.com/" target="_blank">
              creative tim website
            </a>{" "}
            and login into your account
          </li>
          {
            // eslint-disable-next-line
          }
          <li>
            Go to{" "}
            <a href="https://www.creative-tim.com/downloads" target="_blank">
              downloads
            </a>{" "}
            section on creative tim website (be sure to be logged into your
            account) - after you've bought the theme
          </li>
          <li>
            Press the download button near <b>Material Dashboard Pro React</b>{" "}
            product (this will download onto your computer a zip file)
          </li>
          <li>Unzip the downloaded file to a folder in your computer</li>
          <li>Open Terminal</li>
          <li>Go to your file project (where you've unzipped the product)</li>
          <li>
            Run in terminal{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install`}</SyntaxHighlighter>
          </li>
          <li>
            Then run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm start`}</SyntaxHighlighter>
          </li>
          <li>
            Alternatively you can run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm run install:clean`}</SyntaxHighlighter>{" "}
            which will delete <code>node_modules</code>,{" "}
            <code>package-lock.json</code>, automatically run{" "}
            <code>install</code> script and <code>start</code> script
          </li>
          <li>
            <div>
              If you have an error something containing
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`Module not found`}</SyntaxHighlighter>
              You should check if in your root project folder you have a file
              named <code>.env</code>.
              <br />
              If you do not have it, then create it and add this line in it:{" "}
              <code>NODE_PATH=./src</code>
              <br />
              If that does not work, you need to do the following
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`npm install --g cross-env`}</SyntaxHighlighter>
              then change the <code>script</code> inside{" "}
              <code>package.json</code> by adding <code>NODE_PATH=./src</code>{" "}
              inside it. For example, the start script would be changed from
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`"start": "react-scripts start",`}</SyntaxHighlighter>
              to
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`"start": "NODE_PATH=./src react-scripts start",`}</SyntaxHighlighter>
            </div>
          </li>
          <li>
            <div>
              <p>
                If you have an error about{" "}
                <code>props.history is undefined</code>, than you're probably
                not sending inside the <code>Sidebar</code> and/or{" "}
                <code>Header</code> component the props that come from the
                routes (See <code>src/layouts/Dashboard.jsx</code>, where{" "}
                <code>Sidebar</code> and <code>Header</code> are rendered - we
                pass the <code>{`{...rest}`}</code> to them).
              </p>
              <p>
                You can also read more about{" "}
                <a
                  href="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this issue here
                </a>.
              </p>
            </div>
          </li>
          <li>
            (Optional) You can create a new react application like this
            <ul>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm install -g create-react-app`}</SyntaxHighlighter>
              </li>
              <li>Go to the folder where you want to create your app</li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`create-react-app your-app-name`}</SyntaxHighlighter>
              </li>
              <li>
                Navigate to <code>your-app-name</code>
              </li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm start`}</SyntaxHighlighter>
              </li>
              <li>
                More information →{" "}
                <a
                  href="https://github.com/facebookincubator/create-react-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  create-react-app
                </a>
              </li>
            </ul>
          </li>
          <li>
            Navigate to{" "}
            <a
              href="https://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://localhost:3000
            </a>
          </li>
          <li>
            More information →{" "}
            <a
              href="https://reactjs.org/docs/installation.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              react
            </a>
          </li>
        </ul>
        <h3>Live Production</h3>
        <ul>
          <li>
            <a
              href="https://blog.heroku.com/deploying-react-with-zero-configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              tutorial for deploying on heroku
            </a>
          </li>
          <li>
            <a
              href="https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089"
              target="_blank"
              rel="noopener noreferrer"
            >
              tutorial for deploying on github pages and surge
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af"
              target="_blank"
              rel="noopener noreferrer"
            >
              tutorial for deploying on S3 and CloudFront
            </a>
          </li>
        </ul>
        {/* <h2>Google Maps API key</h2>
                <p>Follow these steps to get an API key:</p>
                <ul>
                    <li>Go to the <a href="https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true&pli=1" target="_blank" rel="noopener noreferrer">Google API Console</a>.</li>
                    <li>Create or select a project.</li>
                    <li>Click Continue to enable the API and any related services.</li>
                    <li>On the Credentials page, get an API key.</li>
                    <li>Note: If you have an existing unrestricted API key, or a key with browser restrictions, you may use that key.</li>
                    <li>From the dialog displaying the API key, select Restrict key to set a browser restriction on the API key.</li>
                    <li>In the Key restriction section, select HTTP referrers (web sites), then follow the on-screen instructions to set referrers.</li>
                    <li>(Optional) Enable billing. See <a href="https://developers.google.com/maps/documentation/javascript/usage" target="_blank" rel="noopener noreferrer">Usage Limits</a> for more information.</li>
                </ul>
                <p>After these steps navigate in your project to <code>views/Maps/Maps.jsx</code> and replace the <code>YOUR_KEY_HERE</code>, from line 29, with the given <code>API KEY</code>.</p>
                <p>For more information regarding google maps API KEY navigate to this <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer">link</a>.</p> */}
        <h2>Files and Folders structure</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {files}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Tutorial;
