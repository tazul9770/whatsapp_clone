import { storage } from "@/utils/utils";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false);
  const access_token = storage.getString("access_token");

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  useEffect(() => {
    // check here user is already login
    if (access_token) {
      setIsLogin(true);
    }
  }, [access_token]);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  );
};

export default RootLayout;

// import { Stack } from "expo-router";
// import { Provider } from "react-redux";
// import store from "../redux/store";

// const RootLayout = () => {
//   return (
//     <Provider store={store}>
//       <Stack></Stack>
//     </Provider>
//   );
// };

// export default RootLayout;
