const completeComputerInfo = (computer, defaultProps) => {
  if (typeof computer == "object") {
    return Object.assign({}, defaultProps, computer);
  } else {
    return "the input is not an object";
  }
};
const defaultProps = {
  available: true,
  os: "linux",
  user: null,
};
describe("Tests assign objects", () => {
  it(`merge two objects with adding new proporties`, () =>
    expect(completeComputerInfo({ id: "0003" }, defaultProps)).toStrictEqual({
      id: "0003",
      available: true,
      os: "linux",
      user: null,
    }));
  /**second test */
  it(`merge two objects without replacing default proporties`, () =>
    expect(
      completeComputerInfo(
        { id: "0001", available: false, user: "leny", os: "macOS" },
        defaultProps
      )
    ).toStrictEqual({
      id: "0001",
      available: false,
      user: "leny",
      os: "macOS",
    }));
  /**third tets */
  it(`merge two objects with adding new proporties without replacing default properties`, () =>
    expect(
      completeComputerInfo(
        { id: "0002", available: false, user: "Nicolas" },
        defaultProps
      )
    ).toStrictEqual({
      id: "0002",
      available: false,
      user: "Nicolas",
      os: "linux",
    }));
  /**fourth tets */
  it(`merge two objects with adding new proporties without replacing default properties`, () =>
    expect(completeComputerInfo(" ", defaultProps)).toStrictEqual(
      "the input is not an object"
    ));
});

function isValidColor(color) {
  if (color && typeof color === "string") {
    return color.match(/^#(?:[0-9a-f]{3}){1,2}$/i) !== null;
  } else {
    return "the input is invalid";
  }
}

describe("Tests color", () => {
  it(`return true if the input is a valid color`, () =>
    expect(isValidColor("#fff")).toStrictEqual(true));
  it(`return false if the input is a not valid color`, () =>
    expect(isValidColor("fff")).toStrictEqual(false));
  it(`return a message if the input is a not a string`, () =>
    expect(isValidColor(5)).toStrictEqual("the input is invalid"));
});

const changeContent = (currentHour) => {
  let greeting;
  if(currentHour <= 24 && currentHour >= 0){
  if (currentHour < 18) {
    greeting = "Bonjour";
  } else{
    greeting = "Bonsoir";
  }}else{
    greeting = 'invalid input'
  }
  return greeting;
};

describe("changeContent Test", () => {
  it(`return Bonjour si l'heure inférieur à 18`, () =>
    expect(changeContent(15)).toStrictEqual("Bonjour"));
  it(`return Bonsoir si l'heure est supérieur à 18`, () =>
    expect(changeContent(19)).toStrictEqual("Bonsoir"));
  it(`return a message if the input is a not a string`, () =>
    expect(changeContent(28)).toStrictEqual("invalid input"));
});
