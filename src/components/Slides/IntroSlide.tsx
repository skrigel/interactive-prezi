import {
  Box,
  Deck,
  Progress,
  Heading,
  Slide,
  FlexBox,
  FullScreen,
  DefaultTemplate,
  Link,
  Text,
  TableRow,
  CodeSpan,
  UnorderedList,
  ListItem,
} from "spectacle";
import ListSlide from "./ListSlide";
import { HtmlHTMLAttributes, HTMLProps, ReactNode } from "react";
import "../../index.css";
// import { reset } from './styles/reset'

// import { stitchesTheme } from "./styles/stitches.config";
const TEXT_COLOR = "#fff";

const SourceLinkNoText = () => {
  return (
    <>
      <Link fontSize={24} href={"https://instagram.com"} color="gray">
        Hi!
      </Link>
    </>
  );
};

const WelcomePage = (
  stars: ReactNode,
  caption: HTMLProps<string>,
  caption2: HTMLProps<string>,
  title: HTMLProps<string>,
  title2: HTMLProps<string>,
  subtitle: HTMLProps<string>
) => (
  <>
    <Heading margin="0px" fontSize="h3" color="primary">
      ✨ <i>{stars}</i> ✨
    </Heading>
    <Heading margin="0px" fontSize="h2">
      {caption}
    </Heading>
    {caption2 && (
      <Heading margin="0px" fontSize={36} fontWeight={400} fontStyle={"italic"}>
        {caption2}
      </Heading>
    )}
    <Heading margin="0px 32px" color="primary" fontSize="h3">
      {title}
    </Heading>
    {title2 && (
      <Heading margin="0px 32px" color="primary" fontSize="h3">
        {title2}
      </Heading>
    )}
    {subtitle && (
      <Text margin="0px 32px" color=" gray" fontSize="42px">
        {subtitle}
      </Text>
    )}
  </>
);

const specialSlide = () => {
  return (
    <Slide>
      <Heading margin="0px" fontSize="h3" color="primary">
        ✨ <i>Problem</i> ✨
      </Heading>
      <Heading margin="0px" fontSize="h2">
        Here's more about me!
      </Heading>

      <Heading margin="200px 32px" color="primary" fontSize="h3">
        This is a title
      </Heading>
    </Slide>
  );
};

const IntroSlide = () => {
  return (
    <>
      <Slide>
        <FlexBox height="80%">
          <Heading color="primary">Welcome to my Presentation!</Heading>
        </FlexBox>

        <Link
          color="gray"
          textAlign="center"
          href="https://www.linkedin.com/in/sasha-krigel-3624052a8/"
        >
          Sasha Krigel
        </Link>
        <Text
          textAlign="center"
          fontSize="40px"
          margin="0px 30px 0px 30px"
          color="primary"
        >
          Second Year in Computer Science and Brain and Cognitive Sciences
        </Text>
      </Slide>

      <Slide>
        <Heading
          margin="40px 32px"
          fontSize="h2"
          color="primary"
          textAlign="center"
        >
          Topic:
        </Heading>
        <Heading
          margin="0px 32px"
          fontSize="h2"
          color="primary"
          textAlign="center"
        >
          Understanding similar norms with different interpretations An
          unsupervised approach
        </Heading>
      </Slide>

      <Slide>
        <Heading textAlign="left" color="primary">
          Motivation
        </Heading>
        <Box backgroundColor="white" color="black">
          <Text color="grey" fontSize="20px">
            When bridging two communities, we want to be able to reconcile
            differences in social expectations (speech norms) between them so
            that members of both communities can fruitfully engage with each
            other.
          </Text>
        </Box>
        <UnorderedList margin="0px" fontSize="24px">
          <ListItem>
            What is a speech norm?
            <ListItem color="gray" margin="0px 0px 30px 30px">
              A speech norm is a rule that defines a range of encouraged or
              discouraged behaviors for speech interests
            </ListItem>
          </ListItem>
          <ListItem>
            What role do speech norms play online?
            <ListItem color="gray" margin="0px 0px 30px 30px">
              Within the context of online communities, a speech norm defines
              social expectations for the sort of content users can post and how
              they interact with other members of the community
            </ListItem>
          </ListItem>
          <ListItem>
            Why do communities struggle to interpret other communities values?
            <ListItem margin="0px 0px 30px 30px" color="gray">
              Speech norms established within an online community tends to vary
              based on its size, demographic makeup, and interests
            </ListItem>
          </ListItem>
        </UnorderedList>
      </Slide>
    </>
  );
};

export default IntroSlide;
