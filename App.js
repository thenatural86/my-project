import React, { Component } from "react"
import { Text, View } from "react-native"

class Blink extends Component {
  state = { isShowingText: true }

  componentDidMount() {
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText
        })),
      1000
    )
  }

  render() {
    if (!this.state.isShowingText) {
      return null
    }
    return <Text>{this.props.text}</Text>
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={{ alignItems: "center", top: 200 }}>
        <Blink text="lets go" />
      </View>
    )
  }
}
