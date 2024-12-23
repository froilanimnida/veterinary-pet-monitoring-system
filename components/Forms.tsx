import { StyleSheet, View } from "react-native";

type FormComponentProps = {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    header: string;
    subHeader?: string;
    footer?: React.ReactNode;
};

export const FormComponent = ({ children, onSubmit, header, subHeader, footer }: FormComponentProps) => {
    return <View></View>;
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderWidth: 2,
        borderColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subHeader: {
        fontSize: 18,
        marginBottom: 10,
    },
    footer: {
        marginTop: 20,
    },
});
