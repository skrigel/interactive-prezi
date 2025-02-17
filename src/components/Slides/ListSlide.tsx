import { Flex } from "@mantine/core";
import {
  Appear,
  Box,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Progress,
  Slide,
  Stepper,
  Text,
  UnorderedList,
} from "spectacle";

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
import CodePanel from "../CodePanel";

const ListSlide = () => {
  return (
    <Slide>
      <FlexBox>
        <UnorderedList fontSize="24px">
          <ListItem>
            <CodeSpan fontSize="26px">Clauses</CodeSpan>
          </ListItem>
          <CodeSpan marginLeft="50px" fontSize="22px">
            - Create, Match, Merge, Return, Where..
          </CodeSpan>
          <ListItem>
            <CodeSpan fontSize="26px">Constraints</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan fontSize="26px">Indexes</CodeSpan>
          </ListItem>
        </UnorderedList>
        <UnorderedList fontSize="24px">
          <ListItem>
            <CodeSpan fontSize="26px" color={TEXT_COLOR}>
              APOC (Awesome Procedures on Cypher)
            </CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan fontSize="26px" color={TEXT_COLOR}>
              Graph Algorithms
            </CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan fontSize="26px" color={TEXT_COLOR}>
              I love spanish!
            </CodeSpan>
          </ListItem>
        </UnorderedList>
      </FlexBox>
      <Box>
        <CodeSpan>Love it!</CodeSpan>
        <CodePanel></CodePanel>
      </Box>
    </Slide>
  );
};

export default ListSlide;
