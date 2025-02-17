import React from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import IntroSlides from "./Slides/IntroSlide";
import motivatingImg from "../assets/motivatingExample.png";
import {
  DefaultTemplate,
  Slide,
  FlexBox,
  Appear,
  MarkdownSlide,
  //   FitText,
  CodeSpan,
  Text,
  Heading,
  SpectacleLogo,
  Progress,
  FullScreen,
  CodePane,
  Box,
  ListItem,
  Deck,
  SlideLayout,
  SpectacleTheme,
  Image,
  OrderedList,
  UnorderedList,
} from "spectacle";
import ListSlide from "./Slides/ListSlide";
import CodingSlide from "./Slides/CodeSLide";
import ProcessSlides from "./Slides/ProcessSlides";
const SLIDE_BG_COLOR = "#edf2fb";
const HEADER_COLOR = "#2f3e46";
const HEADER_SIZE = "36px";
const TEXT_COLOR = "#fff";
const TEXT_HILGHLIGHT_COLOR = "#5fa8d3";

const theme = {
  fonts: {
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    color: TEXT_COLOR,
  },
};
// import { reset } from "./styles/reset";

// import { stitchesTheme } from "./styles/stitches.config";

// import S1 from './slides/1'
// import S2 from './slides/2'
// import S3 from './slides/3'
// import S4 from './slides/4'

// reset()

const CustomTemplate = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box px={4}>
      <FullScreen color="white" size={40} />
    </Box>
    <Box padding={4}>
      <Progress color="white" size={20} />
    </Box>
  </FlexBox>
);

const quote = SlideLayout.Quote;

// const theme = createTheme({
//     primary: "#4f4f4f",
//     secondary: "#fff"
//   });

const Presentation = () => (
  <div>
    <Deck theme={theme} template={() => <CustomTemplate />}>
      <IntroSlides></IntroSlides>

      <ProcessSlides></ProcessSlides>
      {/* <ListSlide></ListSlide> */}
      <CodingSlide></CodingSlide>
    </Deck>
  </div>
);

export default Presentation;
