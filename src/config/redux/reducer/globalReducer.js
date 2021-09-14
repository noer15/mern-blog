const initialState = {
  name: "Nur Hidayat",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Nuhi",
    };
  }
  return state;
};

export default globalReducer;
