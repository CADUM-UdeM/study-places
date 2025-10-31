// components/DiscountButton.tsx
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface DiscountButtonProps {
  shopName: string;
  discount?: string // | number; // optional, can be number or string
  date?: string;
  // onPress?: () => void; // for navigation later if needed
  // image pour logo
}

export default function DiscountButton({shopName, discount,date}: DiscountButtonProps) {

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        {/* Cercle pour le logo */}
        <View style={styles.circle}>
          <Text style={styles.logo}>Logo</Text>
        </View>

        {/* Information sur le discount : shop name, discount et la date */}
        <View style={{paddingHorizontal: '5%'}}>
          <Text style={{color: '#fffaf0', fontWeight: 'bold', fontSize: 20}}>{shopName}</Text>
                <Text style={{color: '#fffaf0'}}>Promotion de {discount}</Text>
            <Text style={{color: '#fffaf0'}}>Jusqu’à {date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    alignItems: "center",
  },

  button: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#7f3b00ff",
    borderRadius: 20,
    height: 90,
    width: "90%",
    alignItems: "center",
  },

  circle: {
    alignItems: "center",
    justifyContent: "center",
    height: 65,
    width: 65,
    borderRadius: 70,
    backgroundColor: "white",
  },

  logo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7f3b00ff",
  },

  info: {
    paddingHorizontal: 16,
  },

  shop: {
    color: "#fffaf0",
    fontWeight: "bold",
    fontSize: 20,
  },

  text: {
    color: "#fffaf0",
  },
});