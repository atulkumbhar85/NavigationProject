import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ListProps = {
    data: String[]
}

const List = ({ data }: ListProps) => {
    return (

        data?.map((dataPoints: String, index: Number) => {
            return (
                <View key={index.toString()} style={styles.listItem}>
                    <Text style={styles.itemText}>{dataPoints}</Text>
                </View>
            )
        })

    )
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',

    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
    }
})