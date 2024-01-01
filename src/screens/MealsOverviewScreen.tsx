import React from 'react'
import { MEALS } from '../data/dummy_data'
import MealsList from '../components/MealsList/MealsList'

const MealsOverviewScreen = ({ route, navigation }: any) => {
    const catId = route.params.categoryId

    const displayMeals = MEALS.filter(meals => meals.categoryIds.includes(catId))

    return <MealsList items={displayMeals} />
    
}

export default MealsOverviewScreen
