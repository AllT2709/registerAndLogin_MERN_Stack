// module.export = {
//   mongoUri: process.env.MONGO_URI,
// };
function production() {
  return process.env.MONGO_URI;
}
console.log("----------->>>>>> prod.js", process.env.MONGO_URI);
module.exports = production;
