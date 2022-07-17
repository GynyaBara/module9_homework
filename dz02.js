const jsonStr = {
  list: [
    {
      name: "Petr",
      age: "20",
      prof: "mechanic",
    },
    {
      name: "Vova",
      age: "60",
      prof: "pilot",
    },
  ],
};
let json = JSON.stringify(jsonStr);
console.log(json);
