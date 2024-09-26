// First implementation
const inc1 = (a) => ++a;

const a = 5;
const b = inc1(a);

console.dir({ a, b });

// Second implementation
const inc2 = (obj) => {
  if (typeof obj == "object") obj.n++;
};

const obj = { n: 5 };
inc2(obj);

console.dir(obj);
