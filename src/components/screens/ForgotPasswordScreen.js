import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Perform the logic for password recovery here
    // For demonstration purposes, we'll display an alert with the entered email
    Alert.alert("Password Recovery", `Recover password for: ${email}`);
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text>Enter your email to recover your password</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
