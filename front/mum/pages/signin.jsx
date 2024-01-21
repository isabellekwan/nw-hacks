import React from "react";
import { Button } from "react-native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpForm from "../components/signupform";

function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="PUT LOGGING IN STUFF HERE"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Create New Account</Text>
      <SignUpForm />
      <Button title="Sign Up" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function Option({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Log In" onPress={() => navigation.navigate("LogIn")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function SignIn() {
  return (
    <View>
      <Stack.Navigator initialRouteName="Option">
        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </View>
  );
}

// export default function SignIn({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Button title="Log In" onPress={() => navigation.navigate("Home")} />
//       <Button title="Sign Up" onPress={() => navigation.navigate("Home")} />
//     </View>
//   );
// }

const styles = StyleSheet.create({});
