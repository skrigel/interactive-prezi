// import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

import { CodePane, Slide, Deck, DefaultTemplate } from "spectacle";
import React from "react";
const CodePanel = () => (
  <CodePane language="python">
    {`
      print("Hi!")
      `}
  </CodePane>
);
export default CodePanel;
