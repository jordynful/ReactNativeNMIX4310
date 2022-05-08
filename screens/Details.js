import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, FocusedStatusBar } from "../components";

const DetailsHeader = ({ data, navigation }) => (
    <View style={{ width: "100%", height: 373 }}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
        />

        <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
        />


    </View>
);

const Details = ({ route, navigation }) => {
    const { data } = route.params;
    // const nav = useNavigation();
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#fff"
        }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />

            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    paddingVertical: SIZES.font,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0.5)",
                    zIndex: 1,
                }}
            >
                <DetailsHeader data={data} navigation={navigation} />
                <SubInfo />
                <View style={{ padding: SIZES.font, width:390 }}>
                    <DetailsDesc data={data} />



                </View>


                <RectButton minWidth={170} fontSize={SIZES.large} text={"Add Service"} 
                {...SHADOWS.dark} />
            </View>
        </SafeAreaView>
    );
};

export default Details;