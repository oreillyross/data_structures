function myReduce(arr, howToReduce, buildingUp) {
  for (let i = 0; i < arr.length; i++) {
    buildingUp = howToReduce(buildingUp, arr[i])
  }
  return buildingUp 
}

const add = (a, b) => a + b;

const summed = myReduce([1,2,3],  add, 0)

