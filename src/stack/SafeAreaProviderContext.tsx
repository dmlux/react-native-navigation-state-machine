import React, { ReactNode } from "react"
import { Dimensions } from "react-native"
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
  initialWindowMetrics,
  Metrics,
} from "react-native-safe-area-context"
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper"

const initialSafeAreaMetrics: Metrics = {
  insets: {
    top: initialWindowMetrics?.insets?.top ?? getStatusBarHeight(),
    right: initialWindowMetrics?.insets?.right ?? 0,
    bottom: initialWindowMetrics?.insets?.bottom ?? getBottomSpace(),
    left: initialWindowMetrics?.insets?.left ?? 0,
  },
  frame: {
    x: 0,
    y: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
}

type Props = {
  children: ReactNode
}

export const SafeAreaContextProvider = ({ children }: Props) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => {
        // swallow existing providers to prevent nesting such providers
        if (insets !== null) {
          return children
        }

        return (
          <SafeAreaProvider initialMetrics={initialSafeAreaMetrics}>
            {children}
          </SafeAreaProvider>
        )
      }}
    </SafeAreaInsetsContext.Consumer>
  )
}
