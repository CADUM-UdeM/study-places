import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface DiscountButtonProps{
    shopName: string,
    discount?: string, // ?: veut dire optionel . For now c'est des strings 
    date? : string,
    // surement un onpress qui mènent à la page de promotion
    // probably un pour image du logo
}

export default function DiscountButton({shopName, discount, date}: DiscountButtonProps){
    return(
            <TouchableOpacity style={styles.container}> {/* Bouton discount */ }
        
                <View style={styles.button}>
        
                    {/* Cercle pour le logo */ }
                    <View style={styles.circle}>
                        <Text>Logo</Text>
                    </View>
        
                    {/* Information sur le discount : shop name, discount et la date */ }
                    <View style={{paddingHorizontal: '5%'}}>
                        <Text style={{color: '#fffaf0', fontWeight: 'bold', fontSize: 20}}>{shopName}</Text>
                        <Text style={{color: '#fffaf0'}}>Promotion de {discount}%</Text>
                        <Text style={{color: '#fffaf0'}}>Jusqu'à {date}</Text>
                    </View>
        
                </View>
        
            </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingVertical: 8,
        // justifyContent: 'center',
        alignItems: 'center',

    },

    button: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#7f3b00ff",
        borderRadius: 20,
        height: 90,
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

}); 