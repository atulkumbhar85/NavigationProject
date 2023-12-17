import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy_data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route, navigation }: any) => {
    const catId = route.params.categoryId

    const displayMeals = MEALS.filter(meals => meals.categoryIds.includes(catId))

    const renderMealItems = ({ item }: any) => {

        const mealItemProp = {
            id: item.id,
            title: item.title,
            imageURL: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }

        return (
            <MealItem 
            {...mealItemProp}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                renderItem={renderMealItems}
                keyExtractor={(item: any) => item.id}
            />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})