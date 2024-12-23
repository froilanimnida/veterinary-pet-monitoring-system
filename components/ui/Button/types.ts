import { StyleProp, ViewStyle } from "react-native";

export type ButtonVariant = "primary" | "secondary" | "outline" | "warning" | "danger";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
}
