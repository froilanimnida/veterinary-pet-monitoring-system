import { themes } from "@/components/themes";
import { Button } from "@/components/ui/Button/Button";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import LinkComponent from "@/components/ui/Button/Link";

const heroImage = require("./../assets/images/hero.png");
export default function Index() {
    const [loaded, error] = useFonts({
        "Bebas Neue": require("./../assets/fonts/BebasNeue-Regular.ttf"),
    });
    return (
        <View style={styles.container}>
            <Image source={heroImage} style={styles.image} />
            <View style={styles.heroContainer}>
                <Text style={styles.heroText}>Lorem ipsum dolor sit amet.</Text>
                <Text style={styles.subText}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo aliquam neque totam, inventore
                    nulla atque libero quasi aspernatur fugiat. Nulla!
                </Text>
            </View>
            {/* <Button onPress={() => alert("Clicked")} label="Get Started" type="primary" /> */}
            <LinkComponent link="/auth/sign-up" label="Get Started" type="primary" icon="arrow-forward" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes.backgroundColor.backgroundColor,
    },
    image: {
        width: 800,
        maxWidth: "100%",
        height: 800,
        aspectRatio: 1,
    },
    heroText: {
        fontSize: 25,
        fontFamily: "Bebas Neue",
        textAlign: "center",
    },
    subText: {
        fontSize: 16,
        marginTop: 16,
        fontFamily: "Bebas Neue",
        textAlign: "center",
    },
    heroContainer: {
        width: "100%",
        padding: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
