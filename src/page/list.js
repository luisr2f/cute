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
    StyleSheet,
    FlatList,
    RefreshControl,
    StatusBar,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
    Card,
    Title,
    Paragraph,
    Button,
    Icon,
} from 'react-native-paper';

import moment from "moment";
import "moment/locale/es";



import { connect } from "react-redux";
import { getNewsListRequestAction, getNewsListInitialAction } from "../_store/newsList/actionCreators";
import {
    NEWS_LIST,
} from "../_store/newsList/actionTypes";


import { s } from "../_global/styleGlobal";

import Favorite from "./_component/favorite/favorite";

import Col from '../_global/colors';


const List = ({


    isLoading,
    error,
    getNewsListRequestAction,
    getNewsListInitialAction,
    response,
    navigation,

}) => {

    const [Refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        getNewsListRequestAction();
    }, []);


    const onRefresh = () => {
        getNewsListInitialAction();
        getNewsListRequestAction();
    }






    return (
        <>
 <StatusBar backgroundColor={Col.secondaryOff} barStyle="light-content" />
        <View style={{ flex: 1 }}>

            {error&&
            <Text style={s.noResult}>{error}</Text>
            }


            {isLoading ?
                <View style={s.aiCnt}>
                    <ActivityIndicator style={s.ai} color={Col.secondary} size="small" />
                </View>

                :

                <FlatList
                    contentContainerStyle={s.flatList}
                    data={response}
                    renderItem={({ item, index }) => (
                        <Card key={index} item={item} >
                            {item.urlToImage!=''&&
                            <Card.Cover source={{ uri: item.urlToImage }} />
                            }
                            <Card.Actions style={s.infoDateCtn}>
                                <Text style={s.txtSec}>{moment(item.publishedAt).format("DD / MMMM / YYYY")}</Text>
                                <Favorite item={item} />
                            </Card.Actions>
                            <Card.Content>
                                <Title>{item.title}</Title>
                                <Paragraph style={s.p}>{item.description}</Paragraph>
                            </Card.Content>
                            <Card.Actions style={{ alignSelf: "flex-end" }}>
                                <TouchableOpacity style={s.btn} activeOpacity={.8} onPress={() => {
                                    navigation.navigate('Detail', { item });
                                }}>
                                    <Text style={s.btnTxt}>Leer más</Text></TouchableOpacity>
                            </Card.Actions>
                        </Card>

                    )}
                    ItemSeparatorComponent={() => { return (<View style={{ height: 20 }} />) }}
                    refreshControl={
                        <RefreshControl
                            refreshing={Refreshing}
                            onRefresh={onRefresh}
                            colors={[Col.secondary]}
                        />
                    }
                />
            }



        </View>
        </>

    );
};



//export default List;




const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading[NEWS_LIST],
        error: state.error[NEWS_LIST],
        response: state.newsListState.result,



    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNewsListRequestAction: () => {
            dispatch(getNewsListRequestAction());
        },
        getNewsListInitialAction: () => {
            dispatch(getNewsListInitialAction());
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
