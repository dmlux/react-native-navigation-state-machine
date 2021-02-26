import React, { ReactNode } from "react"
import {
  EdgeInsets,
  SafeAreaInsetsContext,
} from "react-native-safe-area-context"
import { CardStack } from "./CardStack"
import { SafeAreaProviderContext } from "./SafeAreaProviderContext"

type Props = {
  children: ReactNode | ReactNode[]
}

export const StackView = ({ children }: Props) => {
  return (
    <SafeAreaProviderContext>
      <SafeAreaInsetsContext.Consumer>
        {(insets) => (
          <CardStack insets={insets as EdgeInsets}>{children}</CardStack>
        )}
      </SafeAreaInsetsContext.Consumer>
    </SafeAreaProviderContext>
  )
}
