import { View, Text, TextInput, Image } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", borderColor: "#6A5ACD", borderWidth: 1, borderRadius: 10, padding: 10, margin: 10 }}>
      <Image
        source={{
          uri: "https://brasil.emeritus.org/wp-content/uploads/2020/01/gesta%CC%83o-de-pessoas-.jpg.optimal.jpg",
        }}
        style={{ width: 200, height: 200, borderRadius: 100 }}
      />
      <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: 10 }}>
          <Text style={{fontSize: 25, color: "#6A5ACD"}}>Nome:</Text>
          <Text style={{fontSize: 20, color: "#6495ED"}}>Fernanda Torres</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: 10 }}>
          <Text style={{fontSize: 25, color: "#6A5ACD"}}>User:</Text>
          <Text style={{fontSize: 20, color: "#6495ED"}}>Fernandinha69</Text>
        </View>
      </View>
        <View style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: 20}}>
      <Text style={{fontSize: 25, color: "#6495ED"}} >Descrição</Text>
      <TextInput
        style={{
          height: 100,
          width: 300,
          borderColor: "#6A5ACD",
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
        }}
        multiline
        numberOfLines={4}/>
      </View>
    </View>
  );
}
