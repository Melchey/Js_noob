const makeNoise = function() {
  console.log("Pling!");
}

makeNoise();

const roundTo = function(number, places) {
    let Remainder = number % places;
    return number - Remainder + (Remainder < places / 2 ? 0 : places);
};
console.log(roundTo(3.14159, 0.01));
