import imagePath from "@/constants/imagePath";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.nameContainer}>
          <Ionicons
            name="arrow-back-sharp"
            style={styles.backIcon}
            onPress={() => router.back()}
          />
          <Image source={imagePath.my_pic} style={styles.image} />
          <Text style={styles.name}>Tazul Islam</Text>
        </View>
        <View style={styles.actionButtonContainer}>
          <Feather name="video" size={24} color="black" />
          <Ionicons name="call" size={24} color="black" />
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  backIcon: {
    fontSize: 24,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 24,
  },
  name: {
    fontSize: 21,
    fontWeight: "700",
    marginStart: 7,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});

export default ChatHeader;
