import { ReviewCard } from '@/components/ReviewCard';
import { ReviewsModal } from '@/components/ReviewsModal';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import { Bot } from 'lucide-react-native';
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';


export default function PlaceScreen() {

const GEMINI_API_KEY = Constants.expoConfig?.extra?.EXPO_GEMINI_API_KEY; 

const [responses, setResponses] = useState<string[]>([]);
const [loading, setLoading] = useState(false);
const [modalVisible, setModalVisible] = useState(false);
const colorScheme = useColorScheme();

const reviews = [
  { name:"Arsene Wenger", text: "Produit exceptionnel, dépassé toutes mes attentes!", rating: 5 },
  { name:"Arsene Wenger", text: "Qualité incroyable, je recommande vivement!", rating: 5 },
  { name:"Arsene Wenger", text: "Excellent rapport qualité-prix, très satisfait!", rating: 5 },
  { name:"Arsene Wenger", text: "Parfait pour mes besoins, rien à redire!", rating: 5 },
  { name:"Arsene Wenger", text: "Service impeccable et produit de grande qualité!", rating: 5 },
  { name:"Arsene Wenger", text: "Une expérience formidable, je rachèterai sans hésiter!", rating: 5 },
  { name:"Arsene Wenger", text: "Vraiment top, exactement ce que je cherchais!", rating: 5 },
  { name:"Arsene Wenger", text: "Great product, really enjoyed using it!", rating: 5 },
    { name:"Arsene Wenger",text: "It was okay, could be better.", rating: 3 },
    { name:"Arsene Wenger",text: "Did not like it at all.", rating: 1 },
    { name:"Arsene Wenger",text: "Exceeded my expectations!", rating: 5 },
    { name:"Arsene Wenger",text: "Not worth the price.", rating: 2 },
    { name:"Arsene Wenger",text: "Average quality, nothing special.", rating: 3 },
    { name:"Arsene Wenger",text: "Fantastic experience, will buy again!", rating: 5 },
];

const router=useRouter();
useEffect(() => {
    const resumeReviews = async () => {
        if (!GEMINI_API_KEY) {
        console.error("GEMINI_API_KEY is not set");
        setResponses((prev) => [...prev, "Error: API key not set"]);
        return;
    }
    setLoading(true);
    try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `Summarize the following reviews in a concise manner in one line max in french and very efficiently with no yapping:\n\n` +
            reviews.map((r, i) => `Review ${i + 1}: "${r.text}" (Rating: ${r.rating}/5)`).join('\n') +
            `\n\nSummary:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        setResponses((prevResponses) => [...prevResponses, text]);
    } catch (error) {
        console.error("Error generating summary:", error);
        setResponses((prev) => [...prev, `Error: ${error}`]);
    } finally {
        setLoading(false);
    }
    };
    if (responses.length === 0){
      resumeReviews();
    }
      
}, []);





  return (
    <View style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? '#000' : '#fff', paddingTop: 50}}>
     
    <ScrollView style={{ flex: 1, padding: 16,backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }}>
        <View style={{width: '100%', alignItems: 'center', height: 215, backgroundColor: colorScheme !== 'dark' ? '#000' : '#fff',borderRadius: 16 }}>
            <View style={{ position: 'absolute', top: 16, right: 16, backgroundColor: colorScheme === 'dark' ? '#222' : '#f0f0f0', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20 }}>
                <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontWeight: '600' }}>
                Ouvre à 08:00
                </Text>
            </View>

        

        </View>
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ fontSize: 24, fontWeight: '700', marginTop: 16, marginLeft:8, color: colorScheme === 'dark' ? 'white' : 'black' }}>
                Endroit
            </Text>
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 8 }}>
                <View style={{ 
                    backgroundColor: colorScheme === 'dark' ? '#222' : '#f0f0f0',
                    paddingHorizontal: 12,
                    paddingVertical: 12,
                    borderRadius: 20,
                    marginTop: 16,
                }}>
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontWeight: '600' }}>
                        Catégorie
                    </Text>
                </View>

            </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, marginLeft:8 }}>
                <View style={{width: "50%", height: 36, borderRadius: 16, backgroundColor: colorScheme === 'dark' ? '#222' : '#f0f0f0', marginRight: 8, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, gap: 8 }}>
                <Ionicons name="thumbs-up" size={20} color={colorScheme === 'dark' ? 'white' : 'black'} />
                <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontWeight: '600' }}>
                    99%
                </Text>
                <View style={{ width: 1, height: 20, backgroundColor: colorScheme === 'dark' ? '#444' : '#ccc', marginHorizontal: 8 }} />
                <Ionicons name="logo-google" size={20} color={colorScheme === 'dark' ? 'white' : 'black'} />
                <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontWeight: '600' }}>
                    4.8/5
                </Text>
                </View>

            </View>
        </View>
        <View style={{width: '100%', alignItems: 'center', height: 200, backgroundColor: colorScheme !== 'dark' ? '#000' : '#fff',borderRadius: 16, marginTop: 16 }}>
        </View>
        <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 16, marginLeft:8, color: colorScheme === 'dark' ? 'white' : 'black' }}>
            Localisation
        </Text>
        <View style={{width: '100%', height: 120, borderRadius: 16, marginTop: 16, overflow: 'hidden' }}>
            
          <MapView 
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
              latitude: 45.5017,
              longitude: -73.5673,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            zoomEnabled={false}
            scrollEnabled={false}
          >
            <Marker 
              coordinate={{ latitude: 45.5017, longitude: -73.5673 }}
              title="Endroit"
              description="Lieu d'étude"
            />
          </MapView>
        </View>
        <View>
        <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 16, marginLeft:8, color: colorScheme === 'dark' ? 'white' : 'black' }}>
            Résumé des avis
        </Text>
        </View>
        <View style={{ flex: 1, maxHeight: 80, marginTop: 16, marginBottom: 16 }}>
            
            {responses.map((resp, index) => (
                <View
                  key={index}
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 12,
                    minHeight: 44,
                    borderRadius: 16,
                    backgroundColor: colorScheme === 'dark' ? '#222' : '#ccc',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxHeight: 60,
                  }}
                >
                  <Bot size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
                  <Text
                    style={{
                      color: colorScheme === 'dark' ? 'white' : 'black',
                      fontWeight: '700',
                      marginLeft: 8,
                      textAlignVertical: 'center', 
                      alignSelf: 'center',
                      flexShrink: 1,
                    }}
                  >
                    {resp}
                  </Text>
                </View>
            ))}
        </View>
        
        <View>
            {/* Latest review card */}
            <ReviewCard
              name={reviews[0].name}
              text={reviews[0].text}
              rating={reviews[0].rating}
              memberSince="2024"
              showFullHeader={true}
              onViewMore={() => setModalVisible(true)}
            />
        </View>

        <View style={{ }}>
            <Text style={{ fontSize: 20, fontWeight: '700',  marginLeft:8, color: colorScheme === 'dark' ? 'white' : 'black' }}>
                Promotions en cours
            </Text>
            <View style={{width: '100%', alignItems: 'center', height: 150, backgroundColor: colorScheme !== 'dark' ? '#000' : '#fff',borderRadius: 16, marginTop: 16 }}>
            </View>

        </View>

        <View style={{ marginBottom: 32 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 16, marginLeft:8, color: colorScheme === 'dark' ? 'white' : 'black' }}>
                Achalandage
            </Text>
            <View style={{width: '100%', alignItems: 'center', height: 150, backgroundColor: colorScheme !== 'dark' ? '#000' : '#fff',borderRadius: 16, marginTop: 16 }}>
            </View>

        </View>
        
        {/* Reviews Modal */}
        <ReviewsModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          reviews={reviews}
        />
    </ScrollView>
    </View>
  );
}

