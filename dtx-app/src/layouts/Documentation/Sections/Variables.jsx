import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

class Variables extends React.Component {
  render() {
    return (
      <div>
        <h1>Variables</h1>
        <p>
          To make our demo pages (pages found in <code>../../../../views/*</code>) a bit
          more easy to understand and to have less code, we've created some
          special files with variables, variables which we import where we need
          them.
        </p>
        <p>
          You will find all the variables regarding the charts in{" "}
          <code>../../../../variables/charts.jsx</code> and all the rest variables
          (variables used for example in tasks page etc.) in{" "}
          <code>../../../../variables/general.jsx</code>.
        </p>
        <p>
          At the end of each of these three files you will find the exports with
          comments for you to know where each variables is used.
        </p>
        <p>To use any of these variables you need to import them like so:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { variableName } from '../../../../variables/variableFile.jsx';`}</SyntaxHighlighter>
        <p>
          Where <code>variableFile.jsx</code> is one of <code>charts.jsx</code>{" "}
          or <code>general.jsx</code> and <code>variableName</code> is a
          variable found at the end of the <code>variableFile.jsx</code>.
        </p>
      </div>
    );
  }
}

export default Variables;
