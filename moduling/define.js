//function checks if an input is an arrary or not
const checkArray = (args) => {
  if(Array.isArray(args)){
    return args;
  }else{
    return `Invalid parameter type ${typeof args} supplied`;
  }
};


// Export gives error (unexpected token) - 
// export const checkArray;

//this works however.
module.exports = checkArray;