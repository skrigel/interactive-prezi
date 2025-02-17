import {
  Deck,
  DefaultTemplate,
  Slide,
  Text,
  MarkdownSlideSet,
  MarkdownSlide,
  SpectacleLogo,
  Markdown,
} from "spectacle";

const MarkdownPanel = () => {
  <div>
    <Slide>
      <Markdown>
        # Urql A highly customizable and versatile GraphQL client
      </Markdown>
      <Text>Made by Formidable</Text>
    </Slide>
    <MarkdownSlide animateListItems>
      # Use Markdown to write a slide This is a single slide composed using
      Markdown. - It uses the `animateListItems` prop so... - it's list items...
      - will animate in, one at a time.
    </MarkdownSlide>
    <MarkdownSlideSet>
      # Markdown Slide Sets Let you write a sequence of slides using Markdown.
      --- # This is the Second Slide in the Set Using the `---` delimiter
      creates a new slide in the set. Notes: The easiest way to always display
      up-to-date data is to set the requestPolicy to 'cache-and-network'.
    </MarkdownSlideSet>
  </div>;
};
