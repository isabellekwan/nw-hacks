import React from "react";
import { Button } from "react-native-paper";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Sign In Page </Text>
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({});
