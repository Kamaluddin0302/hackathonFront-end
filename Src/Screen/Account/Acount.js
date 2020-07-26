import React from 'react';
import {View, Text} from 'react-native';
import Backheader from './../../Component/BackHeader/Backheader';
class Acount extends React.Component {
  render() {
    return (
      <View>
        <Backheader navigation={this.props.navigation} />

        <Text>Acount</Text>
      </View>
    );
  }
}

export default Acount;
