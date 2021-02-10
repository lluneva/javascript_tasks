import './assets/scss/styles.scss';

console.log('Howdy people!');
document.querySelector('#output').innerHTML = `Welcome to Javascript`;

const printResult = input => console.log(input);

// TODO Task 1
// Uzrakstīt funkciju, kura saņem ievadē masīvu, un kas atrod MAX ciparu, neizmantojot Math.max().

const getMax = array => {
  // logic here to get Max number of array, without using Math.getMax!!!
};

const TEST_1 = [1, 23, 3];
const TEST_2 = [100, 0, 99, 100, 200, 100];
const TEST_3 = [0, 0, 0, 1, 1, 1];

printResult(getMax(TEST_1)); => 23
printResult(getMax(TEST_2)); => 200
printResult(getMax(TEST_3)); => 1

// TODO Task 2
// Uzrakstīt funkciju, kura saņem ievadē masīvu (array) un izvada vidējo aritmētisko

const getAverage = inputArray => {
  // logic here
};

printResult(getAverage(TEST_1));
printResult(getAverage(TEST_2));
printResult(getAverage(TEST_3));

// TODO Task 3
// Uztaisīt funkciju , kas saņem skaitli un pārbauda vai skaitlis ir robežās [50 ...100), kur [ ir ieksaitot, ) neieskaitot . Atgriež true /false

const isWithinLimits = input => {
  // logic here
};
printResult(isWithinLimits(8));
printResult(isWithinLimits(100));
printResult(isWithinLimits(50));

// TODO Task 4
// Uzrakstīt funkciju, kas saņem ievadē 1 skaitli, Output => tiek izdrukāti visi skaitļi līdz input skaitlim ieskaitot (5 -> 0,1,2,3,4,5), vai (-5 -> -5,-4,-3,-2,-1)

const getNeededNumbers = input => {
  // logic here
};

printResult(getAllSmallerNumbers(9));
printResult(getAllSmallerNumbers(-9));

// TODO Task 5
// Uzrakstīt funkciju, kas sakārto INPUT masīva elementus pēc lieluma no mazākā uz lielāko

const orderArray = inputArr => {
  // logic here
};

printResult(orderArray(TEST_1));
printResult(orderArray(TEST_2));
printResult(orderArray(TEST_3));

// TODO Task 6
// Uzrakstīt funkciju, kas String masīvu, kurā glabājas veselu skaitļu vērtības, apstrādā tā lai ja konkrētais skaitlis dalās ar 3 bez atlikuma, skaitli aizvietot ar “fizz”, ja ar 5 tad ar “buzz”, ja gan ar 3,gan 5 tad “fizzBuzz”
//Piemērs
// [“1”,”2”,”3”,”5”,”8”,”30”,”15”,”12”,”7”] ->
// [“1”,”2”,”fizz”,”buzz”,”8”,”fizzBuzz”,”fizzBuzz”,”fizz”,”7”]

const getFizzBuzz = inputString => {
  // logic here
};

printResult(getFizzBuzz([['1', '2', '3', '5', '8', '30', '15', '12', '7']]));

// TODO Task 7
// Uzrakstīt funkciju, kura ievadē saņem vārdu un izvadē izvada Scrabble punktu skaitu vārdam.

// Piemērs CABBAGE => 14
// Letters: [AEIOULNRST] => vērtība 1
// Letters: [DG] => vērtība 2
// Letters: [BCMP] => vērtība 3
// Letters: [FHVWY] => vērtība 4
// Letters: [K] => vērtība 5
// Letters: [JX] => vērtība 8
// Letters: [QZ] => vērtība 10

const getScrabblePoints = inputName => {
  // logic here
};

printResult(getScrabblePoints('Cabbage'));

// TODO Task 8
// Uzrakstīt funkciju, kura no ievadē saņemtā vārda izveido akronīmu.
// Piemērs: First In, First Out -> FIFO

const getAcronym = inputString => {
  //logic here
};

printResult(getAcronym('First In, First Out'));
printResult(getAcronym('Elephants Xenophobia expressed low level ends native task'));

// TODO Task 9
// Uzrakstīt funkciju kas izdrukā objekta properties
const student = {
  name: 'David Rayy',
  class: 'VI',
  year: 2222,
};
// outputs: name, class, year

const getObjectKeys = inputObject => {
  // logic here
};

printResult(getObjectKeys(student));

//TODO Task 10
// Uzraktīt funkciju, kur tiek izdrukāts paziņojums atkarībā no readingStatus, ja tas ir TRUE: Already read
// ja false :  Not finished yet

var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

const getStatuses = arrayOfObjects => {
  // logic here
};

printResult(getStatuses(library));
