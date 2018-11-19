export const increment = (id) => {
  console.log(`increment called ${id}`);  
  return {
      type: "INCREMENT",
      payload: id
  };
};

export const decrement = (id) => {
  console.log(`decrement called ${id}`);  
  return {
      type: "DECREMENT",
      payload: id
  };
};

export const deleteHandle = (id) => {
  console.log(`deleteHandle called ${id}`);  
  return {
      type: "DELETE",
      payload: id
  };
}

export const reset = (id) => {
  console.log(`reset called ${id}`);  
  return {
      type: "RESET",
      payload: id
  };
}