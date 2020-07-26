import React from 'react';
import {View, Text} from 'react-native';
import Header from './../../Component/Header/Header';

import {Container, Content, Card, CardItem, Body} from 'native-base';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    await fetch('https://hackathon02.herokuapp.com/users/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json);
        this.setState({users: json});
      })
      .catch((err) => console.log('new error', err));
  };
  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} screen="Home" />
        {this.state.users &&
          this.state.users.map((val, ind) => (
            <Card>
              <CardItem>
                <Body>
                  <Text>Name : {val.name}</Text>
                  <Text>Email : {val.email}</Text>
                  <Text>Age : {val.age} </Text>
                </Body>
              </CardItem>
            </Card>
          ))}
      </View>
    );
  }
}

export default Home;

// get

// fetch("http://localhost:8000/api/places", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     setPlaces(json.places);
//   });

// post

// fetch("http://localhost:8000/api/users/signup", {
//   method: "POST",
//   body: JSON.stringify({
//     name: name,
//     email: email,
//     password: password,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
