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
    Button,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { connect } from "react-redux";
import { getNewsListRequestAction } from "../_store/newsList/actionCreators";
import {
    NEWS_LIST,
} from "../_store/newsList/actionTypes";


const List = ({ //: React.FC<Props>


    isLoading,
    error,
    getNewsListRequestAction,
    response,


}) => {


    useEffect(() => {
        getNewsListRequestAction({});
    }, []);





    return (
        <>
            <Text>{JSON.stringify(response)}</Text>
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
        getNewsListRequestAction: (query) => {
            dispatch(getNewsListRequestAction(query));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
