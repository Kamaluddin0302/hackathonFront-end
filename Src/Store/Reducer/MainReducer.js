let Initial_State = {};

let MainReducer = (state = Initial_State, action) => {
  console.log('================>>>>', state, action);
  switch (action.type) {
    case 'Please_Enter_All_Feilds': {
      return {
        ...state,
        LoginLoader: true,

        Error: action.type,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default MainReducer;
