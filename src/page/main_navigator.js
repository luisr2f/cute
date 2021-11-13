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

import ListScreen from "./list";
import DetailScreen from "./detail";
import ColorPropType from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

const Stack = createNativeStackNavigator();

import Col from '../_global/colors';



const CuteStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ListScreen} options={{
                    title: 'Titulares Principales',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 22, },
                    headerStyle: { backgroundColor: Col.secondary },
                    headerTitleStyle: { color: Col.white },
                }} />
                <Stack.Screen name="Detail" component={DetailScreen} options={{
                    title: '',
                    headerStyle: { backgroundColor: Col.secondary },
                    headerTitleStyle: { color: Col.white },
                    headerTintColor: Col.white,
                }}  />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default CuteStack;