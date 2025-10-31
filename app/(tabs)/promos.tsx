import Header from "@/components/Header";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function FavoritesPage(){


    return(
        <View style={{ flex: 1 }}>
            <Header userName="Kevin" welcomeMessage="Ravis de vous revoir !"/>

            {/* Page après le header what?????*/ }
            <View style={{flex: 1, paddingTop: 150 }}> 

                {/* Bouton discount */ }
                <TouchableOpacity style={styles.container}>

                        <View style={styles.button}>

                            {/* Cercle pour le logo */ }
                            <View style={styles.circle}>
                                <Text>Logo</Text>
                            </View>

                            {/* Information sur le discount : shop name, discount et la date */ }
                            <View style={{paddingHorizontal: '5%'}}>
                                <Text style={{color: '#fffaf0', fontWeight: 'bold', fontSize: 20}}>Shop name</Text>
                                <Text style={{color: '#fffaf0'}}>Discount</Text>
                                <Text style={{color: '#fffaf0'}}>Date</Text>
                            </View>

                        </View>

                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',

    },

    button: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#7f3b00ff",
        borderRadius: 20,
        height: "15%",
        width: "90%", 
        alignItems: 'center',
    },

    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 65,
        width: 65,
        borderRadius: 70,
        backgroundColor: "white",
    },

})