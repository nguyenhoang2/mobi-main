import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View } from 'react-native';
import DrinkItem from '../../components/DrinkItem';
import data from '../../data/drinks.json';
import styles from './styles';
import data1 from '../../data/nuoc.json';
import data2 from '../../data/kem.json';
import data3 from '../../data/combo.json';


export default function HomeScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const renderItem = ({ item, index }) => {
    return <DrinkItem item={item} index={index} navigation={navigation} />;
  };
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        marginTop: StatusBar.currentHeight + 10,
      }}
    >
      <Text style={{ marginTop: 8, fontSize: 15,color:"red" , fontWeight:"bold", flexDirection: 'row',width:"100%",alignItems:'center',  }}>{`Hello, ${
        user && user.name
      } !`}</Text>
      <View
        style={{
          backgroundColor: 'gold',
          padding: 1,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', width:"100%", height: 60, backgroundColor:"yellow", borderRadius:5, justifyContent:'center',marginBottom:5, }}>
         <Text
          style={{
            color: '#F0F8FF',
            fontWeight: 'bold',
            fontSize: 25,
           
           
          }}
        >
         WEB BÁN ĐIỆN THOẠI
        </Text>
        </View>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', width:"100%",  backgroundColor:"gray", borderRadius:10, justifyContent:'center',marginBottom:1, }}>

        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
       
       
          <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 18 }}>
           ĐẠI HỘI SIÊU ƯU ĐÃI -
          </Text>
         
          <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 18,marginLeft:5, }}>
            KHÔNG LO VỀ GIÁ
          </Text>
        
          
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
       
       
       <Text style={{ color: '#00ffff', fontWeight: 'bold', fontSize: 18 }}>
        CUỐI TUẦN SIÊU SALE -
       </Text>
       <Text style={{ color: '#00ffff', fontWeight: 'bold', fontSize: 18 ,marginLeft:5,}}>
           THẢ GA SẮM TẾT
       </Text>
     
       
     </View>
      
        
        </View>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Hãng Samsung</Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Hãng Apple</Text>
        <FlatList
          data={data3}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Hãng Oppo</Text>
        <FlatList
          data={data1}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Hãng Xiaomi</Text>
        <FlatList
          data={data2}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
      
    </ScrollView>
  );
}
