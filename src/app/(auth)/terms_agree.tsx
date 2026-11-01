import Button from "@/components/small/button";
import imagePath from "@/constants/imagePath";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale } from "react-native-size-matters";

const TermsAgree = () => {
  const { width, height } = useWindowDimensions();

  // Chhoto phone, boro phone, tablet shobay image fit korbe
  const imageSize = Math.min(width * 0.8, height * 0.4, 340);
  const onAgree = () => {
    router.push("/(auth)/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scroll,
          { paddingVertical: Math.round(height * 0.06) },
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
          <Image
            source={imagePath.welcome_pic}
            style={{ width: imageSize, height: imageSize }}
            resizeMode="contain"
          />
          <Text style={styles.description_text}>
            Read our <Text style={styles.link_text}>Privacy Policy</Text>. Tap
            "agree and continue" to accept the{" "}
            <Text style={styles.link_text}>Terms of Service</Text>
          </Text>
          <Button title="AGREE AND CONTINUE" onPress={onAgree} />
        </View>

        <View style={[styles.footer, { height: Math.round(height * 0.11) }]}>
          <Text style={styles.from_text}>From</Text>
          <Text style={styles.facebook_text}>Facebook</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  scroll: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
  },
  header: {
    width: "100%",
    maxWidth: 480,
    alignItems: "center",
    gap: moderateScale(20),
  },
  footer: { alignItems: "center", justifyContent: "flex-end" },
  from_text: { fontSize: moderateScale(15), color: "#867373" },
  facebook_text: {
    fontSize: moderateScale(20),
    color: "#000000",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  welcome_text: {
    fontSize: moderateScale(25),
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  description_text: {
    textAlign: "center",
    fontSize: moderateScale(15),
    color: "black",
  },
  link_text: { color: "#0C42CC" },
});

export default TermsAgree;
