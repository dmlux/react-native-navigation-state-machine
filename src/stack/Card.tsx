import React, { ReactNode } from "react"
import { ScrollView, StyleSheet } from "react-native"

type Props = {
  children: ReactNode
}

export const Card = ({ children }: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>{children}</ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "blue",
  },
})
