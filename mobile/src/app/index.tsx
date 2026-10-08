import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { View, Text,  Pressable, Image } from 'react-native'
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';


export default function HomeScreen() {
const tags = ['horror', 'thriller', 'drama', 'crime'];
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerBar}>
          <Text style={styles.headerText}>
            profile
          </Text>

          <Text style={styles.headerText}>
            12/100
          </Text>
          
          <Text style={styles.headerText}>
            X
          </Text>
        </View>
        <View style={styles.mediaTitle}>
          <Text style={styles.icon}>
            📽
          </Text>
          <Text style={styles.mediaTitleText}>
            JOKER
          </Text>
          
        </View>

        <View style={styles.mediaImageBox}>
          <Image source ={require('../../assets/myimages/images.jpg')}
          style={styles.mediaImage}
          resizeMode="cover"/>
        </View>

        <Text style={styles.infoText}>
          2019 · Todd Phillips · movie
        </Text>

        <View style={styles.chipHolder}>
          {tags.map((tag) => (
          <View key={tag} style={styles.chip}>
            <Text style={styles.chipText}>
              {tag}
            </Text>
          </View>
          ))}
          
        </View>
        
         

        

        
        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#E0DDD2',
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom:24,
  },

  headerText: {
  color: 'rgb(0, 0, 0)',
  fontSize: 24,
  },
  mediaTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'flex-start',
    gap: 20,
    marginBottom:10,
    
  },

  mediaImageBox: {
    width:250,
    height:375,
    backgroundColor: 'rgb(117, 117, 117)', 
    borderRadius: 11, 
    alignSelf: 'center', 
    overflow: 'hidden',
    marginBottom:5,
    
  },

  mediaImage:{
    width: '100%',
    height: '100%',

    
  },
  icon: {
    fontSize:52,
    paddingLeft:0,
    
  },
  mediaTitleText: {
    color: 'rgb(0, 0, 0)', 
    fontSize: 40,
    letterSpacing: 15,
  },

  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },

  infoText: {
    color: 'rgb(0, 0, 0)',
    fontSize: 20,
    textAlign: 'center', 
  },

  chip: {
    paddingHorizontal: 9,
    paddingVertical:4,
    borderRadius:10,
    backgroundColor:'#B5B1A0', 

  },
  chipText: {
  fontSize: 14,
  color: '#000',
},
  chipHolder: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  
});
