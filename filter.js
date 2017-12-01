const arrString = ((inputArray) =>{
  if (Array.isArray(inputArray)){
    let filteredArray = inputArray.filter((item)=> {
      if(typeof item === 'string'){
        return item;
      }
    })
    return filteredArray;
  }else{
    return "Argument is not an Array";
  }  
});