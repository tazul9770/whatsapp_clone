import Calls from "@/components/big/Calls";
import Chats from "@/components/big/Chats";
import Status from "@/components/big/Status";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

type PageKey = "chat" | "status" | "calls";

const TABS: { key: PageKey; label: string }[] = [
  { key: "chat", label: "Chats" },
  { key: "status", label: "Status" },
  { key: "calls", label: "Calls" },
];

// Tablet e moderateScale onek boro hoye jay, tai ekta limit rakhlam
const ms = (size: number) => Math.min(moderateScale(size), size * 1.3);

// Component er baire rakhlam, nahole proti render e notun kore toiri hoto
const WhatsAppHeader = () => {
  return (
    <View style={styles.whatsappHeaderStyle}>
      <Text style={styles.whatsappText} maxFontSizeMultiplier={1.2}>
        WhatsApp
      </Text>
      <View style={styles.iconContainer}>
        <Ionicons name="search" style={styles.headerIcon} />
        <Entypo name="dots-three-vertical" style={styles.headerIcon} />
      </View>
    </View>
  );
};

const Main = () => {
  const [currentPage, setCurrentPage] = useState<PageKey>("chat");

  const activePage = () => {
    switch (currentPage) {
      case "chat":
        return <Chats />;
      case "status":
        return <Status />;
      case "calls":
        return <Calls />;
      default:
        return <Chats />;
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor="#008069" barStyle="light-content" />

      {/* Green header + tabs: top notch er jayga-o green thakbe */}
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={styles.headerWrapper}
      >
        <WhatsAppHeader />
        <View style={styles.topBarContainer}>
          {TABS.map((item) => {
            const isActive = item.key === currentPage;
            return (
              <TouchableOpacity
                key={item.key}
                activeOpacity={0.7}
                onPress={() => setCurrentPage(item.key)}
                style={[
                  styles.topBarButton,
                  isActive && styles.topBarButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.topBarText,
                    !isActive && styles.topBarTextInactive,
                  ]}
                  numberOfLines={1}
                  maxFontSizeMultiplier={1.2}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>

      {/* Body: niche er gesture bar er jayga chere dey */}
      <SafeAreaView edges={["bottom", "left", "right"]} style={styles.body}>
        {activePage()}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "white" },
  body: { flex: 1, backgroundColor: "white" },

  headerWrapper: {
    backgroundColor: "#008069",
    // Header er niche halka chaya, jate body theke alada dekhay
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    zIndex: 1,
  },
  whatsappHeaderStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(12),
  },
  whatsappText: {
    fontSize: ms(22),
    fontWeight: "bold",
    color: "white",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(18),
  },
  headerIcon: {
    fontSize: ms(22),
    color: "white",
  },

  topBarContainer: {
    flexDirection: "row",
    backgroundColor: "#008069",
  },
  topBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderColor: "#008069",
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(4),
  },
  topBarButtonActive: { borderColor: "white" },
  topBarText: {
    fontSize: ms(13),
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  topBarTextInactive: { opacity: 0.7 },
});

export default Main;

{
  /* <View>
        <Button
          title="Logout (dev)"
          onPress={() => storage.remove("access_token")}
        />
      </View> */
}
