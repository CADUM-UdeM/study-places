import { useRouter } from 'expo-router';
import { Bell, Circle } from 'lucide-react-native';
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";



export default function MainScreen() {

const router = useRouter();






  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
      <View style={{
        position: "absolute",
        width: "100%",
        justifyContent: "center",
        padding: 20,
        top : 50,
      }}>
      <Circle size={64} color="#4a90e2"style={{position:"absolute", left:0, top:0}} />
      <Text style={{color:"white", fontWeight:800, fontSize:24, position:"absolute", top:5, left:70}}>Bienvenue Kevin !</Text>
      <Text style={{color:"white", fontSize:16, position:"absolute", top:35, left:70}}>Ravis de vous revoir !</Text>
      <Bell size={32} color="white" style={{position:"absolute", right:5, top:15}} />
      </View>

      <TouchableOpacity onPress={() => router.push("/(tabs)/place")}>
        <View style={{
          maxWidth: 300,
          alignSelf: "center",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 20,
          borderRadius: 16,
          marginTop: 20,
          backgroundColor: "#4a90e2"
        }}>
          <Text style={{color:"white", fontWeight:600}}>Place X</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

