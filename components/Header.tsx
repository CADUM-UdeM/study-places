import { Bell, Circle } from 'lucide-react-native';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";

interface HeaderProps {
  userName?: string;
  welcomeMessage?: string;
}

export default function Header({ 
  userName = "Kevin", 
  welcomeMessage = "Ravis de vous revoir !" 
}: HeaderProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  return (
    <View style={[
      styles.container,
      { 
        backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
        height: 130,
      }
    ]}>
     <TouchableOpacity style={styles.avatar}>
      <Circle size={64} color="#7f3b00ff"  />
      </TouchableOpacity>
      <Text style={[styles.welcomeText, { color: isDark ? '#ffffff' : '#000000' }]}>
        Bienvenue {userName} !
      </Text>
      <Text style={[styles.subText, { color: isDark ? '#e0e0e0' : '#333333' }]}>
        {welcomeMessage}
      </Text>
      <TouchableOpacity style={styles.bellIcon}>
      <Bell size={32} color={isDark ? '#ffffff' : '#000000'}  />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    justifyContent: "center",
    padding: 20,
    paddingTop: 50,
    paddingBottom: 20,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 8,
  },
  avatar: {
    position: "absolute",
    left: 10,
    top: 50,
  },
  welcomeText: {
    fontWeight: "800",
    fontSize: 24,
    position: "absolute",
    top: 60,
    left: 85,
  },
  subText: {
    fontSize: 16,
    position: "absolute",
    top: 85,
    left: 85,
  },
  bellIcon: {
    position: "absolute",
    right: 25,
    top: 65,
  },
});
