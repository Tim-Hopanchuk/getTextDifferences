const assert = require("assert");
const { getParagraphDiff } = require("../dist/index");
const { getTextDiff } = require("../dist/index");

describe("getParagraphDiff", function () {
  //Both texts are identical
  describe("Both texts are identical", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "0123456789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, null);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "");
    });
  });

  //Both texts are empty
  describe("Both texts are empty", function () {
    const originalParagraph = "";
    const modifiedParagraph = "";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, null);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "");
    });
  });

  //The first text is empty
  describe("The first text is empty", function () {
    const originalParagraph = "";
    const modifiedParagraph = "0123456789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "0123456789");
    });
  });

  //The second text is empty
  describe("The second text is empty", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "0123456789");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "");
    });
  });

  //Replaced one section in the middle
  describe("Replaced one section in the middle", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "01234_6789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 5);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "5");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "_");
    });
  });

  //Added one section in the middle
  describe("Added one section in the middle", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "01234_56789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 5);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "_");
    });
  });

  //Deleted one section in the middle
  describe("Deleted one section in the middle", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "012346789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 5);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "5");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "");
    });
  });

  //Replaced two sections in the middle
  describe("Replaced two sections in the middle", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "012_45_789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 3);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "3456");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "_45_");
    });
  });

  //Added two sections in the middle
  describe("Added two sections in the middle", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "012_3456_789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 3);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "3456");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "_3456_");
    });
  });

  //Deleted two sections in the middle
  describe("Deleted two sections in the middle", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "01245789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 3);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "3456");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "45");
    });
  });

  //Replaced one section at the beginning
  describe("Replaced one section at the beginning", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "_123456789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "0");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "_");
    });
  });

  //Added one section at the beginning
  describe("Added one section at the beginning", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "_0123456789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "_");
    });
  });

  //Deleted one section at the beginning
  describe("Deleted one section at the beginning", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "123456789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "0");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "");
    });
  });

  //Replaced one section at the end
  describe("Replaced one section at the end", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "012345678_";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 9);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "9");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "_");
    });
  });

  //Added one section at the end
  describe("Added one section at the end", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "0123456789_";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 10);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "_");
    });
  });

  //Deleted one section at the end
  describe("Deleted one section at the end", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "012345678";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 9);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "9");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "");
    });
  });

  //Added a full copy at the end
  describe("Added a full copy at the end", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "01234567890123456789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 10);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "0123456789");
    });
  });

  //Added a full copy in the middle
  describe("Added a full copy in the middle", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "01234012345678956789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 5);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "0123456789");
    });
  });

  //Duplicated characters at the beginning
  describe("Duplicated characters at the beginning", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "00123456789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 1);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "0");
    });
  });

  //Duplicated characters in the middle
  describe("Duplicated characters in the middle", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "01234456789";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 5);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "4");
    });
  });

  //Duplicated characters at the end
  describe("Duplicated characters at the end", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "01234567899";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 10);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "9");
    });
  });

  //Replaced the entire line with a single character
  describe("Replaced the entire line with a single character", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "_";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "0123456789");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "_");
    });
  });

  //Same length but completely replaced
  describe("Same length but completely replaced", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "abcdefghij";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "0123456789");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "abcdefghij");
    });
  });

  //Different length but completely replaced
  describe("Different length but completely replaced", function () {
    const originalParagraph = "0123456789";
    const modifiedParagraph = "abc";
    const paragraphDiff = getParagraphDiff(
      originalParagraph,
      modifiedParagraph
    );

    it("diffStartIndex", function () {
      assert.equal(paragraphDiff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(paragraphDiff.originalChangedText, "0123456789");
    });
    it("modifiedChangedText", function () {
      assert.equal(paragraphDiff.modifiedChangedText, "abc");
    });
  });
});

describe("getTextDiff", function () {
   //Changes in the first paragraph
  describe("Changes in the first paragraph", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText = "01234_6789p1\n0123456789p2\n0123456789p3";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "0123456789p1");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "01234_6789p1");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, 0);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, 0);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, 5);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "5");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "_");
    });
  });

  //Changes in the middle paragraph
  describe("Changes in the middle paragraph", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText = "0123456789p1\n012345_6789p2\n0123456789p3";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "0123456789p2");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "012345_6789p2");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, 1);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, 1);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, 6);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "_");
    });
  });

  //Changes in the last paragraph
  describe("Changes in the last paragraph", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText = "0123456789p1\n0123456789p2\n012346789p3";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "0123456789p3");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "012346789p3");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, 2);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, 2);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, 5);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "5");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "");
    });
  });

  //Multiple paragraphs unchanged
  describe("Multiple paragraphs unchanged", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText = "0123456789p1\n0123456789p2\n0123456789p3";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, null);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, null);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, null);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "");
    });
  });

  //Paragraphs replaced with a single line
  describe("Paragraphs replaced with a single line", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText = "abc";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "0123456789p1");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "abc");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, 0);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, 0);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "0123456789p1");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "abc");
    });
  });

  //All paragraphs deleted
  describe("All paragraphs deleted", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText = "";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "0123456789p1");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, 0);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, 0);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "0123456789p1");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "");
    });
  });

  //Deleted the first paragraph
  describe("Deleted the first paragraph", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText = "0123456789p2\n0123456789p3";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "0123456789p1");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, 0);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, 0);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "0123456789p1");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "");
    });
  });

  //Deleted the middle paragraph
  describe("Deleted the middle paragraph", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText = "0123456789p1\n0123456789p3";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "0123456789p2");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, 1);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, 1);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "0123456789p2");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "");
    });
  });

  //Deleted the last paragraph
  describe("Deleted the last paragraph", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText = "0123456789p1\n0123456789p2";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "0123456789p3");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, 2);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, 2);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "0123456789p3");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "");
    });
  });

  //Added a paragraph at the beginning
  describe("Added a paragraph at the beginning", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText =
      "0123456789p0\n0123456789p1\n0123456789p2\n0123456789p3";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "0123456789p0");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, 0);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, 0);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "0123456789p0");
    });
  });

  //Added a paragraph in the middle
  describe("Added a paragraph in the middle", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText =
      "0123456789p1\n0123456789p2\n0123456789p4\n0123456789p3";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "0123456789p4");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, 2);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, 2);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "0123456789p4");
    });
  });

  //Added a paragraph at the end
    describe("Added a paragraph at the end", function () {
    const originalText = "0123456789p1\n0123456789p2\n0123456789p3";
    const modifiedText = "0123456789p1\n0123456789p2\n0123456789p3\n0123456789p4";
    const textDiff = getTextDiff(originalText, modifiedText);

    it("originalParagraph", function () {
      assert.equal(textDiff.originalParagraph, "");
    });
    it("modifiedParagraph", function () {
      assert.equal(textDiff.modifiedParagraph, "0123456789p4");
    });
    it("originalParagraphIndex", function () {
      assert.equal(textDiff.originalParagraphIndex, 3);
    });
    it("modifiedParagraphIndex", function () {
      assert.equal(textDiff.modifiedParagraphIndex, 3);
    });
    it("diffStartIndex", function () {
      assert.equal(textDiff.diff.diffStartIndex, 0);
    });
    it("originalChangedText", function () {
      assert.equal(textDiff.diff.originalChangedText, "");
    });
    it("modifiedChangedText", function () {
      assert.equal(textDiff.diff.modifiedChangedText, "0123456789p4");
    });
  });
});
