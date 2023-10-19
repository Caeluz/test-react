import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Keyboard,
} from "react-native";

const Chat = () => {
  const [userText, setUserText] = useState("");
  const [userMessages, setUserMessages] = useState([]);
  const [otherUserMessages, setOtherUserMessages] = useState([]);
  const [combinedMessages, setCombinedMessages] = useState([]);

  const generateRandomMessage = () => {
    const randomMessages = [
      "Hello!",
      "How are you?",
      "Nice weather today.",
      "What's up?",
      "I'm here!",
    ];
    return randomMessages[Math.floor(Math.random() * randomMessages.length)];
  };

  const sendMessage = () => {
    if (userText.trim() !== "") {
      const newUserMessage = {
        text: userText,
        user: "You",
        timestamp: Date.now(),
      };
      setUserMessages([...userMessages, newUserMessage]);
      setUserText("");
      Keyboard.dismiss();

      setTimeout(() => {
        const randomMessage = generateRandomMessage();
        const newOtherUserMessage = {
          text: randomMessage,
          user: "Other User",
          timestamp: Date.now(),
        };
        setOtherUserMessages([...otherUserMessages, newOtherUserMessage]);
      }, 1000);
    }
  };

  const resetConversation = () => {
    setUserMessages([]);
    setOtherUserMessages([]);
    setCombinedMessages([]);
  };

  useEffect(() => {
    const allMessages = [...userMessages, ...otherUserMessages];
    const sortedMessages = allMessages.sort(
      (a, b) => a.timestamp - b.timestamp
    );
    setCombinedMessages(sortedMessages);
  }, [userMessages, otherUserMessages]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {combinedMessages.map((message, index) => (
          <View
            key={index}
            style={
              message.user === "You" ? styles.rightMessage : styles.leftMessage
            }
          >
            <Text>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setUserText}
          value={userText}
          placeholder="Enter Message"
          onSubmitEditing={sendMessage}
        />
        <Pressable onPress={sendMessage} style={styles.enterButton}>
          <Text style={styles.enterButtonText}>Enter</Text>
        </Pressable>
        <Pressable onPress={resetConversation} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 13,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  enterButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 13,
  },
  resetButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 13,
  },
  enterButtonText: {
    margin: 1,
    color: "white",
  },
  resetButtonText: {
    color: "white",
  },
  rightMessage: {
    backgroundColor: "#3fc6fc",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  leftMessage: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
});

export default Chat;
