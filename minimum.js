/*The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can write a function like that ourselves now. Define
the function min that takes two arguments and returns their minimum.*/

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Example usage:
{

  console.log(min(2, 5));
  console.log(min(3, -1));
  console.log(min(1, 1));
  
}