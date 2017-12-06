// function checks if an input is an arrary or not
const checkArray = (args) => {
  if (Array.isArray(args)) {
    return args;
  } else {
    return `Invalid parameter type ${typeof args} supplied`;
  }
};

// export module/function
export default checkArray;
