import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';
export default class HeaderNoShadow extends Component {
  render() {
    return (
      <Header noShadow style={{backgroundColor: '#142831'}}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.goBack(null)}>
            <Icon name="arrow-back" style={{fontSize: 20, color: 'black'}} />
          </Button>
        </Left>
        <Body>
          <Title>Header No Shadow</Title>
        </Body>
      </Header>
    );
  }
}
