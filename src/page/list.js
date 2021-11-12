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



const List = ({ navigation }) => {
    return (
        <Button
            title="Go to detail"
            onPress={() =>
                navigation.navigate('Detail', { item: 'item' })
            }
        />
    );
};

export default List;