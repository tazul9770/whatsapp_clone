import Button from "@/components/small/button";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CountryPicker, { CountryCode } from "react-native-country-picker-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

// Tablet / large screen e content stretch na hoye ei width e thakbe
const MAX_CONTENT_WIDTH = 480;

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [countryName, setCountryName] = useState("Bangladesh");
  const [cca2, setCca2] = useState<CountryCode>("BD");
  const [callingCode, setCallingCode] = useState("+880");
  const [phone, setPhone] = useState("");

  const onNextButtonClick = () => {
    router.push("/(auth)/verify_otp");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <View style={styles.heading_container}>
                <Text style={styles.heading}>Enter your phone number</Text>
                <Text style={styles.description}>
                  WhatsApp will need to verify your phone number.
                  <Text style={styles.link_description}>
                    {" "}
                    What's my number?
                  </Text>
                </Text>
              </View>

              <View style={styles.input_main_container}>
                <TouchableOpacity
                  style={styles.dropDown_container}
                  onPress={() => setVisible(true)}
                >
                  <View style={styles.dropDown_side} />
                  <Text
                    style={styles.dropDown_title}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {countryName}
                  </Text>
                  <View style={styles.dropDown_side}>
                    <AntDesign
                      name="caret-down"
                      size={moderateScale(20)}
                      color="black"
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.horizontal_line} />

                <View style={styles.input_container}>
                  <View style={styles.country_code}>
                    <Text style={styles.country_code_text}>{callingCode}</Text>
                    <View style={styles.horizontal_line} />
                  </View>
                  <View style={styles.input_wrapper}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter Your Phone Number"
                      value={phone}
                      onChangeText={setPhone}
                      keyboardType="phone-pad"
                      maxLength={15}
                    />
                    <View style={styles.horizontal_line} />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.footer}>
              <Button title="Next" onPress={onNextButtonClick} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {visible && (
        <CountryPicker
          visible={visible}
          countryCode={cca2}
          onClose={() => setVisible(false)}
          withFilter
          onSelect={(e: any) => {
            setCca2(e.cca2);
            setCallingCode(`+${e.callingCode[0]}`);
            setCountryName(typeof e.name === "string" ? e.name : e.name.common);
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  safe: { flex: 1 },
  // ScrollView: choto screen e scroll hobe, boro screen e space-between kaj korbe
  scroll: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: verticalScale(50),
    paddingHorizontal: scale(30),
  },
  content: {
    flex: 1,
    width: "100%",
    maxWidth: MAX_CONTENT_WIDTH,
    justifyContent: "space-between",
    gap: verticalScale(30),
  },
  header: { gap: verticalScale(40) },
  footer: { alignItems: "center" },
  heading_container: { gap: verticalScale(20) },
  input_main_container: {},
  heading: {
    fontSize: moderateScale(25),
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: moderateScale(15),
    fontWeight: "400",
    color: "black",
  },
  link_description: { color: "#002AC0" },
  horizontal_line: {
    width: "100%",
    height: StyleSheet.hairlineWidth > 0 ? Math.max(verticalScale(1), 1) : 1,
    backgroundColor: "#05AA82",
  },
  dropDown_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(10),
  },
  // duto side er width soman, jate country name thik majhkhane thake
  dropDown_side: { width: moderateScale(24), alignItems: "flex-end" },
  dropDown_title: {
    flex: 1,
    textAlign: "center",
    fontSize: moderateScale(15),
    fontWeight: "500",
    color: "black",
  },
  input_container: {
    paddingVertical: verticalScale(10),
    flexDirection: "row",
    alignItems: "center",
    gap: scale(15),
  },
  country_code: { gap: verticalScale(10), minWidth: moderateScale(60) },
  input_wrapper: { gap: verticalScale(10), flex: 1 },
  input: {
    fontSize: moderateScale(14),
    fontWeight: "300",
    color: "black",
    paddingVertical: 0,
  },
  country_code_text: {
    fontSize: moderateScale(15),
    fontWeight: "500",
    color: "black",
    textAlign: "center",
  },
});

export default Login;
