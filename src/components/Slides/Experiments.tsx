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
import ListSlide from "./ListSlide";
import { HtmlHTMLAttributes, HTMLProps, ReactNode } from "react";
import "../../index.css";
import motivatingImg from "../../assets/motivatingExample.png";

import { Icon, IconButton } from "@mui/material";

const Experiments = () => {
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
        <Heading>Things I kept in my as I went along</Heading>
        <UnorderedList fontSize="24px">
          <ListItem>
            Pipeline must be flexible if we want to change directions
          </ListItem>
          <ListItem>
            We need to be able to update parameters easily and incorporate
            fundings into new experiments
          </ListItem>
          <ListItem>
            We must be able to explain our experimental results
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
    </div>
  );
};

export default Experiments;
