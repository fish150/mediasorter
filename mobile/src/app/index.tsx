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
    marginBottom:15,
    
  },

  mediaImageBox: {
    width:250,
    height:375,
    backgroundColor: 'rgb(117, 117, 117)', 
    borderRadius: 11, 
    alignSelf: 'center', 
    overflow: 'hidden',
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
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
    
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
