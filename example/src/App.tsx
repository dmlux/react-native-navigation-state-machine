import * as React from "react"

import { ScrollView, StyleSheet, Text } from "react-native"
import {
  NavigationContainer,
  StackView,
} from "react-native-navigation-state-machine"

export default function App() {
  return (
    <NavigationContainer>
      <StackView>
        <ScrollView contentContainerStyle={styles.container}>
          <Text>Hi</Text>
        </ScrollView>
      </StackView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
})
