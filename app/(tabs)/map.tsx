// app/(tabs)/map.tsx
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AppHeader from '../../components/AppHeader';
import { PLACES } from '../../data/places';

const THEME = {
  bg: '#FFF6EF',
  text: '#1F1A17',
  border: '#E8D9D1',
  accentDark: '#7F3B00',
};

const CATEGORIES = ['Tous', 'Calme', 'Coworking', 'Brunch', 'Aesthetic'] as const;
type Category = (typeof CATEGORIES)[number];

export default function MapScreen() {
  const [selected, setSelected] = useState<Category>('Tous');
  const [search, setSearch] = useState('');

  const q = search.trim().toLowerCase();

  const filteredPlaces = PLACES.filter((p) => {
    if (selected !== 'Tous') {
      const label = selected.toLowerCase();
      const inTags = p.tags.some((tag) => tag.toLowerCase().includes(label));
      const inVibe = p.vibe.toLowerCase().includes(label);
      const inAtmosphere = p.studyAtmosphere.some((s) =>
        s.toLowerCase().includes(label)
      );
      if (!inTags && !inVibe && !inAtmosphere) return false;
    }

    if (!q) return true;

    const haystack = (
      p.name +
      ' ' +
      p.address +
      ' ' +
      p.district +
      ' ' +
      p.tags.join(' ')
    ).toLowerCase();

    return haystack.includes(q);
  });

  return (
    <View style={{ flex: 1, backgroundColor: THEME.bg }}>
      <AppHeader rightIcon="map-outline" />

      <View style={{ flex: 1 }}>
        {/* Overlay search + chips */}
        <View style={styles.overlayContainer}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Find a study spot on the map..."
            placeholderTextColor="#9A8C84"
            style={styles.searchInput}
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chipsRow}
          >
            {CATEGORIES.map((category) => (
              <TouchableOpacity key={category} onPress={() => setSelected(category)}>
                <View
                  style={[
                    styles.chip,
                    {
                      backgroundColor:
                        selected === category ? THEME.accentDark : '#fff',
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontWeight: '600',
                      color: selected === category ? '#fff' : THEME.text,
                      fontSize: 14,
                    }}
                  >
                    {category}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <MapView
          style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: 45.505,
            longitude: -73.567,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          }}
        >
          {filteredPlaces.map(
            (place) =>
              place.coords && (
                <Marker
                  key={place.id}
                  coordinate={place.coords}
                  title={place.name}
                  description={`${place.district} · ${place.vibe}`}
                />
              )
          )}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    position: 'absolute',
    top: 16,
    width: '100%',
    zIndex: 10,
    paddingHorizontal: 12,
  },
  searchInput: {
    height: 46,
    borderRadius: 23,
    fontSize: 16,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    color: THEME.text,
    borderWidth: 1,
    borderColor: THEME.border,
    marginBottom: 10,
  },
  chipsRow: {
    flexDirection: 'row',
    paddingVertical: 4,
    columnGap: 8,
  },
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: THEME.border,
  },
});
