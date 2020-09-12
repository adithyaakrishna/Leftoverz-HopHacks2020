import { CurrentRenderContext } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, Button, StatusBar, StyleSheet } from "react-native";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import { Auth } from "../Services/Firebase";
import { Entypo } from "@expo/vector-icons";
import HomeTopTab from "../Navigators/HomeTopTab";

export default function HomeScreen({ navigation }) {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  return (
    console.log(navigation),
    <View style={{ flex: 1, justifyContent: "space-around" }}>
      <View
        style={{
          marginVertical: StatusBar.currentHeight + 20,
          marginHorizontal: 20,
        }}
      >
        <Entypo
          name="menu"
          size={40}
          color="#FD3A33"
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <HomeTopTab></HomeTopTab>
    </View>
  );
}

const Styles = StyleSheet.create({
  filterText:{
    fontSize: 22,
    color: '#4F3836'
  }
})
