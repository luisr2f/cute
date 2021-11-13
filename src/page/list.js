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
import { getNewsListRequestAction } from "../_store/newsList/actionCreators";
import {
    NEWS_LIST,
} from "../_store/newsList/actionTypes";


import { s } from "../_global/styleGlobal";


const List = ({


    isLoading,
    error,
    getNewsListRequestAction,
    response,
    navigation,

}) => {


    useEffect(() => {
        getNewsListRequestAction({});
    }, []);





    return (
        <View>






            <FlatList
                contentContainerStyle={s.flatList}
                data={response?.articles}
                renderItem={({ item, index }) => (
                    <Card key={index} item={item} onPress={() => { Alert.alert('test') }}>
                        <Card.Cover source={{ uri: item.urlToImage }} />
                        <Card.Actions style={s.infoDateCtn}>
                            <Text style={s.txtSec}>{moment(item.publishedAt).format("DD / MMMM / YYYY")}</Text>
                            <Text >star</Text>
                        </Card.Actions>
                        <Card.Content>
                            <Title>{item.title}</Title>
                            <Paragraph style={s.p}>{item.description}</Paragraph>
                        </Card.Content>
                        <Card.Actions style={{ alignSelf: "flex-end" }}>
                            <TouchableOpacity style={s.btn} activeOpacity={.8} onPress={() => { navigation.navigate('Detail', {item }) }}>
                                <Text style={s.btnTxt}>Leer más</Text></TouchableOpacity>
                        </Card.Actions>
                    </Card>

                )}
                ItemSeparatorComponent={() => { return (<View style={{height: 20}} />) }}
            />



            <Text>{/*JSON.stringify(response)*/}</Text>
        </View>
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
        getNewsListRequestAction: (query) => {
            dispatch(getNewsListRequestAction(query));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
