import { StyleSheet, Text, View } from 'react-native'
import React, { JSXElementConstructor, ReactNode } from 'react'

type SubtitleProps = {
    children: ReactNode 
}

const Subtitle = ({children}: SubtitleProps) => {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleText: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
})