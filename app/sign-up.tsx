import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const SignUp = () => {
  const [countryCode, setCountryCode] = useState("+92");
  const [phoneNumber, setPhoneNumber] = useState("");

  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const onSignUp = async () => {};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's ge started!</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number, we will send you a confirmation code there
        </Text>
        <View style={styles.inputContianer}>
          <TextInput
            placeholder="Country code"
            keyboardType="number-pad"
            value={countryCode}
            placeholderTextColor={Colors.gray}
            style={styles.input}
          />
          <TextInput
            placeholder="Mobile number"
            placeholderTextColor={Colors.gray}
            keyboardType="number-pad"
            style={[styles.input, { flex: 1 }]}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <Link asChild href={"/login"} replace>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </Link>

        <View style={{ flex: 1 }} />
        <TouchableOpacity
          onPress={onSignUp}
          style={[
            defaultStyles.pillButton,
            phoneNumber !== "" ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
        >
          <Text style={defaultStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  inputContianer: {
    marginVertical: 40,
    flexDirection: "row",
    gap: 10,
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
