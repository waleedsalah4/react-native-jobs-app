import { ImageStyle, StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },

  //   btnImg: (dimension: number): ImageStyle => ({
  //     width: dimension,
  //     height: dimension,
  //     borderRadius: SIZES.small / 1.25,
  //   }),
});

export const getBtnImgStyle = (dimension: number): ImageStyle => ({
  width: `${dimension}%`,
  height: `${dimension}%`,
  borderRadius: SIZES.small / 1.25,
});

export default styles;
