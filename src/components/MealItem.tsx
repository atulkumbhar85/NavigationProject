import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MealShortDetails from '../screens/MealShortDetails'

type mealItemProp = {
    id: string,
    title: string,
    imageURL: string,
    affordability: string,
    complexity: string,
    duration: string,
}

const MealItem = ({ id, title, imageURL, affordability, complexity, duration }: mealItemProp) => {

    const navigation = useNavigation<any>();

    const handleMealPressed = () => {
        navigation.navigate( "MealDetails", { id });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
            onPress={handleMealPressed}
            android_ripple={{color: '#ccc'}}
            style={({ pressed}) => 
                pressed ?
                styles.buttonPressed : null
              }
            >
                <View style={styles.innerContainer}>
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: imageURL }}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealShortDetails duration={duration} complexity={complexity} affordability={affordability} style={{}} textStyle={{}} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? 'hidden' : "visible",        
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        backgroundColor: 'white',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5
      },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 8,
    },
    detailsStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
    },
    detailItemStyle: {
        marginHorizontal: 4,
        fontSize: 12,
    }
})