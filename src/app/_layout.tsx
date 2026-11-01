import { Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";

SplashScreen.preventAutoHideAsync();

interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
  product: string;
}

const AuthGuard = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    SplashScreen.hideAsync().catch(() => {
      // Splash screen already hidden or unavailable
    });
  }, []);

  return isAuthenticated ? (
    <Redirect href={"/(main)"} />
  ) : (
    <Redirect href={"/(auth)"} />
  );
};

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AuthGuard />
    </Provider>
  );
}
