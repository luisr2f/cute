
import React, { useEffect } from "react";
import MainNavigator from "./src/page/main_navigator";
import { Provider } from "react-redux";
import configureStore from "./src/_store";

export const store = configureStore();

const App = () => {

  return (

    <Provider store={store}>

      <MainNavigator />

    </Provider>


  );
};

export default App;