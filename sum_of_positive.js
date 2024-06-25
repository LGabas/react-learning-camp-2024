function positiveSum(arr) {
  let newArr = []
  const sum = (accum, current_value) => accum + current_value;
  for (element in arr){
    if (typeof arr[element] === 'number' && arr[element] >= 0){
      console.log(arr[element])
      newArr.push(arr[element]);
    }
  }
  console.log(newArr)
  return newArr.reduce(sum, 0)
}

console.log(positiveSum([1,-1,2, 10, -2, '1', null]))