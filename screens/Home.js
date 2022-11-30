import { View, Text, Button, Image } from 'react-native'
import React, {useState} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export default function Home() {

  const [users,setUser] = useState([]);


  const GetData = async () => {

    const db = getFirestore();
    const dbuser = [];

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
        dbuser.push({
          id:doc.id,
          ...doc.data()
        });
      });
      setUser([
        ...dbuser
      ]);
    };
    

  return (
    <View>
      <Button title="Get Users" onPress={()=>GetData()}></Button>
      {users.map(o=>
      <View key={Math.random()} style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center' }}>
        <Image source={{uri:o.avatar}} style={{width:100, height:100, borderRadius: 50}}></Image>
        <Text>{o.id} - {o.fullname}</Text>
      </View>  
      )}
    </View>
  )
}