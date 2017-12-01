const arrString = ((arr) =>{
  if(Array.isArray(arr)){
    let ans = arr.filter((x)=> {
      if(typeof x === 'string'){
        return x;
      }
    })
    return ans;
  }else{
    return "Argument is not an Array";
  }  
});