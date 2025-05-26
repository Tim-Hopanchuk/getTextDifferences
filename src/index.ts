"use strict";

// Написать функцию возвращающую измененные параграфы между двумя текстами.
// Параграф - участок текста отделенный символом новой строки.
// Параграфы отличаются если их текст не совпадает, либо если индексы начала параграфов в тексте не совпадают.
// Для каждого измененного параграфа нужно вернуть следующие данные:

//     1. Текст параграфа в тексте 1.
//     2. Текст параграфа в тексте 2.
//     3. Индекс параграфа в тексте 1.
//     4. Индекс параграфа в тексте 2.
//     5. Данные, описывающие изменения в тексте параграфа:
//         5.1 Индекс начала изменений в тексте параграфа.
//         5.2 Измененный текст параграфа 1.
//         5.2 Измененный текст параграфа 2.

// Предусмотреть вариант удаления/добавления параграфа/текста.
// Учитывать что текст может быть изменен лишь частично.

// Пример:
// 12345678
// 1234_678
// В этом случае индекс начала изменений текста: 4
// Измененный текст параграфа 1: "5"
// Измененный текст параграфа 2: "_"

interface textDifferencesParameters {
  originalParagraph: string;
  modifiedParagraph: string;
  originalParagraphIndex: number | null;
  modifiedParagraphIndex: number | null;

  diff: {
    diffStartIndex: number | null;
    originalTextDiffSequence: string;
    modifiedTextDiffSequence: string;
  };
}

export function getTextDifferences(
  originalText: string,
  modifiedText: string
): textDifferencesParameters {
  const result: textDifferencesParameters = {
    originalParagraph: "",
    modifiedParagraph: "",
    originalParagraphIndex: null,
    modifiedParagraphIndex: null,

    diff: {
      diffStartIndex: null,
      originalTextDiffSequence: "",
      modifiedTextDiffSequence: "",
    },
  };

  if (originalText === modifiedText) {
    return result;
  }

  result.originalParagraph = originalText;
  result.modifiedParagraph = modifiedText;
  result.originalParagraphIndex = 0;
  result.modifiedParagraphIndex = 0;

  const maxParagraphLength = Math.max(originalText.length, modifiedText.length);

  let diffStartIndex: number = 0;
  for (let i = 0; i < maxParagraphLength; i++) {
    if (originalText.at(i) === modifiedText.at(i)) {
      continue;
    }

    diffStartIndex = i;
    break;
  }

  let diffEndIndex: number = maxParagraphLength;
  for (let i = 1; i < maxParagraphLength; i++) {
    if (originalText.at(-i) === modifiedText.at(-i)) {
      continue;
    }

    diffEndIndex = i;
    break;
  }

  result.diff.diffStartIndex = diffStartIndex;

  result.diff.originalTextDiffSequence = originalText.slice(
    diffStartIndex,
    originalText.length - diffEndIndex + 1
  );

  result.diff.modifiedTextDiffSequence = modifiedText.slice(
    diffStartIndex,
    modifiedText.length - diffEndIndex + 1
  );

  return result;
}
