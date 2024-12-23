import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                statusBarTranslucent: true,
                statusBarStyle: "dark",
                navigationBarColor: "transparent",
                statusBarBackgroundColor: "transparent",
                headerBackButtonDisplayMode: "default",
            }}
        ></Stack>
    );
}
