import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ascetic } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Gherkin =() => {

    const codeString = `
    @ID-PORTAL:SRS:001.01 @Automated
    Scenario Outline: Support page header shall be localized to the patient's region and language.
      Given the user's preferred locale is "<locale>"
      And the user is on the support screen
      Then the user sees the text "<text>"
  
      Examples:
        | locale | text                                |
        | en-us  | Need help? We are here for you.     |
        | en-ca  | Need help? We are here for you.     |
        | fr-ca  | Besoin d'aide? On est là pour vous. |
  `;
    return (
        <SyntaxHighlighter language="gherkin" style={ascetic}>
          {codeString}
        </SyntaxHighlighter>
      );

}
export default Gherkin;