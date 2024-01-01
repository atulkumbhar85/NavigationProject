import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MealsList from '../components/MealsList/MealsList'
import { FavoriteMealContextState, FavoritesContext } from '../../store/context/favorite-context'
import { MEALS } from '../data/dummy_data'

const Favorites = () => {

  const favoriteMealsCtx = useContext<FavoriteMealContextState>(FavoritesContext)

  const favoritesMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))

  if(favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.emptyText}>You have no favorite meals yet.</Text>
      </View>
    )
  }

  return <MealsList items={favoritesMeals} />
}

export default Favorites

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
})