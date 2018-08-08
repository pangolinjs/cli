/**
 * Create object from array
 * @param {[string, string]} entry Input array
 * @returns {{name:string, value:string}} Output object
 */
export default function (entry) {
  return {
    name: entry[0],
    value: entry[1]
  }
}
