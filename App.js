import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Profile from "./screens/profile";
import Github from "./screens/github";

export default function App() {
  const [currentScreen, setCScreen] = React.useState("profile");
  return (
    <SafeAreaView style={{ display: "flex", flex: 1, width: "100%" }}>
      <StatusBar style="dark" translucent={false} backgroundColor="white" />
      {currentScreen === "profile" ? (
        <Profile press={() => setCScreen("github")} />
      ) : (
        <Github goback={() => setCScreen("profile")} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
