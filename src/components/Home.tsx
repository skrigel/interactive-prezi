import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CodePanel from "./CodePanel";
import { Terminal, Code, Insights } from "@mui/icons-material";

// or
import { IconButton } from "@mui/material";

import "../index.css";
import { FlexBox } from "spectacle";

const iconObj: Record<string, React.ElementType> = {
  "0": Terminal,
  "1": Code,
  "2": Insights,
};

const wordObj: Record<string, string> = {
  "0": "Experience",
  "1": "Technical Skills",
  "2": "Innovation",
};

function Home() {
  const [count, setCount] = useState(0);
  const IconComponent = iconObj[(count % 3).toString()];
  const iconStr = wordObj[(count % 3).toString()];

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl">Welcome!</h1>
        <button
          className="bg-red-500 text-white p-4"
          onClick={() => setCount(count + 1)}
        >
          Click me!
          {/* <TerminalIcon></TerminalIcon> */}
        </button>

        <h1>This presentation will feature:</h1>
        <h1>
          {" "}
          {iconStr} {IconComponent && <IconComponent fontSize="large" />}
        </h1>

        {/* Render the icon dynamically */}
        <FlexBox>
          <Link to="presentation">Go to Presentation</Link>
        </FlexBox>
      </div>
    </>
  );
}

export default Home;
