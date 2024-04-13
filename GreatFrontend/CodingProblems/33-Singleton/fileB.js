// fileB.js
const GlobalMap = require("./index");

const gbMap = GlobalMap.getInstance();
console.log(gbMap.get("count")); // 42

const gbMap2 = GlobalMap.getInstance2();
console.log(gbMap2.get("count")); // 11
