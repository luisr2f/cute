import { StyleSheet } from "react-native";

import Col from '../../../_global/colors';


const c = StyleSheet.create({

  btnFav: {
    height: 50,
    width: 50,
    marginRight: -12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconActive: {
    color: Col.yellow,
  },
  icon: {
    color: Col.gray,
  },
  ai: {
    padding: 6,
  },

});

export default c;
