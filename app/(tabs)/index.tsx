import { ReviewCard } from '@/components/ReviewCard';
import { ReviewsModal } from '@/components/ReviewsModal';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Constants from 'expo-constants';
import { Bot } from 'lucide-react-native';
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";



export default function ChatScreen() {

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
    <View style={{ flex: 1, padding: 16}}>
        <View style={{ flex: 1, maxHeight: 80, marginTop: 64}}>
            
            {responses.map((resp, index) => (
                <View
                  key={index}
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 12,
                    minHeight: 44,
                    borderRadius: 12,
                    marginBottom: 8,
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
            <View style={{ height: 1, backgroundColor: colorScheme === 'dark' ? '#444' : '#ccc', marginVertical: 8 }} />
            
            {/* Latest review card */}
            <ReviewCard
              name={reviews[0].name}
              text={reviews[0].text}
              rating={reviews[0].rating}
              memberSince="2024"
              showFullHeader={true}
            />
            
            {/* Show all reviews button */}
            <Pressable 
              onPress={() => setModalVisible(true)}
              style={{ 
                marginTop: 12,
                padding: 12,
                borderRadius: 8,
                backgroundColor: colorScheme === 'dark' ? '#222' : '#f0f0f0',
                alignItems: 'center'
              }}
            >
              <Text style={{ 
                color: colorScheme === 'dark' ? 'white' : 'black', 
                fontWeight: '600',
                fontSize: 16
              }}>
                Voir les autres avis...
              </Text>
            </Pressable>
        </View>
        
        {/* Reviews Modal */}
        <ReviewsModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          reviews={reviews}
        />
    </View>
  );
}

