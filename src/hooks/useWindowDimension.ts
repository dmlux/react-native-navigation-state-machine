import { useCallback, useEffect, useState } from "react"
import { Dimensions, ScaledSize } from "react-native"

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get("window").width ?? 0,
    height: Dimensions.get("window").height ?? 0,
  })

  const onChangeWindowSize = useCallback(
    ({ window: { width, height } }: { window: ScaledSize }) => {
      setDimensions((current) => {
        if (width === current.width && height === current.height) {
          return current
        }

        return { width, height }
      })
    },
    [setDimensions]
  )

  useEffect(() => {
    onChangeWindowSize({ window: Dimensions.get("window") })
    Dimensions.addEventListener("change", onChangeWindowSize)
    return () => {
      Dimensions.removeEventListener("change", onChangeWindowSize)
    }
  }, [onChangeWindowSize])

  return dimensions
}
