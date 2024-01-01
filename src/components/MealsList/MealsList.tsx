import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MealItem from './MealItem'

const MealsList = ({items}: any) => {
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
                data={items}
                renderItem={renderMealItems}
                keyExtractor={(item: any) => item.id}
            />
        </View>
    )
}

export default MealsList    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})