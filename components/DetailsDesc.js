import React, { useState } from "react";
import { View, Text } from "react-native";

import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const DetailsDesc = ({ data }) => {
  

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {data.description}
            {/* {!readMore && "..."} */}
            
            </Text>
            <View style = {{
              marginTop: 80,
              backgroundColor:COLORS.secondary,
             
              padding:10,
              borderRadius:10
            }}>
            <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
            
            alignSelf: "center",
          
          }}
        >
          Request Service
        </Text>
        <Text style={{
              color: COLORS.white,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
              textAlign: "center"
            }}>
              To request this service, press the "Add Service" button below and someone will reach out through email to contact you for more information.
            </Text>
            </View>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;