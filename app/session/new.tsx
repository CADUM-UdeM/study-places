// app/session/new.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const C = { bg:'#FFF7F0', card:'#FFFFFF', text:'#1F1A17', sub:'#6F6159', border:'#E8D9D1', accentDark:'#7F3B00' };

export default function NewSession() {
  const router = useRouter();
  const [spot, setSpot] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('60 min');
  const [group, setGroup] = useState<string[]>([]);

  const toggle = (name:string) =>
    setGroup(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);

  const canCreate = spot.trim() && date.trim() && time.trim();

  return (
    <ScrollView style={{ flex:1, backgroundColor:C.bg }} contentContainerStyle={{ padding:16, paddingBottom:40 }}>
      <Text style={s.title}>Start a study session</Text>

      <View style={s.card}>
        <Text style={s.label}>Spot</Text>
        <TextInput value={spot} onChangeText={setSpot} placeholder="e.g. Café Central"
          placeholderTextColor={C.sub} style={s.input} />
        <Text style={s.label}>Date</Text>
        <TextInput value={date} onChangeText={setDate} placeholder="YYYY-MM-DD"
          placeholderTextColor={C.sub} style={s.input} />
        <Text style={s.label}>Time</Text>
        <TextInput value={time} onChangeText={setTime} placeholder="HH:MM"
          placeholderTextColor={C.sub} style={s.input} />

        <Text style={s.label}>Duration</Text>
        <View style={{ flexDirection:'row', gap:8 }}>
          {['45 min','60 min','90 min','120 min'].map(d => {
            const active = duration === d;
            return (
              <TouchableOpacity key={d} style={[s.pill, active && s.pillActive]} onPress={() => setDuration(d)}>
                <Text style={[s.pillText, active && { color:'#fff' }]}>{d}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={[s.label, { marginTop:12 }]}>Invite / group</Text>
        <View style={{ flexDirection:'row', gap:8, flexWrap:'wrap' }}>
          {['Solo','With friends','IFT3355','Exam cram'].map(n => {
            const active = group.includes(n);
            return (
              <TouchableOpacity key={n} style={[s.tag, active && s.tagActive]} onPress={() => toggle(n)}>
                <Ionicons name="people-outline" size={14} color={active ? '#fff' : C.accentDark} />
                <Text style={[s.tagText, active && { color:'#fff' }]}>{n}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          disabled={!canCreate}
          style={[s.create, !canCreate && { opacity:0.5 }]}
          onPress={() => router.back()}
        >
          <Text style={s.createText}>Create session</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  title:{ fontSize:22, fontWeight:'800', color:C.text, marginBottom:8 },
  card:{ backgroundColor:C.card, borderWidth:1, borderColor:C.border, borderRadius:16, padding:14 },
  label:{ color:C.text, fontWeight:'700', marginTop:8, marginBottom:6 },
  input:{ height:44, borderRadius:12, borderWidth:1, borderColor:C.border, backgroundColor:'#fff', paddingHorizontal:12, color:C.text },
  pill:{ height:36, borderRadius:18, borderWidth:1, borderColor:C.border, backgroundColor:'#fff', alignItems:'center', justifyContent:'center', paddingHorizontal:12 },
  pillActive:{ backgroundColor:C.accentDark, borderColor:C.accentDark },
  pillText:{ color:C.text, fontWeight:'700' },
  tag:{ height:34, borderRadius:17, borderWidth:1, borderColor:C.border, backgroundColor:'#fff', alignItems:'center', justifyContent:'center', paddingHorizontal:12, flexDirection:'row', gap:6 },
  tagActive:{ backgroundColor:C.accentDark, borderColor:C.accentDark },
  tagText:{ color:C.text, fontWeight:'700' },
  create:{ marginTop:16, height:50, borderRadius:24, alignItems:'center', justifyContent:'center', backgroundColor:C.accentDark },
  createText:{ color:'#fff', fontWeight:'800' },
});
