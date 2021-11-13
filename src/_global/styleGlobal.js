import {
  StyleSheet,
} from "react-native";


import Col from './colors';



export const s = StyleSheet.create({
  flatList: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 12,
  },

  infoDateCtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 6, 
  },
  btnTxt: {
    fontSize: 16,
    color: Col.secondary,
  },
  p: {
    fontSize: 16,
  },
  txtSec: {
    fontSize: 16,
    color: Col.gray,
  },
  ctn: {
    flex: 1,
    backgroundColor: Col.white,
  },
  scrll: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
  },




  detailImg: {
    height: 200,
    width: '100%',
    marginVertical: 12,
    //resizeMode: 'contain',
  },
  detailBtn: {
    paddingVertical: 20,
  }

});












