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
  Markdown,
  MarkdownSlide,
  TableRow,
  Notes,
  CodeSpan,
  UnorderedList,
  OrderedList,
  Appear,
  ListItem,
} from "spectacle";
import { HtmlHTMLAttributes, HTMLProps, ReactNode } from "react";
import "../../index.css";
import notionImg from "../../assets/notionlayout.png";
import resultDoc1 from "../../assets/resultsDoc1.png";
import resultDoc2 from "../../assets/resultsDoc2.png";
import clusterImg from "../../assets/clusters.png";
import methodImg from "../../assets/method.png";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CodePanel from "../CodePanel";

// List of images to cycle through
const images = [notionImg, resultDoc1, resultDoc2];

const images2 = [clusterImg, methodImg];

const ProcessSlides = () => {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const nextImage2 = () => {
    setIndex2((prevIndex) => (prevIndex + 1) % images2.length);
  };

  return (
    <div>
      <MarkdownSlide animateListItems componentProps={{ color: "white" }}>
        {`
       # My approach

       - Gather information to learn
       - Develop documentation framework for myself and my mentor to refer back to
       - Develop an outline of our methodology and framework
      `}
      </MarkdownSlide>

      <Slide>
        <Heading color="primary">Getting organized</Heading>

        <FlexBox>
          <Box flex={1}>
            <Text>
              I asked my mentor for resources getting familiar with prompting
              and evaluating LLMs
            </Text>
            <Text>
              I also began building up my documentation system to centralize
              resources
            </Text>
          </Box>
          <Box flex={3} backgroundColor="white">
            <FlexBox>
              <div className="flex flex-col items-center justify-center h-screen">
                <motion.img
                  key={index} // Ensure Framer Motion detects changes
                  src={images[index]}
                  width="600px"
                  alt="Slideshow"
                  className="w-3/4 h-auto"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 1 }}
                />
                <button onClick={nextImage}>Next Image</button>
              </div>
              {/* <Image margin="0px" width="600px" src={notionImg}></Image> */}
            </FlexBox>
          </Box>
        </FlexBox>
      </Slide>

      {/* <Slide>
        <Heading color="primary">Getting organized</Heading>

        <FlexBox>
          <Box flex={1}>
            <Text>
              I asked my mentor for resources getting familiar with prompting
              and evaluating LLMs
            </Text>
            <Text>
              I also began building up my documentation system to centralize
              resources
            </Text>
          </Box>
          <Box flex={3} backgroundColor="white">
            <FlexBox>
              <Image margin="0px" width="600px" src={resultDoc1}></Image>
            </FlexBox>
          </Box>
        </FlexBox>
      </Slide> */}

      {/* <Slide>
        {" "}
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
      </Slide> */}

      <Slide>
        <Heading color="primary">Breaking Our Method Down</Heading>
        <OrderedList fontSize="20px">
          <ListItem>
            {" "}
            Cluster data by types of comments, i.e. do they uphold/violate
            norms?
          </ListItem>
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

        <Box overflowY="scroll">
          <CodePanel></CodePanel>
        </Box>
        {/* <CodePanel></CodePanel> */}

        {/**add slide to upload image */}
      </Slide>

      <Slide>
        <Heading color="primary">Breaking Our Method Down</Heading>
        <OrderedList fontSize="20px">
          <ListItem>
            {" "}
            Cluster data by types of comments, i.e. do they uphold/violate
            norms?
          </ListItem>
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
        <Box>
          <button onClick={nextImage2}>Next Image</button>
        </Box>
        <FlexBox>
          <motion.img
            key={index} // Ensure Framer Motion detects changes
            src={images2[index2]}
            height="200px"
            alt="Slideshow"
            className="w-3/4 h-auto"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </FlexBox>

        {/* <Text>
          Data: dataset comprised of moderated comments collected from reddit
          forums
        </Text> */}
        {/**add slide to upload image */}
      </Slide>

      {/* <Slide>
        <Heading>LOOK!</Heading>
      </Slide> */}
    </div>
  );
};

export default ProcessSlides;
