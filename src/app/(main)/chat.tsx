import imagePath from "@/constants/imagePath";
import colors from "@/styles/color";
import Chat from "@codsod/react-native-chat";
import { useState } from "react";
import { View } from "react-native";
import ChatHeader from "./chatHeader";

const ChatScreen = () => {
  const [messages, setMessages] = useState<any>([
    {
      _id: 1,
      text: "Hello",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Sopna Sheikh",
      },
    },
  ]);

  const onSendMessage = (text: string) => {
    const message = {
      _id: messages.length + 1,
      text,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "Tazul Islam",
      },
    };
    setMessages((prevMessages: any) => [message, ...prevMessages]);
  };
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <ChatHeader/>
      <Chat
        messages={messages}
        themeColor={colors.primary}
        themeTextColor={colors.white}
        showSenderAvatar={false}
        showReceiverAvatar={false}
        placeholder="Type a message..."
        inputBorderColor={colors.primary}
        backgroundColor={colors.lightGray}
        inputBackgroundColor={colors.lightGray}
        placeholderColor={colors.darkGray}
        backgroundImage={imagePath.dark_pic}
        showEmoji={true}
        onPressEmoji={() => alert("Emoji Button Pressed..")}
        showAttachment={true}
        onPressAttachment={() => alert("Attachment Button Pressed..")}
        setMessages={(val) => onSendMessage(val)}
        timeContainerColor="red"
        timeContainerTextColor="white"
        user={{
          _id: 1,
          name: "Tazul Islam",
        }}
        //onEndReached={() => alert("You have reached the end of the page")}
      />
    </View>
  );
};

export default ChatScreen;
