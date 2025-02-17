import { Deck, DefaultTemplate, Slide, FlexBox, Stepper } from "spectacle";

import React from "react";

<Slide>
  <p>Hello, world!</p>
  <Stepper tagName="p" alwaysVisible values={["foo", "bar"]}>
    {(value, step, isActive) =>
      isActive
        ? `The first stepper is active. Step: ${step} Value: ${value}`
        : `The first stepper is not active. Step: ${step} Value: ${value}`
    }
  </Stepper>
  <Stepper tagName="p" alwaysVisible values={["baz", "quux"]}>
    {(value, step, isActive) =>
      isActive
        ? `The second stepper is active. Step: ${step} Value: ${value}`
        : `The second stepper is not active. Step: ${step} Value: ${value}`
    }
  </Stepper>
</Slide>;
