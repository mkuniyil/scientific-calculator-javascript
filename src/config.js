module.exports = {
  translation: {
    brandName: "CASIO",
    brandModel: "SL-300SV",
    powerText: "TWO WAY POWER"
  },
  calculatorKeys: [
    { displayText: "√", smallKey: true },
    {
      displayText: "OFF",
      smallKey: true
    },
    { displayText: "MC" },
    { displayText: "MR" },
    { displayText: "M-" },
    { displayText: "M+" },
    { displayText: "÷" },
    { displayText: "%" },
    { displayText: "7" },
    { displayText: "8" },
    { displayText: "9" },
    { displayText: "X" },
    { displayText: "+/-" },
    { displayText: "4" },
    { displayText: "5" },
    { displayText: "6" },
    { displayText: "-" },
    { displayText: "C", redKey: true },
    { displayText: "1" },
    { displayText: "2" },
    { displayText: "3" },
    { displayText: "+" },
    { displayText: "AC", redKey: true },
    { displayText: "0" },
    { displayText: "." },
    { displayText: "=" }
  ],
  actionTypes: {
    togglePower: "TOGGLE_POWER",
    updateDisplayValue: "UPDATE_DISPLAY_VALUE",
    updateStateValues: "UPDATE_STATE_VALUES"
  },
  regexPatterns: {
    dot: /\./,
    memoryActions: /MC|MR|M-|M\+/,
    minus: /-/,
    numbers: /\d/,
    operators: /%|\+|-|X|÷|=|√/,
    squareRoot: /√/,
    equalTo: /=/
  }
};
