import { StyleSheet } from "react-native";
import { themes } from "@/components/themes";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { useFonts } from "expo-font";
import { Link, type ExternalPathString, type RelativePathString, type UnknownInputParams } from "expo-router";
import { Button } from "./Button";

type LinkProps = {
    link:
        | RelativePathString
        | ExternalPathString
        | "/"
        | `/?${string}`
        | `/#${string}`
        | "/_sitemap"
        | `/_sitemap?${string}`
        | `/_sitemap#${string}`
        | { pathname: RelativePathString; params?: UnknownInputParams | undefined };
    label: string;
    type: "primary" | "outline" | "danger";
    icon?: keyof typeof MaterialIcons.glyphMap;
    disabled?: boolean;
};

export const LinkComponent = ({ link, label, type, icon, disabled }: LinkProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [loaded, error] = useFonts({
        "Bebas Neue": require("./../../../assets/fonts/BebasNeue-Regular.ttf"),
    });

    const linkStyles = StyleSheet.flatten([
        styles.button,
        type === "primary" && styles.primary,
        type === "outline" && styles.outline,
        type === "danger" && styles.danger,
        isHovered && styles.hovered,
        disabled && styles.disabled,
    ]);

    return (
        <Link asChild href={link} disabled={disabled}>
            <Button onPress={() => alert("Clicked")} label={label} type="primary" icon={icon} disabled={disabled} />
        </Link>
    );
};

const styles = StyleSheet.create({
    button: {
        transitionDelay: "0s",
        transitionDuration: "0.2s",
        borderRadius: 4,
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        padding: 16,
        borderWidth: 2,
        borderColor: "#000",
        shadowColor: "#000",
        fontFamily: themes.fontFace.fontFamily,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 0,
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
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    disabled: {
        backgroundColor: "#ddd",
        borderColor: "#aaa",
    },
    label: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: themes.fontFace.fontFamily,
    },
    labelDisabled: {
        color: "#aaa",
    },
});

export default LinkComponent;
