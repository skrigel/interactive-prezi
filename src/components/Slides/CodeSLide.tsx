import {
  Slide,
  Heading,
  Grid,
  Box,
  UnorderedList,
  ListItem,
  CodePane,
  FlexBox,
  Image,
} from "spectacle";

const CodingSlide = () => {
  return (
    <Slide>
      <Heading textAlign={"left"}>GPU for Graphics</Heading>
      <FlexBox>
        <FlexBox flexDirection="row" flex={2}>
          <UnorderedList>
            <ListItem>Applications from gaming and design</ListItem>
            <ListItem>The technique of ray tracing</ListItem>
            <ListItem>A solution of parallelism</ListItem>
          </UnorderedList>
        </FlexBox>
        <FlexBox
          position="relative"
          flexDirection="row"
          paddingTop={0}
          flex={1}
        >
          {/* <SourceLink
          text="Recursive Ray Tracing"
          url="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)"
          desc="image source: wikipedia"
        />*/}
        </FlexBox>
        <FlexBox flexDirection="row" flex={2}>
          <CodePane
            language="python"
            // theme={tomorrow}
            // maxWidth="50%"
            showLineNumbers={false}
            // overflowX="scroll"
          >
            {`
for all pixels (i,j) in image:
From camera eye point,
  calculate ray point and direction in 3d space
if ray intersects object:
  calculate lighting at closest object point
       store color of (i,j)
Assemble into image file
    `}
          </CodePane>
          <Box height={20} />
        </FlexBox>
      </FlexBox>
    </Slide>
  );
};

export default CodingSlide;
