import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Button } from "react-native-paper";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Home Screen </Text>
      <Button title="Back" onPress={() => navigation.navigate("SignIn")} />
    </View>
  );
}

const styles = StyleSheet.create({});
