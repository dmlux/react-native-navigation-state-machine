import React from "react"
import { StyleSheet, Text, View } from "react-native"

type Props = {}

export const Header = ({}: Props) => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 88,
  },
})
