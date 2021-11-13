import React, { Dispatch, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
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

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import { s } from "../_global/styleGlobal";
import c from "./style";

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import Col from '../../../_global/colors';

const Favorite = ({

    item,
}) => {

    const [isLoading, setIsLoading] = useState(true);

    const [active, setActive] = useState(false);

    const [fav, setFav] = useState([]);

    const { getItem, setItem } = useAsyncStorage('@favorite');

    const navigation = useNavigation();


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            readStorage();
        });
        return unsubscribe;
    }, [navigation]);



    useEffect(() => {
        readStorage();
    }, [item]);




    const readStorage = async () => {

        setIsLoading(true);

        try {
            const items = await getItem();
            if (items != null) {
                let obj = JSON.parse(items);

                if (obj.length == 0) {
                    setActive(false);
                }

                let urls = []
                obj.map((objItem) => {
                    urls.push(objItem.url);
                });

                if (urls.includes(item.url)) {
                    setActive(true);
                } else {
                    setActive(false);
                }

                setFav(obj);
                setIsLoading(false);
            } else {
                setActive(false);
                setIsLoading(false);
            }

        } catch (e) {
            console.log(e);
        }



    };






    async function actionFav() {
        readStorage();

        try {
            let temp = [];

            if (active) {
                fav.map((objItem) => {
                    if (objItem.url != item.url) {
                        temp.push(objItem);
                    }
                });

            } else {
                temp = [...fav, {
                    "author": item.author ?? '',
                    "title": item.title ?? '',
                    "url": item.url ?? '',
                    "urlToImage": item.urlToImage ?? '',
                    "content": item.content ?? '',
                    "publishedAt": item.publishedAt ?? '',
                    "description": item.description ?? '',
                }]
            }



            await setItem(JSON.stringify(temp));

            readStorage();
        } catch (e) {
            Alert.alert('Error', e);
        }


    }

    return (
        <>
            <TouchableOpacity disabled={isLoading} style={c.btnFav} activeOpacity={.8} onPress={actionFav}>
                {active ?
                    <IconFontAwesome style={c.iconActive} name="star" size={24} />
                    :
                    <IconFontAwesome style={c.icon} name="star-o" size={24} />
                }
            </TouchableOpacity>
        </>
    );

};

export default Favorite;