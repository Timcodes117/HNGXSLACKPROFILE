import React, { useEffect } from "react";
import {
  BackHandler,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import WebView from "react-native-webview";
const Github = ({ goback }) => {
  const myGithubUrl = "https://github.com/Timcodes117";

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        goback();
        return true;
      }
    );

    return () => {
      backHandler.remove();
    };
  }, []);
  return (
    <>
      <View style={uiStyles.header}>
        <Text style={uiStyles.headerText}>Github</Text>
      </View>

      <WebView
        source={{ uri: myGithubUrl }}
        style={{ width: "100%", flex: 1, zIndex: -1, marginTop: 72 }}
      />
    </>
  );
};

export default Github;

const uiStyles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    borderBottomColor: "gainsboro",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    zIndex: 500,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a4a4a",
    width: "80%",
    marginLeft: 10,
  },
});
