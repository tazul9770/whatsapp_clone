import imagePath from "@/constants/imagePath";
import { Feather, MaterialIcons, Zocial } from "@expo/vector-icons";
import { FlatList, StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import MessageCard from "./MessageCard";

const Calls = () => {
  const data = [
    {
      image: imagePath.my_pic,
      name: "Tazul Islam",
      message: "Today, 2:00 pm",
      rightIcon: <MaterialIcons name="videocam" style={styles.callIcon} />,
      messageLeftIcon: (
        <Feather
          name="arrow-down-left"
          style={[styles.messageRightIcon, { color: "red" }]}
        />
      ),
    },
    {
      image: imagePath.polash_pic,
      name: "Rofiqul Polash",
      message: "Today, 1:05 pm",
      rightIcon: <Zocial name="call" style={styles.callIcon} />,
      messageLeftIcon: (
        <Feather name="arrow-up-right" style={styles.messageRightIcon} />
      ),
    },
    {
      image: imagePath.bashar_pic,
      name: "Habibul Bashar",
      message: "Yesterday, 9:00 pm",
      rightIcon: <Zocial name="call" style={styles.callIcon} />,
      messageLeftIcon: (
        <Feather name="arrow-up-right" style={styles.messageRightIcon} />
      ),
    },
    {
      image: imagePath.rahman_pic,
      name: "Abdur Rahman",
      message: "Yesterday, 5:41 pm",
      rightIcon: <MaterialIcons name="videocam" style={styles.callIcon} />,
      messageLeftIcon: (
        <Feather
          name="arrow-down-left"
          style={[styles.messageRightIcon, { color: "red" }]}
        />
      ),
    },
    {
      image: imagePath.aditya_pic,
      name: "Aditya Shutrodhar",
      message: "28 October, 9:11 am",
      rightIcon: <MaterialIcons name="videocam" style={styles.callIcon} />,
      messageLeftIcon: (
        <Feather
          name="arrow-down-left"
          style={[styles.messageRightIcon, { color: "red" }]}
        />
      ),
    },
    {
      image: imagePath.tanvir_pic,
      name: "Tanvir Hassan",
      message: "26 October, 12:20 pm",
      rightIcon: <Zocial name="call" style={styles.callIcon} />,
      messageLeftIcon: (
        <Feather
          name="arrow-down-left"
          style={[styles.messageRightIcon, { color: "red" }]}
        />
      ),
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <MessageCard
              name={item?.name}
              message={item?.message}
              image={item?.image}
              rightIcon={item?.rightIcon}
              messageLeftIcon={item?.messageLeftIcon}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  callIcon: {
    color: "#008069",
    fontSize: moderateScale(25),
  },
  messageRightIcon: {
    fontSize: moderateScale(15),
    color: "#008069",
  },
});

export default Calls;
