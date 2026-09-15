import { View, Text, Pressable } from 'react-native';;
import { useState } from 'react';


export default function HomeScreen() {
  const [count, setCount] = useState(0);


  return (
    
    <View style={{flex:1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }} >
      <Text style={{fontSize: 24, fontWeight: "bold" }}>
        Tapped {count} times
      </Text>

      <Pressable
      onPress={() => setCount(count + 1)}
      style={{backgroundColor:"#3b82f6", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8}}
      >
        <Text style={{ color: "#fff", fontSize: 16}}>Tap me</Text>
      </Pressable>

    </View>
  );

}