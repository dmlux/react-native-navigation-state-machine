import { Header } from "../components/Header"
import React, { ReactNode } from "react"
import { StyleSheet, View } from "react-native"
import { Card } from "./Card"
import type { EdgeInsets } from "react-native-safe-area-context"
import type { Layout } from "./Types"

type Props = {
  insets: EdgeInsets
  children: ReactNode
}

export const CardStack = ({ children, insets }: Props) => {
  const renderHeader = (layout: Layout) => (
    <Header
      layout={layout}
      statusBarHeight={insets.top}
      centerComponent={"Ein Test-Titel"}
    />
  )

  return (
    <View style={styles.wrapper}>
      <Card header={renderHeader}>{children}</Card>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})
