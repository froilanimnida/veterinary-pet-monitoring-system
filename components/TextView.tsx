import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themes } from "./themes";

const TextView = ({ text }: { text: string }) => {
    return <Text style={styles.text}>{text}</Text>;
};

export default TextView;

const styles = StyleSheet.create({
    text: {
        fontFamily: themes.fontFace.fontFamily,
        fontSize: 16,
        padding: 16,
        width: "100%",
    },
});
