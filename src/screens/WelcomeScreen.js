import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Welcome from "../../assets/images/welcome1.png";

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={Welcome} style={styles.background} />
            <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>40K+  Prenium Pecipe</Text>
            <Text style={{ fontSize: 42, fontWeight: 'bold', color: '#3c444c', marginTop: 44, marginBottom: 20 }}>Cook Like A Chef</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("RecipeList")}
                style={{
                    backgroundColor: "#f96163",
                    borderRadius: 18,
                    paddingVertical: 18,
                    width: "80%",
                    alignItems: "center"
                }}
            >
                <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>Let's go</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 425,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        resizeMode: 'contain',
        width: '100%',
        height: 300,
        justifyContent: 'center',
    },

});