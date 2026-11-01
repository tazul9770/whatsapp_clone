import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const MessageCard = ({
  name,
  message,
  time,
  count,
  image,
  imageStyle, // optional: image er upor extra style dite chaile (jemon status ring)
  logoComponent,
  rightIcon,
  messageLeftIcon,
  onPressFunction,
}: any) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      onPress={onPressFunction}
    >
      {/* Bam dik: chobi + naam + message */}
      <View style={styles.leftContainer}>
        <View>
          <Image source={image} style={[styles.image, imageStyle]} />
          {logoComponent}
        </View>

        {/* flex: 1 dewa hoyeche jate lomba text hole right side e na jay */}
        <View style={styles.textContainer}>
          <Text
            style={styles.name}
            numberOfLines={1}
            maxFontSizeMultiplier={1.2}
          >
            {name}
          </Text>
          <View style={styles.flexRow}>
            {messageLeftIcon}
            <Text
              style={styles.message}
              numberOfLines={1}
              maxFontSizeMultiplier={1.2}
            >
              {message}
            </Text>
          </View>
        </View>
      </View>

      {/* Dan dik: time + unread count + icon */}
      <View style={styles.rightContainer}>
        {!!time && (
          <Text style={styles.time} maxFontSizeMultiplier={1.2}>
            {time}
          </Text>
        )}
        {!!count && (
          <View style={styles.messageCountContainer}>
            <Text style={styles.messageCount} maxFontSizeMultiplier={1.2}>
              {count}
            </Text>
          </View>
        )}
        {rightIcon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(8),
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: scale(12),
  },
  textContainer: {
    flex: 1,
    gap: verticalScale(2),
  },
  image: {
    height: moderateScale(52),
    width: moderateScale(52),
    borderRadius: moderateScale(26),
  },
  name: {
    fontWeight: "bold",
    fontSize: moderateScale(15),
    color: "black",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(5),
  },
  message: {
    flexShrink: 1,
    fontSize: moderateScale(13),
    color: "#889095",
    fontWeight: "500",
  },
  rightContainer: {
    alignItems: "flex-end",
    gap: verticalScale(4),
    marginLeft: scale(8),
  },
  time: {
    color: "#998E8E",
    fontWeight: "500",
    fontSize: moderateScale(12),
  },
  // minWidth + paddingHorizontal: 2 digit (jemon 12) hole-o circle thik thake
  messageCountContainer: {
    backgroundColor: "#036A01",
    minWidth: moderateScale(20),
    height: moderateScale(20),
    paddingHorizontal: scale(5),
    borderRadius: moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  messageCount: {
    color: "white",
    fontSize: moderateScale(11),
    fontWeight: "bold",
  },
});

export default MessageCard;
