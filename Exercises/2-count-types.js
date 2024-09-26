const mixedArray = [
  42,
  "Hello, world!",
  true,
  { name: "Alice", age: 30 },
  [1, 2, 3],
  null,
  3.14,
  "JavaScript",
  false,
  { city: "Kyiv", country: "Ukraine" },
  [4, 5, 6],
  undefined,
  "Copilot",
  100,
  { hobby: "coding", language: "JavaScript" },
  [7, 8, 9],
  true,
  "VSCode",
  2024,
  { framework: "React", version: "17.0.2" },
  [10, 11, 12],
  false,
  "Node.js",
  undefined,
  256,
  { tool: "npm", command: "install" },
];

// First implementation

const countTypesInArray = (mixedArray) => {
  const countTypes1 = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0,
  };
  for (const elem of mixedArray) {
    const type = typeof elem;
    countTypes1[type]++;
  }

  return countTypes1;
};

console.log(countTypesInArray(mixedArray));

// Second implementation

const countTypesInArray2 = (mixedArray) => {
  const countTypes2 = {};
  for (const elem of mixedArray) {
    const type = typeof elem;
    if (Object.hasOwn(countTypes2, type)) {
      countTypes2[type]++;
    } else {
      countTypes2[type] = 1;
    }
  }

  return countTypes2;
};

console.log(countTypesInArray2(mixedArray));
