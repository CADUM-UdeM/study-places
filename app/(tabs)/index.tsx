import Header from '@/components/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, useColorScheme, View } from "react-native";



export default function MainScreen() {

  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [selected, setSelected] = useState<string>("Tous");
  const places = [{ id: 1, category: "Cafés" }, { id: 2, category: "Bibliothèques" }, { id: 3, category: "Parcs" }, { id: 4, category: "Cafés" }, { id: 5, category: "Parcs" }, { id: 6, category: "Bibliothèques" }];

  const returnIconForCategory = (category: string) => {
    switch (category) {
      case "Cafés":
        return "cafe";
      case "Bibliothèques":
        return "book";
      case "Parcs":
        return "leaf";
      default:
        return "location";
    }
  };





  return (
    <View style={{ flex: 1 }}>
      <Header userName="Kevin" welcomeMessage="Ravis de vous revoir !" />
      
      <ScrollView
        style={{ flex: 1, paddingTop: 130 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Horizontal scroll for categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
        >
          <View style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 20,
            gap: 10,
          }}>
            {["Tous", "Cafés", "Bibliothèques", "Parcs"].map((category) => (
              <TouchableOpacity key={category} onPress={() => setSelected(category)}>
                <View style={{
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  backgroundColor: selected === category ? "#7f3b00ff" : (isDark ? "#333" : "#777"),
                  borderRadius: 20,
                }}>
                  <Text style={{ fontWeight: '600', color:"white"}}>{category}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View>
          <Text style={{
            fontSize: 24,
            fontWeight: '700',
            marginLeft: 24,
            color: isDark ? 'white' : 'black',
          }}>
            {selected !== "Tous" ? selected : "Lieux"} populaires
          </Text>
        </View>
      
      {places.map((place) => (
        (place.category === selected || selected === "Tous") && (
        <TouchableOpacity key={place.id} onPress={() => {router.push({ pathname: "/place", params: { id: String(place.id) } });}}>
          <View style={{
            width: "90%",
            alignSelf: "center",
            alignItems: "flex-start",
            padding: 20,
            borderRadius: 16,
            marginTop: 20,
            height: 200,
            backgroundColor: "#7f3b00ff"
          }}>
            <Text style={{color:"white", fontWeight: '600'}}>Place {place.id}</Text>
            <View style={{ position: "absolute", right: 20, top: 20 , backgroundColor:"#00000050", padding:8, borderRadius:8}}>
            <Ionicons name={returnIconForCategory(place.category)} size={24} color="white"  />
            </View>
          </View>
          
        </TouchableOpacity>
        )
      ))}
      </ScrollView>
    </View>
  );
}

