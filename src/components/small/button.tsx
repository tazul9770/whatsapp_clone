import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

type ButtonProps = {
  title: string;
} & Omit<TouchableOpacityProps, "children">;

const Button = ({ title, style,  onPress, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      accessibilityRole="button"
      style={[styles.btn, style]}
      {...rest}
      onPress={onPress}
    >
      <Text style={styles.btn_text} numberOfLines={1} adjustsFontSizeToFit>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#00A884",
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    minHeight: moderateScale(44),
    justifyContent: "center",
    paddingVertical: moderateScale(10),
    paddingHorizontal: scale(16),
    borderRadius: moderateScale(4),
  },
  btn_text: {
    color: "white",
    fontSize: moderateScale(14),
    textAlign: "center",
  },
});

export default Button;
