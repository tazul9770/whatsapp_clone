import Button from "@/components/small/button";
import { storage } from "@/utils/utils";
import OTPInput from "@codsod/react-native-otp-input";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { login } from "@/redux/authSlice";

const VerifyOTP = () => {
  const dispatch = useDispatch();
  const [otp, setOTP] = useState("");
  const onPress = () => {
    storage.set("access_token", "ghsdghhjsdhjsd");
    dispatch(login());
    router.replace("/(main)");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrow-left" style={styles.backButton} />
        <Text style={styles.headTitle}>Enter OTP Code</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.otpSendText}>
          Code has been send to +880 134******23
        </Text>
        <OTPInput
          length={4}
          style={styles.otpContainer}
          onOtpComplete={(txt: string) => setOTP(txt)}
          inputStyle={styles.input_style}
        />
        <Text style={styles.otpSendText}>
          Resend Code in <Text style={styles.counterText}>56</Text> s
        </Text>
      </View>
      <View style={styles.footer}>
        <Button title="Verify" onPress={onPress} style={styles.verifyButton} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20),
    flex: 1,
    justifyContent: "space-between",
    paddingTop: verticalScale(30),
  },
  header: { flexDirection: "row", alignItems: "center", gap: scale(10) },
  backButton: {
    fontSize: moderateScale(24),
    color: "black",
    fontWeight: "bold",
  },
  headTitle: { fontWeight: "bold", fontSize: 20 },
  body: { alignItems: "center", gap: moderateScale(30) },
  otpSendText: { fontSize: moderateScale(16), fontWeight: "400" },
  resendText: {},
  footer: {},
  verifyButton: { padding: moderateScale(15), borderRadius: moderateScale(20) },
  counterText: { color: "#00A884", gap: verticalScale(25) },
  input_style: {
    borderColor: "black",
    borderRadius: moderateScale(10),
    height: verticalScale(50),
    width: scale(50),
  },
  otpContainer: { gap: scale(10) },
});

export default VerifyOTP;
