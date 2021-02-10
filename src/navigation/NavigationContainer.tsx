import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const NavigationContainer = ({ children }: Props) => {
  return <>{children}</>
}
