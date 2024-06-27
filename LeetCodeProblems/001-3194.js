//3194. Minimum Average of Smallest and Largest Elements
var minimumAverage = function (nums) {
  let n = nums.length;
  let averages = [];

  while (n > 0) {
    //first find the minimum value in the input, find the index for that minmunvalue, then remove that minumum element using slice and return the retured element array elemnt
    let minValue = nums.splice(nums.indexOf(Math.min(...nums)), 1);
    //do the same for that for maxValue
    let maxValue = nums.splice(nums.indexOf(Math.max(...nums)), 1);

    // Add the minval and maxval and get the avg and push it averages array
    averages.push((minValue[0] + maxValue[0]) / 2);

    // reduce the 2 element size since we are removing 2 elements for every two iterations
    n = n - 2;
  }

  //return the minvalue in the averages
  return Math.min(...averages);
};

//console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]));
console.log(minimumAverage([1, 9, 8, 3, 10, 5]));

// Output: 5.5
