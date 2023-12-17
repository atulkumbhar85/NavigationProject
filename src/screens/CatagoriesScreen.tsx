import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy_data'
import CategoryGridTile from '../components/CategoryGridTile'

const CatagoriesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    type CategoryToyProps = {
        id: string,
        title: string,
        color: string
    }

    
    const RenderCatagoriesItems = ({ id, title, color }: CategoryToyProps) => {
        const handlePressed = () => {
            navigation.navigate('MealsOverview', {categoryId: id})
        }
        return (
            <CategoryGridTile title={title} color={color} onPress={handlePressed} id={id} />
        )
    }

    return (
        <View>
            <FlatList
                data={CATEGORIES}
                renderItem={({ item }) => <RenderCatagoriesItems id={item.id} title={item.title} color={item.color} />}
                keyExtractor={(item: CategoryToyProps) => item.id}
                numColumns={2}
            />
        </View>
    )
}

export default CatagoriesScreen

const styles = StyleSheet.create({})