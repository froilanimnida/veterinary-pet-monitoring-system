import { Stack } from "expo-router";

export default function AuthLayout() {
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
        >
            <Stack.Screen name="login" options={{}} />
            <Stack.Screen name="sign-up" options={{}} />
        </Stack>
    );
}
