import imagePath from "@/constants/imagePath";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import MessageCard from "./MessageCard";

const Status = () => {
  const data = [
    {
      image: imagePath.my_pic,
      name: "Tazul Islam",
      message: "10 minutes ago",
    },
    {
      image: imagePath.polash_pic,
      name: "Rofiqul Polash",
      message: "17 minutes ago",
    },
    {
      image: imagePath.bashar_pic,
      name: "Habibul Bashar",
      message: "31 minutes ago",
    },
    {
      image: imagePath.rahman_pic,
      name: "Abdur Rahman",
      message: "1 hour ago",
    },
    {
      image: imagePath.aditya_pic,
      name: "Aditya Shutrodhar",
      message: "2 hour ago",
    },
    {
      image: imagePath.tanvir_pic,
      name: "Tanvir Hassan",
      message: "Today, 7:27 am",
    },
  ];

  // List er ekdom upor: "My Status" + "Recent updates" lekha
  // ListHeaderComponent use korle puro screen ek shathe scroll hoy
  const header = (
    <View>
      <MessageCard
        name="My Status"
        message="Tap to add status update"
        image={imagePath.whatsapp_icon}
        logoComponent={
          <View style={styles.logoComponentContainer}>
            <Ionicons name="add" size={moderateScale(16)} color="white" />
          </View>
        }
      />
      <Text style={styles.sectionTitle}>Recent updates</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={data}
      keyExtractor={(item) => item.name}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={header}
      renderItem={({ item }) => (
        <MessageCard
          name={item.name}
          message={item.message}
          image={item.image}
          imageStyle={styles.statusRing}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: { flex: 1 },
  listContent: { paddingVertical: verticalScale(6) },
  sectionTitle: {
    fontSize: moderateScale(13),
    fontWeight: "600",
    color: "#889095",
    paddingHorizontal: scale(12),
    paddingTop: verticalScale(14),
    paddingBottom: verticalScale(6),
  },
  // chobir chardike shobuj ring (status dewa ache bujhate)
  statusRing: {
    borderWidth: 2,
    borderColor: "#008069",
  },
  // alignItems + justifyContent center: "+" icon thik majhkhane thakbe
  logoComponentContainer: {
    width: moderateScale(22),
    height: moderateScale(22),
    borderRadius: moderateScale(22),
    backgroundColor: "#008069",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: moderateScale(-3),
    right: moderateScale(-3),
    borderWidth: 2,
    borderColor: "black",
  },
});

export default Status;
