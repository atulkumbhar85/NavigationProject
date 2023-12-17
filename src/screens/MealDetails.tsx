import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { MEALS } from '../data/dummy_data'


const MealDetails = ({ route, navigation }: any) => {
    const id = route.params.id

    const selectedMeal = MEALS.find((meal) => meal.id === id)

    return (
        <View>
            <Image source={{uri: selectedMeal?.imageUrl}} />
            <Text>{selectedMeal?.title}</Text>
            <View>
            </View>
            <Text>Ingredients</Text>

            <Text>Steps</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({})