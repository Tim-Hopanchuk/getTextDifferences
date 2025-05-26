const assert = require("assert");
const { getTextDifferences } = require("../dist/index");

// describe("name", function () {
//   const originalText = "0123456789";
//   const modifiedText = "0123456789";
//   const textDiffrences = getTextDifferences(originalText, modifiedText);

//   it("originalParagraph", function () {
//     assert.equal(textDiffrences.originalParagraph, "");
//   });
//   it("modifiedParagraph", function () {
//     assert.equal(textDiffrences.modifiedParagraph, "");
//   });
//   it("originalParagraphIndex", function () {
//     assert.equal(textDiffrences.originalParagraphIndex, null);
//   });
//   it("modifiedParagraphIndex", function () {
//     assert.equal(textDiffrences.modifiedParagraphIndex, null);
//   });

//   it("diffStartIndex", function () {
//     assert.equal(textDiffrences.diff.diffStartIndex, null);
//   });
//   it("originalTextDiffSequence", function () {
//     assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
//   });
//   it("modifiedTextDiffSequence", function () {
//     assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
//   });
// });

//Both texts are identical
describe("Both texts are identical", function () {
  const originalText = "0123456789";
  const modifiedText = "0123456789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

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

//Both texts are empty
describe("Both texts are empty", function () {
  const originalText = "";
  const modifiedText = "";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

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

//The first text is empty
describe("The first text is empty", function () {
  const originalText = "";
  const modifiedText = "0123456789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "");
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
    assert.equal(textDiffrences.diff.diffStartIndex, 0);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "0123456789");
  });
});

//The second text is empty
describe("The second text is empty", function () {
  const originalText = "0123456789";
  const modifiedText = "";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
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
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "0123456789");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "");
  });
});

//Replaced one section in the middle
describe("Replaced one section in the middle", function () {
  const originalText = "0123456789";
  const modifiedText = "01234_6789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "01234_6789");
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

//Added one section in the middle
describe("Added one section in the middle", function () {
  const originalText = "0123456789";
  const modifiedText = "01234_56789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "01234_56789");
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

//Deleted one section in the middle
describe("Deleted one section in the middle", function () {
  const originalText = "0123456789";
  const modifiedText = "012346789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "012346789");
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

//Replaced two sections in the middle
describe("Replaced two sections in the middle", function () {
  const originalText = "0123456789";
  const modifiedText = "012_45_789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "012_45_789");
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

//Added two sections in the middle
describe("Added two sections in the middle", function () {
  const originalText = "0123456789";
  const modifiedText = "0123_45_6789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "0123_45_6789");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });

  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 4);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "45");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "_45_");
  });
});

//Deleted two sections in the middle
describe("Deleted two sections in the middle", function () {
  const originalText = "0123456789";
  const modifiedText = "01245789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "01245789");
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

//Replaced one section at the beginning
describe("Replaced one section at the beginning", function () {
  const originalText = "0123456789";
  const modifiedText = "_123456789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "_123456789");
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

//Added one section at the beginning
describe("Added one section at the beginning", function () {
  const originalText = "0123456789";
  const modifiedText = "_0123456789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "_0123456789");
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

//Deleted one section at the beginning
describe("Deleted one section at the beginning", function () {
  const originalText = "0123456789";
  const modifiedText = "123456789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "123456789");
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

//Replaced one section at the end
describe("Replaced one section at the end", function () {
  const originalText = "0123456789";
  const modifiedText = "012345678_";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "012345678_");
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

//Added one section at the end
describe("Added one section at the end", function () {
  const originalText = "0123456789";
  const modifiedText = "0123456789_";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "0123456789_");
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

//Deleted one section at the end
describe("name", function () {
  const originalText = "0123456789";
  const modifiedText = "012345678";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "012345678");
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

//Added a full copy at the end
describe("Added a full copy at the end", function () {
  const originalText = "0123456789";
  const modifiedText = "01234567890123456789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "01234567890123456789");
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

//Added a full copy in the middle
describe("Added a full copy in the middle", function () {
  const originalText = "0123456789";
  const modifiedText = "01234012345678956789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "01234012345678956789");
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

//Duplicated characters at the beginning
describe("Duplicated characters at the beginning", function () {
  const originalText = "0123456789";
  const modifiedText = "00123456789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "00123456789");
  });
  it("originalParagraphIndex", function () {
    assert.equal(textDiffrences.originalParagraphIndex, 0);
  });
  it("modifiedParagraphIndex", function () {
    assert.equal(textDiffrences.modifiedParagraphIndex, 0);
  });

  it("diffStartIndex", function () {
    assert.equal(textDiffrences.diff.diffStartIndex, 1);
  });
  it("originalTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.originalTextDiffSequence, "");
  });
  it("modifiedTextDiffSequence", function () {
    assert.equal(textDiffrences.diff.modifiedTextDiffSequence, "0");
  });
});

//Duplicated characters in the middle
describe("Duplicated characters in the middle", function () {
  const originalText = "0123456789";
  const modifiedText = "01234456789";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "01234456789");
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

//Duplicated characters at the end
describe("Duplicated characters at the end", function () {
  const originalText = "0123456789";
  const modifiedText = "01234567899";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "01234567899");
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

//Replaced the entire line with a single character
describe("Replaced the entire line with a single character", function () {
  const originalText = "0123456789";
  const modifiedText = "_";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "_");
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

//Same length but completely replaced
describe("Same length but completely replaced", function () {
  const originalText = "0123456789";
  const modifiedText = "abcdefghij";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "abcdefghij");
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

//Different length but completely replaced
describe("Different length but completely replaced", function () {
  const originalText = "0123456789";
  const modifiedText = "abc";
  const textDiffrences = getTextDifferences(originalText, modifiedText);

  it("originalParagraph", function () {
    assert.equal(textDiffrences.originalParagraph, "0123456789");
  });
  it("modifiedParagraph", function () {
    assert.equal(textDiffrences.modifiedParagraph, "abc");
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


//Multiple paragraphs unchanged
//Paragraphs replaced with a single line

//Changes in the first paragraph
//Changes in the middle paragraph
//Changes in the last paragraph

//All paragraphs deleted
//Deleted the first paragraph
//Deleted the middle paragraph
//Deleted the last paragraph

//Added a paragraph at the beginning
//Added a paragraph in the middle
//Added a paragraph at the end

//Repeated paragraphs
