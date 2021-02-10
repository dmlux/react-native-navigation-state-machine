import * as React from "react"

import { StyleSheet, View, Text } from "react-native"
import {
  CardStack,
  NavigationContainer,
} from "react-native-navigation-state-machine"

export default function App() {
  return (
    <NavigationContainer>
      <CardStack>
        <View style={styles.container}>
          <Text>Hi</Text>
        </View>
      </CardStack>
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
