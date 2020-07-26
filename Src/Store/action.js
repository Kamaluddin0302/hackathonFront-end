let LoginFunc = (state, navigation) => {
  // console.log('===========>>>>>>>>>', state);
  return async (dispatch) => {
    let {user_Name, user_Age, user_Email, user_Password} = state;
    if (
      user_Name === '' ||
      user_Age === '' ||
      user_Email === '' ||
      user_Password === ''
    ) {
      dispatch({
        type: 'Please_Enter_All_Feilds',
      });
    } else {
      return await fetch('https://hackathon02.herokuapp.com/users/login', {
        method: 'POST',
        body: JSON.stringify({
          name: user_Name,
          email: user_Email,
          password: user_Password,
          age: user_Age,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json.message === 'User not found!') {
            dispatch({
              type: 'Email_Not_Found',
            });
          } else if (json.message === 'Incorrect Email/Password!') {
            dispatch({
              type: 'Incorrect_Password',
            });
          } else {
            navigation.navigate('Home');
            dispatch({
              type: 'Login_Successfull',
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: 'Interne_Problem',
          });
        });
    }
  };
};

let SignupFunc = (state, navigation) => {
  console.log(state);
  return async (dispatch) => {
    let {user_Name, user_Age, user_Email, user_Password} = state;
    if (!user_Name || !user_Age || !user_Email || !user_Password) {
      dispatch({
        type: 'Please_Enter_All_Feilds',
      });
    } else {
      return await fetch('https://hackathon02.herokuapp.com/users/register', {
        method: 'POST',
        body: JSON.stringify({
          name: user_Name,
          email: user_Email,
          password: user_Password,
          age: user_Age,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);

          if (json.message === 'Email Already exists') {
            dispatch({
              type: 'Email_ALready_exists',
            });
          } else if (json.message === 'User registered successfully!') {
            navigation.navigate('Home');

            dispatch({
              type: 'User_registered_successfully!',
              payload: json,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: 'Interne_Problem',
            payload: err,
          });
        });
    }
  };
};

export {LoginFunc, SignupFunc};
