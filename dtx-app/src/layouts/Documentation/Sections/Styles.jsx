import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const restyledComponents = `components
├── Accordion
│   └── Accordion.jsx
├── Cards
│   ├── ChartCard.jsx
│   ├── FullHeaderCard.jsx
│   ├── HeaderCard.jsx
│   ├── IconCard.jsx
│   ├── ImagePriceCard.jsx
│   ├── LoginCard.jsx
│   ├── PricingCard.jsx
│   ├── ProfileCard.jsx
│   ├── RegularCard.jsx
│   ├── StatsCard.jsx
│   ├── TasksCard.jsx
│   └── TestimonialCard.jsx
├── CustomButtons
│   ├── Button.jsx
│   └── IconButton.jsx
├── CustomDropdown
│   └── CustomDropdown.jsx
├── CustomInput
│   └── CustomInput.jsx
├── CustomLinearProgress
│   └── CustomLinearProgress.jsx
├── Grid
│   ├── GridContainer.jsx
│   └── GridItem.jsx
├── Header
│   ├── Header.jsx
│   ├── HeaderLinks.jsx
│   └── PagesHeader.jsx
├── NavPills
│   └── NavPills.jsx
├── Sidebar
│   └── Sidebar.jsx
├── Snackbar
│   ├── Snackbar.jsx
│   └── SnackbarContent.jsx
├── Table
│   └── Table.jsx
├── Tasks
│   └── Tasks.jsx
├── Typography
│   ├── A.jsx
│   ├── Danger.jsx
│   ├── Info.jsx
│   ├── Muted.jsx
│   ├── P.jsx
│   ├── Primary.jsx
│   ├── Quote.jsx
│   ├── Small.jsx
│   ├── Success.jsx
│   └── Warning.jsx
└── Wizard
    └── Wizard.jsx`;

class Styles extends React.Component {
  render() {
    return (
      <div>
        <h1>Styles</h1>
        <p>
          Like our friends from{" "}
          <a
            href="https://material-ui-next.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material UI
          </a>, we've used JSS syntax to style (restyle) the material ui
          components.
        </p>
        <p>
          A useful link about JSS is{" "}
          <a
            href="https://github.com/cssinjs/jss"
            target="_blank"
            rel="noopener noreferrer"
          >
            this one here
          </a>.
        </p>
        <p>
          Material UI offers you 7 ways to override their styles, and as said
          above, we've decided to go with the third option (<a
            href="https://material-ui-next.com/guides/interoperability/#react-jss"
            target="_blank"
            rel="noopener noreferrer"
          >
            this one here
          </a>).
        </p>
        <p>
          All of the restyled components can be found in{" "}
          <code>../../../../components</code>.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {restyledComponents}
        </SyntaxHighlighter>
        <p>
          If you go to any of our components you will see that somewhere at the
          beginning of the file we import <code>withStyles</code> from{" "}
          <code>material-ui</code>, then we import from{" "}
          <code>../../../../assets/jss/material-dashboard-pro-react/components</code>{" "}
          the correspondig style for that component and at the end of the file,
          we export that component's class/function with the{" "}
          <code>withStyles</code> function so that the imported style overrides
          the <code>material-ui</code> style.
        </p>
        <p>
          For a better way of understanding this variables, please take a look
          inside the <code>../../../../assets/jss/*</code>. You will see that all of the
          styles have a unique name that corresponds with the component name.
        </p>
        <p>
          Besides this styles, we have{" "}
          <code>../../../../assets/jss/material-dashboard-pro-react.jsx</code> with
          variables for styles,{" "}
          <code>../../../../assets/jss/material-dashboard-pro-react/layouts/*</code>{" "}
          used to style the <code>../../../../layouts</code> files,{" "}
          <code>../../../../assets/jss/material-dashboard-pro-react/views/*</code> used
          to style each page/view or add custom styles to our components on each
          view/page and{" "}
          <code>../../../../assets/jss/material-dashboard-pro-react/*.jsx</code> are
          styles for components that weren't extended by us, we're using them
          like material-ui, but with our styles.
        </p>
        <p>
          Beside this styles, because we've used some plugins in our demo, you
          will find some of our styles in <code>../../../../assets/scss</code>.
        </p>
      </div>
    );
  }
}

export default Styles;
