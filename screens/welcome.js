import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert, SafeAreaView } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import styles from "./stylesheet";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { FocusedStatusBar } from "../components";
import { CircleButton, RectButton } from "../components";
import { Image } from "react-native";
export function WelcomeView({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, signUp, signIn } = useAuth();

    useEffect(() => {
        // If there is a user logged in, go to the Projects page.
        if (user != null) {
            navigation.navigate("Home");
        }
    }, [user]);

    // The onPressSignIn method calls AuthProvider.signIn with the
    // email/password in state.
    const onPressSignIn = async () => {
        console.log("Press sign in");
        try {
            await signIn(email, password);
        } catch (error) {
            Alert.alert(`Failed to sign in: ${error.message}`);
        }
    };

    // The onPressSignUp method calls AuthProvider.signUp with the
    // email/password in state and then signs in.
    const onPressSignUp = async () => {
        try {
            await signUp(email, password);
            signIn(email, password);
        } catch (error) {
            Alert.alert(`Failed to sign up: ${error.message}`);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <View style = {{
                height:100,
                top:10
            }}>
                {/* logo */}
                <Image
          source={assets.logo3}
          resizeMode= "contain"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
            </View>
            <View style={{
            top: 100,
            bottom: 0,
            right: 0,
            left: 0,
            alignSelf: "center",
            padding: 20,
            zIndex: 1,
            borderRadius: 10,
            backgroundColor: COLORS.gray,
            alignItems: "center"
            }}>
            
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: 25,
                color: COLORS.primary,
                padding:10
            }}> Sign up or sign in</Text>
                
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={setEmail}
                        value={email}
                        placeholder="email"
                        style={styles.inputStyle}
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        placeholder="password"
                        style={styles.inputStyle}
                        secureTextEntry
                    />
                </View>
                <View style={{
            marginTop: SIZES.font,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: 100
          }}>
                <RectButton minWidth={170} fontSize={SIZES.large} handlePress = {onPressSignIn} text = {"Sign In"} {...SHADOWS.dark} />
                <RectButton minWidth={170} fontSize={SIZES.large}  handlePress = {onPressSignUp} text = {"Sign Up"} {...SHADOWS.dark} />
               </View>
            </View>
        </SafeAreaView>
    );
}