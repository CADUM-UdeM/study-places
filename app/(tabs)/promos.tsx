// app/(tabs)/promos.tsx
import { getCafeName } from '@/data/places';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppHeader from '../../components/AppHeader';

const THEME = {
  bg: '#FFF6EF',
  text: '#2A1C17',
  sub: '#7A6B62',
  card: '#FFFFFF',
  border: '#E8D9D1',
  accentDark: '#7F3B00',
};

const PROMOS = [
  {
    id: 1,
    title: '☕ -15% sur les lattés étudiants Café Central',
    description: 'Tous les jours après 16h avec une carte étudiante valide.',
    cafe_id: 'constance',
    tag: 'Étudiants',
  },
  {
    id: 2,
    title: '📚 2h détude = 1 café filtre gratuit',
    description: 'Scanne le QR Deja Brew à lentrée de certains cafés partenaires.',
    cafe_id: 'savsav',
    tag: 'Loyalty',
  },
  {
    id: 3,
    title: '🌙 Night owls -10% après 20h',
    description: 'Pour les cafés ouverts tard listés sur Deja Brew.',
    cafe_id: 'savsav',
    tag: 'Night study',
  },
  {
    id: 4,
    title: '👯‍♀️ Study date : 2 pour 1',
    description: 'Un dessert offert à lachat de 2 boissons dans des spots sélectionnés.',
    cafe_id: 'amea',
    tag: 'Friends',
  },
];

// ADD TIME LIMIT
// LIKE (REVIEW: THIS IS A GOOD DEAL) PROMO

export default function PromosScreen() {
  const router = useRouter();
  
  return (
    <View style={{ flex: 1, backgroundColor: THEME.bg }}>
      <AppHeader rightIcon="pricetag-outline" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Promos & perks</Text>
        <Text style={styles.subtitle}>
          Coffee deals, late-night discounts and student perks picked just for your study sessions.
        </Text>

        {PROMOS.map((promo) => (
          <TouchableOpacity onPress={()=> router.push({pathname: '/place', params: {id: promo.cafe_id}})} key={promo.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTag}>{promo.tag}</Text>
              <Text style={styles.name}>by {getCafeName(promo.cafe_id)}</Text>
            </View>
            <Text style={styles.cardTitle}>{promo.title}</Text>
            <Text style={styles.cardText}>{promo.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: THEME.text,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: THEME.sub,
    marginBottom: 16,
  },
  name: {
    color: THEME.sub,
    fontSize: 11,
    fontWeight: '600',
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: THEME.border,
    padding: 16,
    marginTop: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6
  },
  cardTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: '#F3E7E0',
    color: THEME.accentDark,
    fontSize: 11,
    fontWeight: '700',
    // marginBottom: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: THEME.accentDark,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 13,
    color: THEME.text,
  },
});
