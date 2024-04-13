// fileA.js
const GlobalMap = require("./index");

const gbMap = GlobalMap.getInstance();
gbMap.set("count", 42);

const gbMap2 = GlobalMap.getInstance2();
gbMap2.set("count", 11);
