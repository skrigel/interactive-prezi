import React from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import IntroSlide from "./Slides/IntroSlide";
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

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

const Presentation = () => (
  <div>
    <Deck theme={theme} template={() => <CustomTemplate />}>
      <IntroSlide></IntroSlide>

      <Slide>
        <Box px={4}>
          <Heading>Motivating Example</Heading>
          <Box margin="40px" backgroundColor="white">
            <FlexBox>
              <Image margin="0px" src={motivatingImg}></Image>
            </FlexBox>
            <Text
              color="secondary"
              style={{
                textTransform: "uppercase",
                fontFamily: "Comic Sans MS",
              }}
            >
              This is funky text
            </Text>
          </Box>
        </Box>
      </Slide>

      <MarkdownSlide componentProps={{ color: "yellow" }}>
        {`
        # This is a Markdown Slide

        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
      </MarkdownSlide>
      <MarkdownSlide animateListItems>
        {`
       # This is also a Markdown Slide

       It uses the \`animateListItems\` prop.

       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
      </MarkdownSlide>
      <Slide>
        <Heading>Experimental Context</Heading>
        <UnorderedList fontSize="24px">
          <ListItem>
            Introducing Odessa: a social network set to bridge communities by
            offering members greater control in setting norms for discussions
            and moderating content.
          </ListItem>

          <ListItem>
            As part of Odessa, we want to leverage LLMs to:
            <Box margin="0px 30px">
              <ListItem>
                Surface differences of norms among communities
              </ListItem>
              <ListItem>
                {" "}
                Reconcile norms from two different communities
              </ListItem>
              <ListItem>
                Flag comments or posts that violate established norms
              </ListItem>
            </Box>
          </ListItem>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>General Overview of Method</Heading>
        <OrderedList fontSize="20px">
          <ListItem>
            {" "}
            Iteratively update a single prompt requesting the LLM perform the
            task defined on the previous slide
          </ListItem>
          <ListItem>
            Design evaluation metrics to assess the quality of LLM output
          </ListItem>
          <ListItem>
            Generate a pipeline through which to run repeated simulations of the
            prompt, collect output, and evaluate LLM responses
          </ListItem>
        </OrderedList>

        <Text>
          Data: dataset comprised of moderated comments collected from reddit
          forums
        </Text>
        {/**add slide to upload image */}
      </Slide>

      <Slide>
        <Heading>LOOK!</Heading>
      </Slide>

      <Slide>
        <Heading margin="0px" fontSize="h3" color="primary">
          <b>How did I break decompose this problem into actionable tasks?</b>
        </Heading>
      </Slide>

      <Slide>
        <Box px={4}>
          <Heading>this is some code</Heading>
          <CodePane
            highlightRanges={[
              [1, 3],
              [5, 7],
            ]}
            language="tsx"
          >
            {`
            type Props = {
              label: string
            }

            function SomeComponent({label}: Props) {
              return <p>{label}</p>
            }
          `}
          </CodePane>
        </Box>
      </Slide>
      <ListSlide></ListSlide>
      <CodingSlide></CodingSlide>
    </Deck>
  </div>
);

export default Presentation;
