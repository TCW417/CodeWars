// this is the code Mario, Jenny and I whipped up at CF Monday evening:
function abbrevName(name) {
  let firstI = name[0];
  let spacePlace = name.indexOf(' ');
  let secondI = name[spacePlace+1];
  let result = `${firstI}.${secondI}`;
  return result;
}

// a refactored version of the same:
function abbrevName(name) {
  return `${name[0].toUpperCase()}.${name[name.indexOf(' ')+1].toUpperCase()}`;
}

// and this is what I came up with on the bus ride home:
function abbrevName(name){

  return name.replace(/^(.).*[ ](.).*/, '$1\.$2').toUpperCase();

}