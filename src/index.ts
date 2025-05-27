"use strict";

interface ParagraphDiff {
  diffStartIndex: number | null;
  originalChangedText: string;
  modifiedChangedText: string;
}

interface TextDiff {
  originalParagraph: string;
  modifiedParagraph: string;
  originalParagraphIndex: number | null;
  modifiedParagraphIndex: number | null;

  diff: ParagraphDiff;
}

export function getParagraphDiff(
  originalParagraph: string,
  modifiedParagraph: string
): ParagraphDiff {
  if (originalParagraph === modifiedParagraph) {
    return {
      diffStartIndex: null,
      originalChangedText: "",
      modifiedChangedText: "",
    };
  }

  let diffStartIndex: number = 0;
  while (
    diffStartIndex < originalParagraph.length &&
    diffStartIndex < modifiedParagraph.length &&
    originalParagraph[diffStartIndex] === modifiedParagraph[diffStartIndex]
  ) {
    diffStartIndex++;
  }

  let originalDiffEndIndex: number = originalParagraph.length - 1;
  let modifiedDiffEndIndex: number = modifiedParagraph.length - 1;
  while (
    originalDiffEndIndex >= diffStartIndex &&
    modifiedDiffEndIndex >= diffStartIndex &&
    originalParagraph[originalDiffEndIndex] ===
      modifiedParagraph[modifiedDiffEndIndex]
  ) {
    originalDiffEndIndex--;
    modifiedDiffEndIndex--;
  }

  return {
    diffStartIndex: diffStartIndex,
    originalChangedText: originalParagraph.slice(
      diffStartIndex,
      originalDiffEndIndex + 1
    ),
    modifiedChangedText: modifiedParagraph.slice(
      diffStartIndex,
      modifiedDiffEndIndex + 1
    ),
  };
}

export function getTextDiff(
  originalText: string,
  modifiedText: string
): TextDiff {
  const diffResult: TextDiff = {
    originalParagraph: "",
    modifiedParagraph: "",
    originalParagraphIndex: null,
    modifiedParagraphIndex: null,
    diff: {
      diffStartIndex: null,
      originalChangedText: "",
      modifiedChangedText: "",
    },
  };

  if (originalText === modifiedText) {
    return diffResult;
  }

  const originalParagraphs: string[] = originalText.split("\n");
  const modifiedParagraphs: string[] = modifiedText.split("\n");

  for (let i = 0; i < Math.max(originalParagraphs.length, modifiedParagraphs.length); i++) {
    if (originalParagraphs[i] === modifiedParagraphs[i]) {
      continue;
    }

    diffResult.originalParagraphIndex = i;
    diffResult.modifiedParagraphIndex = i;

    //deleted paragraph check
    if (originalParagraphs.slice(i + 1).join("") === modifiedParagraphs.slice(i).join("")) {
      diffResult.originalParagraph = originalParagraphs[i];
      diffResult.modifiedParagraph = "";
      diffResult.diff = getParagraphDiff(originalParagraphs[i], "");
      return diffResult;
    }
    
    //addeed paragraph check
    if (modifiedParagraphs.slice(i + 1).join("") === originalParagraphs.slice(i).join("")) {
      diffResult.originalParagraph = "";
      diffResult.modifiedParagraph = modifiedParagraphs[i];
      diffResult.diff = getParagraphDiff("", modifiedParagraphs[i]);
      return diffResult;
    }

    diffResult.originalParagraph = originalParagraphs[i];
    diffResult.modifiedParagraph = modifiedParagraphs[i];
    diffResult.diff = getParagraphDiff(originalParagraphs[i], modifiedParagraphs[i]);

    break;
  }

  return diffResult;
}