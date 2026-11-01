import imagePath from "@/constants/imagePath";
import { router } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";
import MessageCard from "./MessageCard";

const Chats = () => {
  const onPressFunction = () => {
    router.navigate({
      pathname: "/chat",
    });
  };
  const data = [
    {
      image: imagePath.my_pic,
      name: "Tazul Islam",
      message: "Hello How Are You?",
      time: "8:23 pm",
      messageCount: 1,
    },
    {
      image: imagePath.polash_pic,
      name: "Rofiqul Polash",
      message: "Hello, Bhai kmn achen?",
      time: "3:22 pm",
      messageCount: 2,
    },
    {
      image: imagePath.bashar_pic,
      name: "Habibul Bashar",
      message: "Ki obostha job er",
      time: "9:23 pm",
      messageCount: 0,
    },
    {
      image: imagePath.rahman_pic,
      name: "Abdur Rahman",
      message: "Cholen mathe khelte jai",
      time: "9:07 pm",
      messageCount: 0,
    },
    {
      image: imagePath.aditya_pic,
      name: "Aditya Shutrodhar",
      message: "Ki Mia masters vorti hoba na",
      time: "5:43 pm",
      messageCount: 0,
    },
    {
      image: imagePath.tanvir_pic,
      name: "Tanvir Hassan",
      message: "Boro bhai bazare ashen",
      time: "8:29 pm",
      messageCount: 0,
    },
  ];

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={data}
      keyExtractor={(item) => item.name}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <MessageCard
          name={item.name}
          message={item.message}
          time={item.time}
          count={item.messageCount}
          image={item.image}
          onPressFunction={onPressFunction}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: { flex: 1 },
  // list er sheshe ektu jayga, jate last item niche e na lege thake
  listContent: { paddingVertical: verticalScale(6) },
});

export default Chats;
