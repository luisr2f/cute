
import React, { useEffect } from "react";
import MainNavigator from "./src/page/main_navigator";
import { Provider } from "react-redux";
import configureStore from "./src/_store";

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    accent: 'yellow',
  },
};



export const store = configureStore();

const App = () => {

  return (

    <Provider store={store}>
 <PaperProvider>
      <MainNavigator />
</PaperProvider>
    </Provider>


  );
};

export default App;