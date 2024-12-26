import { StyleSheet, View, Text } from "react-native";
import { themes } from "@/components/themes";
import { useFonts } from "expo-font";

type FormComponentProps = {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    header: string;
    subHeader?: string;
};

const FormComponent = ({ children, onSubmit, header, subHeader }: FormComponentProps) => {
    const [loaded, error] = useFonts({
        "Bebas Neue": require("./../assets/fonts/BebasNeue-Regular.ttf"),
    });
    return (
        <View>
            <View>
                <Text style={styles.headerStyle}>{header}</Text>
                {subHeader && <Text style={styles.subHeaderStyle}>{subHeader}</Text>}
            </View>
            <View>
                <form onSubmit={onSubmit}>{children}</form>
            </View>
        </View>
    );
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
    headerStyle: {
        fontFamily: themes.fontFace.fontFamily,

        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subHeaderStyle: {
        fontSize: 18,
        marginBottom: 10,
    },
    footer: {
        marginTop: 20,
    },
});
export default FormComponent;
