import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Profile = ({ press }) => {
  const [date, setDate] = React.useState("");

  const getTime = () => {
    let newDate = new Date();
    setDate(
      `${newDate.getHours()}:${newDate.getMinutes()} ${
        newDate.getHours() <= 12 ? "AM" : "PM"
      } local time`
    );
  };

  React.useEffect(() => {
    getTime();
  });
  return (
    <>
      <View style={uiStyles.header}>
        <Text style={uiStyles.headerText}>Profile</Text>
      </View>
      <ScrollView
        style={{ display: "flex", height: "100%", flex: 1, width: "100%" }}
      >
        <View style={[uiStyles.center, { marginTop: 80 }]}>
          <Image
            style={uiStyles.profileImage}
            source={{
              uri: "https://ca.slack-edge.com/T05FFAA91JP-U05RHSNPE0L-2eaf45425f2e-512",
            }}
          />
        </View>

        <Text style={uiStyles.Fullname}>Timothy Adebogun</Text>
        <Text style={uiStyles.Title}>React native Developer</Text>
        <Text style={uiStyles.Title}>Email: timcodes117@gmail.com</Text>
        <Text style={uiStyles.Title}>
          <Image
            source={require("../assets/clock.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
          />
          {date}
        </Text>
        <Text style={uiStyles.Title}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 100,
              backgroundColor: "#00FF00",
            }}
          />{" "}
          Active
        </Text>

        <View style={uiStyles.center}>
          <TouchableOpacity style={uiStyles.githubBtn} onPress={() => press()}>
            <Image
              source={require("../assets/github.png")}
              resizeMode="contain"
              style={{ width: 40, height: 40 }}
            />
            <Text style={{ color: "white" }}>Open GitHub</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;

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
    zIndex: 1000,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a4a4a",
    width: "80%",
    marginLeft: 10,
  },
  profileImage: {
    width: "95%",
    height: 300,
    maxWidth: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gainsboro",
    marginTop: 20,
  },
  Fullname: {
    width: "100%",
    color: "#4a4a4a",
    fontSize: 30,
    fontWeight: "800",
    marginLeft: 10,
    marginTop: 20,
  },
  Title: {
    fontSize: 15,
    color: "#4a4a4a",
    fontWeight: "300",
    marginLeft: 10,
    marginTop: 5,
  },
  center: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  githubBtn: {
    width: "90%",
    height: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    borderRadius: 10,
    flexDirection: "row",
    gap: 20,
    maxWidth: 400
  },
});
