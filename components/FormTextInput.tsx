import { StyleSheet, Text, TextInput } from "react-native";
import React from "react";
import { themes } from "./themes";

type FormTextInputProps = {
    placeholder?: string;
    label: string;
    value: string;
    onChangeText?: (text: string) => void;
};

const FormTextInput = ({ placeholder, label, value, onChangeText }: FormTextInputProps) => {
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} />
        </>
    );
};

export default FormTextInput;

const styles = StyleSheet.create({
    input: {
        fontFamily: themes.fontFace.fontFamily,
        fontSize: 16,
        padding: 16,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 4,
        width: "100%",
    },
    label: {
        fontFamily: themes.fontFace.fontFamily,
        fontSize: 16,
        marginBottom: 8,
    },
});
