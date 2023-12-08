import React from "react";
import { View, Button } from "react-native";
import LoginForm from "../forms/LoginForm";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

export default function LoginScreen(props) {
  const navigation = useNavigation(); // Get the navigation object

  const handleForgotPassword = () => {
    // Navigate to the "ForgotPassword" screen
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <LoginForm {...props} />

    {/* Add space between login form and forgot password */}
    <View style={{ marginTop: 20 }} />
      
      {/* Add a button to trigger navigation to the "ForgotPassword" screen */}
      <Button title="Forgot Password" onPress={handleForgotPassword} />
    </View>
  );
}
