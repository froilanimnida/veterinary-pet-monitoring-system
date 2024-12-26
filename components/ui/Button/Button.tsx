import { Pressable, StyleSheet, Text, Platform } from "react-native";
import { themes } from "@/components/themes";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { useFonts } from "expo-font";

type ButtonProps = {
    onPress: () => void;
    label: string;
    type: "primary" | "outline" | "danger";
    icon?: keyof typeof MaterialIcons.glyphMap;
    disabled?: boolean;
};

export const Button = ({ onPress, label, type, icon, disabled }: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyles = StyleSheet.flatten([
        styles.button,
        type === "primary" && styles.primary,
        type === "outline" && styles.outline,
        type === "danger" && styles.danger,
        isHovered && styles.hovered,
        disabled && styles.disabled,
    ]);

    return (
        <Pressable
            onPress={disabled ? undefined : onPress}
            onHoverIn={() => setIsHovered(true)}
            onHoverOut={() => setIsHovered(false)}
            style={buttonStyles}
            disabled={disabled}
        >
            {icon && <MaterialIcons name={icon} size={24} color={disabled ? "#aaa" : "#000"} />}
            <Text style={[styles.label, disabled && styles.labelDisabled]}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        fontFamily: "Bebas Neue",
        borderRadius: 4,
        alignItems: "center",
        flexDirection: "row",
        gap: 8,

        justifyContent: "center",
        padding: 16,
        borderWidth: 2,
        borderColor: "#000",
        boxShadow: "4px 4px 0px 0px #000",
        transitionDelay: "1s",
    },
    primary: {
        backgroundColor: themes.primaryColor.backgroundColor,
        borderColor: "#000",
    },
    outline: {
        backgroundColor: "#FFF",
        borderColor: "#000",
    },
    danger: {
        backgroundColor: themes.danger.backgroundColor,
        borderColor: "#000",
    },
    hovered: {
        boxShadow: "2px 2px 0px 0px #000",
    },
    disabled: {
        backgroundColor: "#ddd",
        borderColor: "#aaa",
    },
    label: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Bebas Neue",
    },
    labelDisabled: {
        color: "#aaa",
    },
});
