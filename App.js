import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
  }

  render() {
    return (
      <View style={{ backgroundColor: "skyblue" }}>
        <TextInput
          style={{ height: 100 }}
          placeholder="Type Here "
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    )
  }
}
