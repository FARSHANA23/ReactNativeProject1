import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

//View is like div
//View will be mapped to Android View
//always wrap ur text with text component
/*numberOfLines helps text get truncated and keeps stuff in the number of
      lines u specify*/

export default function App() {
  console.log(require("./assets/icon.png"));

  const handlePress = () => console.log("Text Pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log("Text clicked")}>
        SARAH
      </Text>
      <Button
        title="OnClick"
        onPress={() =>
          Alert.alert("hi", "sup", [{ text: "Yes" }, { text: "No" }])
        }
      />
      <TouchableHighlight>
        <Image
          //blurRadius={6}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //means this view is flexible
    backgroundColor: "#fff",
    alignItems: "center", //putting our component in the center of the screen
    justifyContent: "center",
  },
});
