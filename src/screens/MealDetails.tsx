import { Image, StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'

import { MEALS } from '../data/dummy_data'
import MealShortDetails from './MealShortDetails'
import Subtitle from '../components/MealDetails/Subtitle'
import List from '../components/MealDetails/List'
import IconButton from '../components/IconButton'
import { FavoriteMealContextState, FavoritesContext } from '../../store/context/favorite-context'


const MealDetails = ({ route, navigation }: any) => {

    const favoriteMealsCtx = useContext<FavoriteMealContextState>(FavoritesContext);

    const id = route.params.id

    const selectedMeal = MEALS.find((meal) => meal.id === id)

    const mealIsFavorite = favoriteMealsCtx.ids.includes(id)

    const headerButtonPressedHandler = () => {
        if(mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(id)
        }
        else{
            favoriteMealsCtx.addFavorite(id);
        }
    }   

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color='white' onPress={headerButtonPressedHandler} />
            } 
        });
    },[navigation, headerButtonPressedHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
            <Text style={styles.title}>{selectedMeal?.title}</Text>
            <MealShortDetails
                duration={selectedMeal?.duration}
                complexity={selectedMeal?.complexity}
                affordability={selectedMeal?.affordability}
                style={{}}
                textStyle={styles.detailsText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal?.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal?.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailsText: {
        color: 'white',
    },
    subtitleText: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    }
})