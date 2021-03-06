import React, { ReactNode } from "react"
import {
  Platform,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Text,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import type { Layout } from "../stack/Types"

export const getDefaultHeaderHeight = (
  width: number,
  height: number,
  statusBarHeight: number
): number => {
  const isLandscape = width > height

  let headerHeight

  if (Platform.OS === "ios") {
    if (isLandscape && !Platform.isPad) {
      headerHeight = 32
    } else {
      headerHeight = 44
    }
  } else if (Platform.OS === "android") {
    headerHeight = 56
  } else {
    headerHeight = 64
  }

  return headerHeight + statusBarHeight
}

const headerStyle = (
  width: number,
  height: number,
  statusBarHeight: number,
  backgroundColor: string | undefined
) => {
  return StyleSheet.flatten([
    styles.header,
    {
      height: getDefaultHeaderHeight(width, height, statusBarHeight),
      backgroundColor,
    },
  ])
}

type Props = {
  layout: Layout
  statusBarHeight: number
  centerComponent: ReactNode | string
  leftComponent?: ReactNode
  rightComponent?: ReactNode
  barStyle?: StatusBarStyle
  backgroundColor?: string
}

export const Header = ({
  layout,
  statusBarHeight,
  centerComponent,
  barStyle,
  backgroundColor = "orange",
}: Props) => {
  return (
    <>
      <StatusBar
        barStyle={barStyle}
        translucent={true}
        backgroundColor={backgroundColor}
      />
      <SafeAreaView
        edges={["left", "top", "right"]}
        style={headerStyle(
          layout.width,
          layout.height,
          statusBarHeight,
          backgroundColor
        )}
      >
        <Text style={styles.title}>{centerComponent}</Text>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: StyleSheet.hairlineWidth,
        },
      },
      default: {
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    }),
    zIndex: 1,
  },
  title: Platform.select({
    ios: {
      fontSize: 17,
      fontWeight: "600",
    },
    android: {
      fontSize: 20,
      fontFamily: "sans-serif-medium",
      fontWeight: "normal",
    },
    default: {
      fontSize: 18,
      fontWeight: "500",
    },
  }),
})
