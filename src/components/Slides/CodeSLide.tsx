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
      <Box px={4}>
        <Heading color="primary">this is some code</Heading>
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
  );
};

export default CodingSlide;
