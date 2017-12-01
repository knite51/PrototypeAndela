const arrString = ((arr) =>{
  let ans = arr.filter((x)=> {
    if(typeof x === 'string'){
      return x;
    }
  })
  return ans;
})