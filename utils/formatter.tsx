export const formatInstructions = (instructions: string[] | string | undefined): string | undefined => {
  const replaceCommaAfterDot = (line: string) => line.replace(/\.,/g, '.\n\n');

  if (Array.isArray(instructions)) {
    return instructions.map(replaceCommaAfterDot).join('\n');
  } else if (typeof instructions === 'string') {
    return replaceCommaAfterDot(instructions);
  } else {
    return instructions;
  }
};

export const capitalizeWords = (text: string | any | undefined): string | undefined => {
  if (typeof text === 'string') {
    return text.replace(/\b\w|,/g, (match) => (match === ',' ? ', ' : match.toUpperCase()));
  } else {
    return text;
  }
};
