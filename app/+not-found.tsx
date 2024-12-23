import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { themes } from "@/components/themes";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! Not Found" }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    Go back to Home screen!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.backgroundColor.backgroundColor,
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
    },
});
