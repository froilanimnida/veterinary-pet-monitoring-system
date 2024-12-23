import { StyleSheet } from "react-native";
import { themes } from "@/components/themes";

export const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 0,
    },

    primary: {
        backgroundColor: themes.primaryColor.backgroundColor,
    },
    outline: {
        backgroundColor: "#FFF",
    },
    danger: {
        backgroundColor: themes.danger.backgroundColor,
    },
});
