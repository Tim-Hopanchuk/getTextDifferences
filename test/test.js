const assert = require("assert");
const { getTextDifferences } = require("../dist/index");

let originalText;
let modifiedText;
let textDiffrences;

originalText = "0123456789";
modifiedText = "0123456789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Both texts are identical", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, null);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, null);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, null);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

originalText = "";
modifiedText = "";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Both texts are empty", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, null);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, null);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, null);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

originalText = "";
modifiedText = "0123456789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("The first text is empty", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, originalText);
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, modifiedText);
  });
});

originalText = "0123456789";
modifiedText = "";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("The second text is empty", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, originalText);
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, modifiedText);
  });
});

//замінили одну секцію в середині
originalText = "0123456789";
modifiedText = "01234_6789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Replaced one section in the middle", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 5);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "5");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_");
  });
});

originalText = "0123456789";
modifiedText = "01234_56789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Added one section in the middle", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 5);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_");
  });
});

originalText = "0123456789";
modifiedText = "012346789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Deleted one section in the middle", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 5);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "5");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

originalText = "0123456789";
modifiedText = "012_45_789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Replaced two sections in the middle", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 3);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "3456");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_45_");
  });
});

originalText = "0123456789";
modifiedText = "012_3456_789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Added two sections in the middle", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 3);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "3456");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_3456_");
  });
});

originalText = "0123456789";
modifiedText = "01245789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Deleted two sections in the middle", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 3);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "3456");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "45");
  });
});

originalText = "0123456789";
modifiedText = "_123456789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Replaced one section at the beginning", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "0");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_");
  });
});

originalText = "0123456789";
modifiedText = "_0123456789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Added one section at the beginning", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_");
  });
});

originalText = "0123456789";
modifiedText = "123456789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Deleted one section at the beginning", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "0");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

originalText = "0123456789";
modifiedText = "012345678_";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Replaced one section at the end", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 9);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "9");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_");
  });
});

originalText = "0123456789";
modifiedText = "0123456789_";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Added one section at the end", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 10);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_");
  });
});

originalText = "0123456789";
modifiedText = "012345678";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Deleted one section at the end", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 9);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "9");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

originalText = "0123456789";
modifiedText = "01234567890123456789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Added a full copy at the end", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 10);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "0123456789");
  });
});

originalText = "0123456789";
modifiedText = "01234012345678956789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Added a full copy in the middle", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 5);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "0123456789");
  });
});

originalText = "0123456789";
modifiedText = "00123456789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Duplicated characters at the beginning", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "0");
  });
});

originalText = "0123456789";
modifiedText = "01234456789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Duplicated characters in the middle", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 5);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "4");
  });
});

originalText = "0123456789";
modifiedText = "01234567899";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Duplicated characters at the end", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 10);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "9");
  });
});

originalText = "0123456789";
modifiedText = "_";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Replaced the entire line with a single character", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "0123456789");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_");
  });
});

originalText = "0123456789";
modifiedText = "abcdefghij";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Same length but completely replaced", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "0123456789");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "abcdefghij");
  });
});

originalText = "0123456789";
modifiedText = "abc";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Different length but completely replaced", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, originalText);
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, modifiedText);
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "0123456789");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "abc");
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "0123456789str1\n0123456789str2\n0123456789str3";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Multiple paragraphs unchanged", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, null);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, null);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, null);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "0123456789";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Paragraphs replaced with a single line", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789str1");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "0123456789");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 10);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "str1");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "01234_6789str1\n0123456789str2\n0123456789str3";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Changes in the first paragraph", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789str1");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "01234_6789str1");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 5);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "5");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_");
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "0123456789str1\n01234_6789str2\n0123456789str3";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Changes in the middle paragraph", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789str2");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "01234_6789str2");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 1);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 1);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 5);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "5");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_");
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "0123456789str1\n0123456789str2\n01234_6789str3";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Changes in the last paragraph", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789str3");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "01234_6789str3");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 2);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 2);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 5);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "5");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_");
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("All paragraphs deleted", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789str1");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(
      textDiffrences.diff.originalTextDiffSequence,
      "0123456789str1"
    );
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "0123456789str2\n0123456789str3";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Deleted the first paragraph", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789str1");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(
      textDiffrences.diff.originalTextDiffSequence,
      "0123456789str1"
    );
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "0123456789str1\n0123456789str3";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Deleted the middle paragraph", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789str2");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 1);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 1);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(
      textDiffrences.diff.originalTextDiffSequence,
      "0123456789str2"
    );
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "0123456789str1\n0123456789str2";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Deleted the last paragraph", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789str3");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 2);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 2);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(
      textDiffrences.diff.originalTextDiffSequence,
      "0123456789str3"
    );
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "0123456789str4\n0123456789str1\n0123456789str2\n0123456789str3";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Added a paragraph at the beginning", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "0123456789str4");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(
      textDiffrences.diff.modifiedTextDiffSequence,
      "0123456789str4"
    );
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "0123456789str1\n0123456789str2\n0123456789str4\n0123456789str3";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Added a paragraph in the middle", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "0123456789str4");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 2);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 2);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(
      textDiffrences.diff.modifiedTextDiffSequence,
      "0123456789str4"
    );
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "0123456789str1\n0123456789str2\n0123456789str3\n0123456789str4";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Added a paragraph at the end", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "0123456789str4");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 3);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 3);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(
      textDiffrences.diff.modifiedTextDiffSequence,
      "0123456789str4"
    );
  });
});

originalText = "0123456789str1\n0123456789str2\n0123456789str3";
modifiedText = "0123456789str1\n0123456789str1\n0123456789str2\n0123456789str3";
textDiffrences = getTextDifferences(originalText, modifiedText);

describe("Repeated paragraphs", function () {
  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "0123456789str1");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });
  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(
      textDiffrences.diff.modifiedTextDiffSequence,
      "0123456789str1"
    );
  });
});
