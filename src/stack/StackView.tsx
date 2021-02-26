import React, { ReactNode } from "react"
import {
  EdgeInsets,
  SafeAreaInsetsContext,
} from "react-native-safe-area-context"
import { CardStack } from "./CardStack"
import { SafeAreaContextProvider } from "./SafeAreaProviderContext"

type Props = {
  children: ReactNode | ReactNode[]
}

export const StackView = ({ children }: Props) => {
  return (
    <SafeAreaContextProvider>
      <SafeAreaInsetsContext.Consumer>
        {(insets) => (
          <CardStack insets={insets as EdgeInsets}>{children}</CardStack>
        )}
      </SafeAreaInsetsContext.Consumer>
    </SafeAreaContextProvider>
  )
}
