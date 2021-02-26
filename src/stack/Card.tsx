import React, { ReactNode, useState } from "react"
import { LayoutChangeEvent, StyleSheet, View } from "react-native"
import { useWindowDimensions } from "../hooks/useWindowDimension"
import type { Layout } from "./Types"

type Props = {
  children: ReactNode
  header: (layout: Layout) => ReactNode
}

export const Card = ({ children, header }: Props) => {
  const dimensions = useWindowDimensions()

  const [layout, setLayout] = useState({
    width: dimensions.width,
    height: 0,
  })

  const handleLayoutChanged = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setLayout((current) => {
      if (width === current.width && height === current.height) {
        return current
      }

      return { width, height }
    })
  }

  return (
    <View onLayout={handleLayoutChanged}>
      {header(layout)}
      <View style={styles.wrapper}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})
