const makePromise = require('./test/pot-plant');

const addSoil = makePromise('addSoil');
const plantSeed = makePromise('plantSeed');
const growPlant =  makePromise('growPlant');

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here
const potPlant = async(seed) =>{
  const soil = await addSoil()
  const plant = await plantSeed(seed)
  const callGrow = await growPlant(plant)
  return callGrow
}


/*******************************************************************************
 * Do not change code below this line.
 */

if (!exports) {
  var exports = {};
}
(function (exports) {
  try {
    exports.potPlant = potPlant;
  } catch (e) {
    exports.potPlant = () => { throw e };
  }
})(exports);
