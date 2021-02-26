import * as React from "react"

import { ScrollView, StyleSheet, Text } from "react-native"
import {
  NavigationContainer,
  StackView,
} from "react-native-navigation-state-machine"

const Screen = () => {
  console.log("Rendered screen")
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Hi</Text>
    </ScrollView>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackView>
        <Screen />
      </StackView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
