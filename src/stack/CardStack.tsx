import { Header } from "../components/Header"
import React, { ReactNode } from "react"
import { StyleSheet, View } from "react-native"
import { Card } from "./Card"

type Props = {
  children: ReactNode
}

export const CardStack = ({ children }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <Card>{children}</Card>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "red",
  },
})
