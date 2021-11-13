import React, { Dispatch, useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    Alert,
    ActivityIndicator,
    TouchableOpacity,
    Dimensions,
    Platform,
    Modal,
    ScrollView,
    Linking,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { s } from "../_global/styleGlobal";

import moment from "moment";
import "moment/locale/es";

import {
    Card,
    Title,
    Paragraph,
    Button,
    Icon,
} from 'react-native-paper';

import Favorite from "./_component/favorite/favorite";


const Detail = ({ navigation, route }) => {

    const [item, setItem] = useState([]);
    moment.locale('es');

    useEffect(() => {
        setItem(route.params?.item ?? []);
    }, [route.params]);



    return (
        <View style={s.ctn}>
            <ScrollView style={s.scrll} keyboardShouldPersistTaps='handled'>
                <View style={[s.infoDateCtn, { paddingHorizontal: 0, paddingBottom: 12, }]}>
                    <Text style={s.txtSec}>{moment(item.publishedAt).format("DD / MMMM / YYYY")}</Text>
                   
                    <Favorite item={item} />
                   
                </View >

                <Title>{item.title}</Title>

                {item.urlToImage != '' &&
                <Image style={s.detailImg} source={{ uri: item.urlToImage }} />
                }

                {item.author != '' &&
                    <Text style={s.txtSec}>{item.author}</Text>
                }

                {item.content && item.content != '' &&
                    <Text style={s.p}>{item.content}</Text>
                }
                <View style={s.detailBtn}>
                    <TouchableOpacity style={[s.btn, { paddingHorizontal: 6 }]} activeOpacity={.8} onPress={async () => {
                        const supported = await Linking.canOpenURL(item.url);
                        if (supported) {
                            await Linking.openURL(item.url);
                        } else {
                            Alert.alert(`No es posible abrir la siguiente url: ${item.url}`);
                        }
                    }}>
                        <Text style={s.btnTxt}>Ver el artículo completo en la fuente </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );

};

export default Detail;