import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
      return (
          <View style={{alignItems: 'center'}}>
              <Greeting name="Spenser" />
              <Greeting name="Koll" />
              <Greeting name="Rene"/>
          </View>
      )

    // return (
    //   <View style={styles.container}>
    //     <Text>Hello World</Text>
    //   </View>
    //
    // );

  }
}
class Greeting extends React.Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
