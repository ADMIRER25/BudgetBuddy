// reducer => a function which takes in the old state and an action => returns a new state
//action specifies how we want to change the old state

const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);
      localStorage.setItem('transactions',JSON.stringify(transactions));
      return transactions;
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      localStorage.setItem('transactions',JSON.stringify(transactions));
      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
