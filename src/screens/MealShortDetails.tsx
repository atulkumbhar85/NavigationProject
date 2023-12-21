import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type MealShortDetailsProps = {
    affordability: string,
    complexity: string,
    duration: string,
    style: Object,
    textStyle: Object
}

const MealShortDetails = ({duration, complexity, affordability, style, textStyle}: MealShortDetailsProps) => {
  return (
    <View style={[styles.detailsStyle, style]}>
        <Text style={[styles.detailItemStyle, textStyle]}>{duration} mins</Text>
        <Text style={[styles.detailItemStyle, textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItemStyle, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealShortDetails

const styles = StyleSheet.create({
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