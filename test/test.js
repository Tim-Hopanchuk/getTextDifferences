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
      assert.equal(paragraphDiff.diffStartIndex, 0);
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
