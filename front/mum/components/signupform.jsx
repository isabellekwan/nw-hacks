import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Formik } from "formik";
import { Button } from "react-native";
import { TextInput } from "react-native-paper";

export default function SignUpForm() {
  return (
    <Formik
      initialValues={{ email: "", username: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="name@example.com"
          />
          <TextInput
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
            placeholder="cheezwhizstan123"
          />
          <TextInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password]")}
            value={values.password}
            placeholder="securepassword123"
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
}
