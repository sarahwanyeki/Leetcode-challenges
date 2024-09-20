function sortedSquared(array){
  const newArray = new Array(array.length).fill(0)
  for(let i=0; i<array.length; i++){
    newArray[i]=Math.pow(array[i],2)//double the array
  }
  //sort the new array
  newArray.sort(function(a,b){
    return a-b
  })
  return newArray
}

//let us test if our function is working
a=[1,2,3,4,5]
b=[-3,-7,-2,8,24]
c=[]

console.log(sortedSquared(a));
console.log(sortedSquared(b));
console.log(sortedSquared(c));