import { View, Text, Image, StyleSheet } from 'react-native';


export default function App()
{
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.avatar} />

        <View style={styles.info}>
          <Text style={styles.name}>Oybek Davlatov</Text>
          <Text style={styles.role}>Mobile Developer</Text>
        </View>
      </View>

        <View style={styles.statsRow}>
          <Stat label="Posts" value="42"/>
          <Stat label="Followers" value="1.2k"/>
          <Stat label="Following" value="180"/>
        </View>
    </View>
  );
}

function Stat({label, value}) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: '#f2f2f7', padding:20, paddingTop:80, gap:16},
  card: {flexDirection:'row', alignItems:'center', backgroundColor:'white', padding:16,
    borderRadius:12, gap:16},
  avatar: {width: 64, height:64, borderRadius: 32},
  info: {flex:1},
  name: {fontSize: 20, fontWeight: '900'},
  role: {color: '#666', marginTop: 4},
  statsRow: {flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'white',
    padding: 16, borderRadius: 12,
  },
  stat: {alignItems: 'center', flex:1},
  statValue: {fontSize: 18, fontWeight: '700'},
  statLabel: {color: '#888', marginTop: 2},
});