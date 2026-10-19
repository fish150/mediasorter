import * as Device from 'expo-device';
import { ImageSourcePropType, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { View, Text,  Pressable, Image, ScrollView } from 'react-native'
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import {LinearGradient} from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons'; 


type MediaCardProps = {
    title: string;
    
    infoLine: string;
    descript: string; 
    mediaTags: readonly string[];
    image: ImageSourcePropType;
    iconName: keyof typeof Ionicons.glyphMap;
    colors:readonly [string, string, ...string[]];
    onAnswer: () => void;


}

export default function MediaCard({title,infoLine, descript, mediaTags, image, iconName, colors, onAnswer}: MediaCardProps) {
    
    return (
        
            <LinearGradient colors={colors} locations={[0,.35,.5,.65, .85,1]} style = {styles.container}>
              <SafeAreaView style={styles.safeArea}>
                <View style={styles.headerBar}>
                  <Text style={styles.headerText}>
                    12/100
                  </Text>
                  <View style={styles.headerIcons}>
        
                    <Pressable  onPress={() => console.log('profile')} hitSlop={12} accessibilityLabel="Profile" style={({ pressed }) => [pressed && styles.iconPressed]}>
                    
                      <Ionicons name="person" size={20} color="#000" />
                    
                  </Pressable>
                  <Pressable  onPress={() => console.log('home')} hitSlop={12} accessibilityLabel="Home" style={({ pressed }) => [pressed && styles.iconPressed]}>
                    
                      <Ionicons name="home" size={20} color="#000" />
                    
                  </Pressable>
        
                  </View>
                  
                  
                  
                  <View style={[styles.headerIcons, styles.headerRight]}>
                  
                  <Pressable  onPress={() => console.log('close')} hitSlop={12} accessibilityLabel="Close" style={({ pressed }) => [pressed && styles.iconPressed]}>
                    
                      <Ionicons name="close" size={25} color="#000" />
                    
                  </Pressable>
                  </View>
                </View>
                <View style={styles.mediaTitle}>
                    <Ionicons name={iconName} size={60} color="#000" />
                  <Text style={styles.mediaTitleText}>
                    {title}
                  </Text>
                  
                </View>
        
                <View style={styles.mediaImageBox}>
                  <Image source ={image}
                  style={styles.mediaImage}
                  resizeMode="cover"/>
                </View>
        
                <Text style={styles.infoText}>
                  {infoLine}
                </Text>
        
                <View style={styles.chipHolder}>
                  {mediaTags.map((tag) => (
                  <View key={tag} style={styles.chip}>
                    <Text style={styles.chipText}>
                      {tag}
                    </Text>
                  </View>
                  ))}
                  
                </View>
        
                <View style={styles.descBox}>
                  <ScrollView>
                    <Text style={styles.descText}>
                        {descript}
                    </Text>
                  </ScrollView>
                </View>
               
        
                <View style={styles.buttonSetup}>
                  <Pressable style={({ pressed } ) => [styles.swipeButton, pressed && styles.swipebuttonPressed]} onPress={() => {console.log('s'); onAnswer();} }>
                    <Ionicons name="eye" size={28} color="#000" />
                  </Pressable>
        
                  <Pressable style={({ pressed } ) => [styles.swipeButton, pressed && styles.swipebuttonPressed]} onPress={() => {console.log('w'); onAnswer(); }}>
                    <Ionicons name="bookmark" size={28} color="#000" />
                  </Pressable>
        
                  <Pressable style={({ pressed } ) => [styles.swipeButton, pressed && styles.swipebuttonPressed]} onPress={() => {console.log('n'); onAnswer(); }}>
                    
                      <Ionicons name="eye-off" size={28} color="#000" />
                    
                  </Pressable>
                </View>
                 
        
                
        
                
                {Platform.OS === 'web' && <WebBadge />}
              </SafeAreaView>
            </LinearGradient>


    );

}

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',

        },
        headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginBottom:10,
        },

        headerText: {
        color: 'rgb(0, 0, 0)',
        fontSize: 32,
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        },

        headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:30, 
        flex:1,
        },

        headerRight: {
        justifyContent:'flex-end',
        },

        iconPressed: {
        opacity:.5,
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
        letterSpacing: 5,
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

        descBox: {
        height: 140, 
        backgroundColor: '#1B1611',
        borderRadius: 17,
        padding: 5,
        alignSelf: 'stretch',
        },

       

        descText: {
        color:'#E0DDD2',
        fontSize: 17, 
        textAlign: 'center',  
        },

        buttonSetup: {
        marginTop: 'auto', 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        },

        button: {
        paddingVertical: 14,
        paddingHorizontal:30,
        borderRadius:11,
        },



        swipeButton: {
        paddingVertical: 14,
        paddingHorizontal:30,
        borderRadius:11,
        backgroundColor:'#7B5D2B',  
        },

        swipebuttonPressed: {
        backgroundColor:'#5c4620',
        transform: [{scale : 0.95}],
        }, 

        buttonText: {
        fontSize: 20,
        color:'#1B1611', 
        }

});