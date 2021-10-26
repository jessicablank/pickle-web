import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { ascetic } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Gherkin =() => {
    const codeString = `
    @ID-123b @Example  @SRS_CALC_2 @Integration
    Scenario Outline: The calculator shall accurately calculate addition, subtraction, multiplication, and division.
        Given the user is on the calculator input screen
        When the user enters "<Input1>" in the field with label "calculate!"
        And the user presses the "<Operator>" button
        And the user enters "<Input2>" in the field with label "calculate!"
        Then the user is presented with "<Output>" in the field with label "calculate!"

        Examples:
            | Input1 | Operator | Input2 | Output |
            | 30     | add      | 3      | 33     |
            | 30     | subtract | 3      | 27     |
            | 30     | multiply | 3      | 90     |
            | 30     | divide   | 3      | 10     |
  `;
    return (
        <SyntaxHighlighter language="gherkin" style={ascetic}>
          {codeString}
        </SyntaxHighlighter>
      );

}
export default Gherkin;