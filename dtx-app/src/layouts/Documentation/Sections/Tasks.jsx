import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Link } from "react-router-dom";
// core components
import Tasks from "../../../components/Tasks/Tasks.jsx";
import { bugs } from "../../../variables/general.jsx";

const codeExample = `import React from 'react';
// core components
import Tasks from "../../../components/Tasks/Tasks.jsx";
import { bugs } from "../../../variables/general.jsx";

function DemoTasks({...props}){
  return (
    <Tasks
      checkedIndexes={[0, 3]}
      tasksIndexes={[0, 1, 2, 3]}
      tasks={bugs}
    />
  );
}

export default DemoTasks;
`;
const codeProps = `Tasks.propTypes = {
  checkedIndexes: PropTypes.arrayOf(PropTypes.number),
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node)
};`;

function DemoTasks({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Tasks</h1>
      <p>
        We've created a special component to render the tasks list shown in{" "}
        <Link to="/widgets">Widgets</Link> and{" "}
        <Link to="/rtl/rtl-support-page">RTL Support</Link> <code>Task</code>{" "}
        card.
      </p>
      <p>
        If you want to understand this component better, please take a look
        inside <code>../../../../components/Tasks/Tasks.jsx</code> file.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          ../../../../assets/jss/material-dashboard-pro-react/components/tasksStyle.jsx
        </code>.
      </p>
      <h2>Example</h2>
      <Tasks checkedIndexes={[0, 3]} tasksIndexes={[0, 1, 2, 3]} tasks={bugs} />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default DemoTasks;
