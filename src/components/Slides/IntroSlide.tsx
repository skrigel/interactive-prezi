import {
  Box,
  Deck,
  Progress,
  Heading,
  Slide,
  Image,
  FlexBox,
  FullScreen,
  DefaultTemplate,
  Link,
  Text,
  TableRow,
  Notes,
  CodeSpan,
  UnorderedList,
  OrderedList,
  Appear,
  ListItem,
} from "spectacle";
import ListSlide from "./ListSlide";
import { HtmlHTMLAttributes, HTMLProps, ReactNode } from "react";
import "../../index.css";
import motivatingImg from "../../assets/motivatingExample.png";

import { Icon, IconButton } from "@mui/material";
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

const IntroSlides = () => {
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
          My approach to solving technical problems and evaluating solutions
        </Heading>
        <Appear priority={1}>
          <Text textAlign="center">
            Demonstrated through research experiences here at MIT
          </Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading textAlign="left" color="primary">
          Background
        </Heading>
        <Box backgroundColor="white" marginBottom="40px" color="black">
          <Text color="grey" fontSize="20px">
            I began my research at the Center For Constructive Communication at
            the Media Lab in August, but my mentor's thesis was due in December.
            We had a deadline and a novel research avenue in the realm of
            Natural Language Processing
          </Text>
          <Text color="grey" fontSize="20px">
            I was excited to start, but there were a few hurdles to overcome...
          </Text>
        </Box>
        <Appear priority={3}>
          <OrderedList margin="10px" fontSize="24px">
            <ListItem>
              I wasn't familiar with tools needed to study language models
            </ListItem>
            <ListItem>
              Our research topic was relatively specific, so there was a lot of
              experimenting to be done before we could find a clear direction
            </ListItem>
            <ListItem>
              Time was limited, so I was going to need to be efficient in my
              learning and experiments
            </ListItem>
          </OrderedList>
        </Appear>
      </Slide>
      <Slide>
        <Heading textAlign="left" color="primary">
          Task and Motivation
        </Heading>
        <Box backgroundColor="white" color="black">
          <Text color="grey" fontSize="20px">
            When bringing multiple online communities together in a shared
            space, we want to be able to reconcile differences in social
            expectations (speech norms) to facilitate mutual understanding and
            productive engagement
          </Text>
        </Box>
        <UnorderedList margin="30px px 0px 0px" fontSize="24px">
          We know:
          <ListItem>
            Within the context of online communities, a speech norm defines
            social expectations for the sort of content users can post and how
            they interact with other members of the community
          </ListItem>
          <ListItem>
            Speech norms established within an online community tends to vary
            based on its size, demographic makeup, and interests.
          </ListItem>
          <ListItem>
            When not explicitly stated (as in most online platforms),
            differences in social expectations can create inter-community
            conflict
          </ListItem>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading color="primary">Research Question</Heading>
        <Text color="primary" fontSize="40px" textAlign="center">
          Our Question: Can we use large language models to uncover variations
          in online speech norms to create more community-centered content
          policies?
        </Text>
        <Appear priority={4}>
          <FlexBox>
            <Box flex={3}>
              <Text>Example: </Text>
            </Box>
            <Box
              marginTop="px"
              paddingTop="40px"
              paddingBottom="40px"
              flex={2}
              backgroundColor="white"
            >
              <FlexBox>
                <Image margin="0px" height="200px" src={motivatingImg}></Image>
              </FlexBox>
            </Box>
          </FlexBox>
        </Appear>
      </Slide>
    </>
  );
};

export default IntroSlides;
