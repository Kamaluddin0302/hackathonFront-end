let Initial_State = {
  user: '',
  LoginLoader: false,
};

let AuthReducer = (state = Initial_State, action) => {
  console.log('================>>>>', state, action);
  switch (action.type) {
    case 'Please_Enter_All_Feilds': {
      return {
        ...state,
        LoginLoader: true,

        Error: action.type,
      };
    }

    case 'Email_ALready_exists': {
      return {
        ...state,
        LoginLoader: true,
        Error: action.type,
      };
    }

    case 'User_registered_successfully': {
      return {
        ...state,
        LoginLoader: true,

        user: action.payload,
      };
    }

    case 'Interne_Problem': {
      return {
        ...state,
        LoginLoader: true,
        Error: action.type.concat(),
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default AuthReducer;
