import {
  StyleSheet,
} from "react-native";


import Col from './colors';



export const s = StyleSheet.create({
  flatList: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 12,
  },

  cardAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 6, 
  },
  btnTxt: {
    fontSize: 16,
    color: Col.secondary,
  }

});












