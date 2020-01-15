import React, { Component } from "react"
import { Text, View } from "react-native"

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>Hello {this.props.name}</Text>
      </View>
    )
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: "center", top: 50 }}>
        <Greeting name="jame" />
        <Greeting name="joe" />
        <Greeting name="nancy" />
      </View>
    )
  }
}
