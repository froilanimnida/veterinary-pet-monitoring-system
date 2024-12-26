import { View, Text, StyleSheet } from "react-native";
import FormsComponent from "@/components/Forms";
import { themes } from "@/components/themes";
import FormTextInput from "@/components/FormTextInput";
import TextView from "@/components/TextView";

export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            <TextView text="Create an account to get started" />
            <View style={styles.signUpForm}>
                <FormTextInput label="Email" value="" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: themes.backgroundColor.backgroundColor,
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    signUpForm: {
        borderColor: "#000",
        borderWidth: 4,
        boxShadow: "4px 4px 0px 0px #000",
        padding: 16,
        borderRadius: 4,
        backgroundColor: "#FFF",
        width: "95%",
        height: "50%",
    },
});
