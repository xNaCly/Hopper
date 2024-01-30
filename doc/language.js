const types = [
  "string",
  12,
  55.0,
  { key: "value" },
  [],
  function () {},
  {
    name: "anon",
    string: function (obj) {
      return obj.name;
    },
  },
];
console.log(types[types.length - 1]["string"](types[types.length - 1]));
