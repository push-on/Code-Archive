const myData = ["google"];

console.log(typeof myData);


const types = getTypeScriptTypes(myData);

console.log(types);

function getTypeScriptTypes(data: any) {
  let types: any = {};
  for (let key in data) {
    if (typeof data[key] === 'object') {
      types[key] = getTypeScriptTypes(data[key]);
    } else {
      switch (typeof data[key]) {
        case 'string':
          types[key] = 'string';
          break;
        case 'number':
          types[key] = 'number';
          break;
        case 'boolean':
          types[key] = 'boolean';
          break;
        default:
          types[key] = 'any';
          break;
      }
    }
  }
  return types;
}