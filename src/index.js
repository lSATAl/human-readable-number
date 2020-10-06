    let units = { 0 : 'zero', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five', 6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine' };

    let extradezens = { 0 : 'zero', 00 : '', 10 : 'ten', 11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen', 15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen', 19 : 'nineteen', 20 : 'twenty', 30 : 'thirty', 40 : 'forty', 50 : 'fifty', 60 : 'sixty', 70 : 'seventy', 80 : 'eighty', 90 : 'ninety' };
    
    let dezens = { 0 : '', 2 : 'twenty ', 3 : 'thirty ', 4 : 'forty ', 5 : 'fifty ', 6 : 'sixty ', 7 : 'seventy ', 8 : 'eighty ', 9 : 'ninety ' };
    
    let hundreds = { 0 : '', 1 : 'one hundred ', 2 : 'two hundred ', 3 : 'three hundred ', 4 : 'four hundred ', 5 : 'five hundred ', 6 : 'six hundred ', 7 : 'seven hundred ', 8 : 'eight hundred ', 9 : 'nine hundred ' };
    

module.exports = function toReadable (num) {
    if(num === 0) {
    return 'zero'
    }
    let aHundereds = (num - (num % 100))/100;
let bDezens = num - (aHundereds * 100)
let aDezens = (bDezens - (bDezens % 10))/10;
let aUnits = num - aHundereds * 100 - aDezens * 10
let z = parseInt(String(aDezens) + String(aUnits));
let b = String(aDezens) + String(aUnits);
console.log(aHundereds);
console.log(aDezens);
console.log(aUnits);
console.log(z + ' это z');
console.log(b + ' это b');
if(b == 00)  {
console.log('!!!b исключение!!!')
  return hundreds[aHundereds].slice(0, -1)
} else if(z == 11 || z == 12 || z == 13 || z == 14 || z == 15 || z == 16 || z == 17 || z == 18 || z == 19 || z == 00 || z == 10 || z % 10 == 0){
  console.log('!!!z исключение!!!')
  return hundreds[aHundereds] + extradezens[z]
} else {
console.log('z не исключение')
return hundreds[aHundereds] + dezens[aDezens] + units[aUnits];
}
}
