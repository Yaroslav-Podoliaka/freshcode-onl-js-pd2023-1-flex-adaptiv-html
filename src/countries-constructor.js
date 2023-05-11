function getObj() {
  return this;
}
function Country(
  title = 'Ukraine',
  capital = 'Kyiv',
  population = '43.79 million people',
  area = 603700
  ) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;
  this.getCountry = getObj;
}

const ukraine = new Country();
const usa = new Country('USA', 'Washington', '331.9 million people', '9834000');
const france = new Country('France', 'Paris', '67.75 million people', '551695');
console.log(ukraine);
console.log(usa);
console.log(france);

function showProperties(Country) {
  for (const key in Country) {
    if (typeof Country[key] !== 'function') {
      console.log(`${key}: ${Country.getCountry()[key]}`);
    }
  }
}
showProperties(ukraine);
showProperties(usa);
showProperties(france);
