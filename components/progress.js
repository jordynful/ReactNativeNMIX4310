import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";
import { Text } from "react-native";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";

const Prog = ({ data }) => {
    //   const navigation = useNavigation();

    return (
        <View style={{
            flexDirection: "row",
            backgroundColor: COLORS.gray,
            borderRadius: 10,
            height: 80,
            width: "90%",
            alignSelf: "center",
            justifyContent: "space-between",
            margin: 10
        }}>
            <View style={{
                height: "100%",
                width: 150
            }}>
                <Image
                    source={data.image}
                    resizeMode="cover"
                    style={{
                        height: "100%",
                        width: "100%"
                    }}>

                </Image>
                <Text style={{
                    fontFamily: FONTS.medium,
                    fontSize: 20,
                    color: COLORS.white,
                    margin: -50,
                    alignSelf:"center",
                    width:150,
                    textAlign: "center"


                }}> {data.name} </Text>
            </View>
            <Text style={{
                fontFamily: FONTS.light,
                fontSize: 15,
                color: COLORS.white,
                marginTop: 15,
            }}> {data.status} </Text>
        </View>


    );

};

export default Prog;