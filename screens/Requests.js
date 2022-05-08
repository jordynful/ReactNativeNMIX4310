import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import { OnGoing } from "../constants/ongoing";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, FocusedStatusBar, Prog } from "../components";

const DHeader = ({ navigation }) => (
    <View style={{
        width: "100%", height: 250

    }}>
        <Image
            source={assets.logo3}
            resizeMode="contain"
            style={{
                width: 100,
                alignSelf: "center"
            }}
        />

        <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={0}
            top={StatusBar.currentHeight + 10}
        />
        <Text style={{
            fontFamily: FONTS.bold,
            fontSize: 35,
            color: COLORS.primary,
            margin: -50,
            ...SHADOWS.light,
            alignSelf: "center"
        }}>Requests</Text>

    </View>
);

const Req = ({ route, navigation }) => {
    const [requ, setRequ] = useState(OnGoing);

    // const { data } = route.params;
    // const nav = useNavigation();
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={requ}
                        renderItem={({ item }) => <Prog data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<DHeader navigation={navigation} />}
                    />
                </View>
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        zIndex: -1,
                    }}
                >
                    <View
                        style={{ height: 300, backgroundColor: COLORS.white }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.secondary }} />
                </View>

            </View>



        </SafeAreaView>
    );
};

export default Req;