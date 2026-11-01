import imagePath from "@/constants/imagePath";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { height } = useWindowDimensions();

  useEffect(() => {
    let navTimer: ReturnType<typeof setTimeout> | undefined;

    // 2s por loading dekhabe, tarpor 3s por next screen e jabe
    const loadTimer = setTimeout(() => {
      setIsLoading(true);
      navTimer = setTimeout(() => {
        router.replace("/(auth)/terms_agree");
      }, 3000);
    }, 2000);

    // duto timer-i unmount e clear hobe
    return () => {
      clearTimeout(loadTimer);
      clearTimeout(navTimer);
    };
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { paddingVertical: Math.round(height * 0.06) }]}
    >
      <View />

      <View style={styles.body}>
        <Image
          source={imagePath.whatsapp_icon}
          style={styles.logo_style}
          resizeMode="contain"
        />
        <Text style={styles.whatsapp_text}>Whatsapp</Text>
      </View>

      <View style={[styles.footer, { height: Math.round(height * 0.11) }]}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(40)} color="#0CCC83" />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>From</Text>
            <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: { alignItems: "center", gap: moderateScale(10) },
  footer: { alignItems: "center", justifyContent: "flex-end" },
  from_text: { fontSize: moderateScale(15), color: "#867373" },
  facebook_text: { fontSize: moderateScale(20), color: "#000000" },
  logo_style: { width: moderateScale(60), height: moderateScale(60) },
  whatsapp_text: {
    fontSize: moderateScale(25),
    color: "#000000",
    fontWeight: "bold",
  },
  loading_text: {
    fontSize: moderateScale(20),
    color: "#00A883",
    fontWeight: "bold",
    marginTop: moderateScale(10),
  },
});

export default Auth;
