import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Input from './../../Component/Input/Input';

import {connect} from 'react-redux';
import {LoginFunc} from './../../Store/action.js';

class Login extends React.Component {
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
    console.log('Login FUnc', this.props.LoginLoader);
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('./../../Images/techtharlogo.401d5cd3.png')}
            style={styles.logo}
          />
          <View style={styles.formView}>
            <Text style={styles.login}>Login</Text>
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
                this.props.LoginFunc(this.state, this.props.navigation);
              }}>
              <Text style={styles.loginText}>
                Login {this.props.LoginLoader && '....'}
              </Text>
            </TouchableOpacity>

            <View style={styles.lastView}>
              <TouchableOpacity>
                <Text style={styles.forgetPassword}>Forget Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Signup')}>
                <Text>Signup</Text>
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
  },
  kayboard: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    height: 60,
    width: 140,
    marginTop: 40,
  },
  formView: {
    alignSelf: 'center',
    width: '87%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    height: '65%',
    borderTopLeftRadius: 70,
    borderBottomRightRadius: 70,
    marginTop: 30,
    padding: 10,
    marginBottom: 115,
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
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 40,
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
  console.log(state);
  return {
    ...state,
    LoginLoader: state.LoginLoader,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    LoginFunc: (state, navigation) => dispatch(LoginFunc(state, navigation)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
