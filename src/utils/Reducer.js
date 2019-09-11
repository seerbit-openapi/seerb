export const appReducer = (state, action) => {
  switch (action.type) {
    case "fetchInitialData": {
      return action.payload;
    }
    case "addNewProfile": {
      return [
        {
          id: Date.now(),
          name: action.name,
          email: action.email,
          phone: action.phone,
          country: action.country,
          birthDate: action.birthDate
        },
        ...state
      ];
    }
    case "removeFromList": {
      return state.filter(item => item.id !== action.id);
    }

    default:
      return state;
  }
};
