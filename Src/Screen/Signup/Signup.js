import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Input from './../../Component/Input/Input';

import {connect} from 'react-redux';
import {SignupFunc} from './../../Store/action.js';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  valueHandler = (data, name) => {
    this.setState({
      [name]: data,
    });
  };

  render() {
    // console.log(this.state);
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.formView}>
            <Image
              source={require('./../../Images/techtharlogo.401d5cd3.png')}
              style={styles.logo}
            />
            <Text style={styles.login}>Sign Up</Text>
            <Input
              iconName="user"
              placeHolder="User Name"
              type="FontAwesome"
              name="user_Name"
              onChangeText={this.valueHandler}
              security={false}
            />
            <Input
              iconName="user"
              placeHolder="User Age"
              type="FontAwesome"
              name="user_Age"
              onChangeText={this.valueHandler}
              security={false}
            />
            <Input
              iconName="email"
              placeHolder="User Email"
              name="user_Email"
              type="MaterialCommunityIcons"
              onChangeText={this.valueHandler}
              security={false}
            />
            <Input
              iconName="lock"
              placeHolder="User Password"
              type="FontAwesome"
              name="user_Password"
              onChangeText={this.valueHandler}
              security={true}
            />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                // console.log('===============>>>>>>>>', this.state);
                this.props.SignupFunc(this.state, this.props.navigation);
              }}>
              <Text style={styles.loginText}>Sign up</Text>
            </TouchableOpacity>
            <View style={styles.lastView}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingBottom: 50,
  },
  logo: {
    alignSelf: 'center',
    height: 60,
    width: 140,
    marginTop: 20,
  },
  formView: {
    alignSelf: 'center',
    width: '87%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    height: '100%',
    borderTopLeftRadius: 70,
    borderBottomRightRadius: 70,
    marginTop: 20,
    padding: 10,
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 6.68,
    elevation: 11,
  },

  login: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#142831',
    width: '90%',
    alignItems: 'center',
    borderRadius: 20,
    height: 50,
    padding: 10,
    marginTop: 20,
  },
  loginText: {
    fontSize: 20,
    color: 'white',
  },

  lastView: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    marginTop: 10,
  },
  forgetPassword: {
    marginRight: '30%',
  },
});

let mapStateToProps = (state) => {
  // console.log(state);
  return {
    ...state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    SignupFunc: (state, navigation) => dispatch(SignupFunc(state, navigation)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
