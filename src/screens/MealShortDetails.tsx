import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type MealShortDetailsProps = {
    affordability: string,
    complexity: string,
    duration: string,
}

const MealShortDetails = ({duration, complexity, affordability}: MealShortDetailsProps) => {
  return (
    <View style={styles.detailsStyle}>
        <Text style={styles.detailItemStyle}>{duration} mins</Text>
        <Text style={styles.detailItemStyle}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItemStyle}>{affordability.toUpperCase()}</Text>
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