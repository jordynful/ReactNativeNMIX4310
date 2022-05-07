import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
          marginTop: -200,
          alignSelf: "center"
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
      
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
          marginTop: 15
        }}
      >
        ${price}
      </Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
    
    </View>
  );
};


export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge, 
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      {/* <EndDate /> */}
    </View>
  );
};


export const submitInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
     <Text style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}>
              To request this service, press the "Add Service" button below and someone will reach out through email to contact you for more information.
            </Text>
      {/* <EndDate /> */}
    </View>
  );
};