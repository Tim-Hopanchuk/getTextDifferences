# getTextDifferences

**getTextDifferences** is a function that detects and describes changes between two texts at the paragraph level.  
A paragraph is defined as a block of text separated by a newline.

## Project Purpose

This project was developed as a practice tool to simulate development workflow, including:

- File structure organization
- Module and configuration setup
- Writing and running unit tests
- Using Git for version control
- Implementing core logic

## Technologies Used

- JavaScript
- TypeScript
- Git
- Mocha
- Webpack
- ts-loader
- webpack-cli

## What It Does

**getTextDifferences** identifies:

- Modified paragraphs (based on both content and position)
- Added or removed paragraphs
- Specific changes within a modified paragraph

## Example

```ts
const original = `Paragraph one stays the same.
This is the paragraph that changes.
The final paragraph is also unchanged.`;

const modified = `Paragraph one stays the same.
This is the paragraph that has changed!
The final paragraph is also unchanged.`;

const diff = getTextDiff(original, modified);

console.log(diff);

/*
{
  originalParagraph: "This is the paragraph that changes.",
  modifiedParagraph: "This is the paragraph that has changed!",
  originalParagraphIndex: 1,
  modifiedParagraphIndex: 1,
  diff: {
    diffStartIndex: 27,
    originalChangedText: "changes.",
    modifiedChangedText: "has changed!"
  }
}
*/
```
