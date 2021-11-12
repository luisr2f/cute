import * as React from 'react';
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



const Detail = ({ navigation, route }) => {
    return <Text>Detail{route.params.item}</Text>;
};

export default Detail;