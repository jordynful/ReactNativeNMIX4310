import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";
import { RectButton, CircleButton, RectButton2 } from "./Button";
const HomeHeader = ({ onSearch }) => {
    const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.secondary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

    
         <Text style = {
             {fontFamily: FONTS.semiBold,
          fontSize: 50,
          color: COLORS.white,
         
          alignSelf: "center"}}>
             Jordyn Fulbright
         </Text>
         <RectButton2 minWidth={170} fontSize={SIZES.large} text={"Service Requests"} 
                {...SHADOWS.dark} 
                handlePress={() => navigation.navigate("request")}/>
          
        
      </View>

      <View style={{ marginVertical: SIZES.font }}>

       
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search services"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;