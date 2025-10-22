import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";
import MapView from "react-native-maps";

export default function MapPage(){


    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const [selected, setSelected] = useState<string>("Tous");

    const [search, setSearch] = useState('');

    return(
        <View style={{ flex: 1 }}>
            <View style={{ position: 'absolute', top: 0, zIndex: 1, width: '100%' }}>
                <TextInput
                            value={search}
                            onChangeText={setSearch}
                            placeholder="Rechercher un lieu"
                            placeholderTextColor={isDark ? '#888' : '#aaa'}
                            style={{
                                height: 50,
                                width: "95%",
                                marginLeft: 10,
                                marginBottom: 10,
                                fontSize: 20,
                                paddingHorizontal: 12,
                                borderRadius: 226,
                                backgroundColor: isDark ? '#333' : '#eee',
                                color: isDark ? 'white' : 'black',
                                borderWidth: 1,
                                borderColor: isDark ? '#555' : '#ccc',
                                top:50,
                            }}
                        />
            <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={{ flexGrow: 0 , position: 'absolute', top: 85}}
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
                              paddingHorizontal: 24,
                              paddingVertical: 10,
                              backgroundColor: selected === category ? "#7f3b00ff" : (isDark ? "#333" : "#fff"),
                              borderRadius: 20,
                            }}>
                            <Text style={{ fontWeight: '600', color: selected === category ? "white" : (isDark ? "white" : "black"), fontSize:16}}>{category}</Text>
                            </View>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </ScrollView>
                </View>

        <MapView 
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
              latitude: 45.5017,
              longitude: -73.5673,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
          </MapView>
                
        </View>
    )
}