import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { startTransition } from 'react'

type CategoryGridTileProps = {
    id: string;
    title: string;
    color: string;
    onPress: () => void
}

const CategoryGridTile = ({ id, title, color, onPress}: CategoryGridTileProps) => {
  return (
    <View style={styles.gridItem}>
      <Pressable 
      onPress={onPress}
      android_ripple={{color: '#ccc'}} 
      style={({ pressed}) => [
        styles.pressableStyle,
        pressed ?
        styles.buttonPressed : null
      ]}
      >
        <View style={[styles.innerGridItem, {backgroundColor: color}]}>
            <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        elevation: 4,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === "android" ? 'hidden' : "visible",
    },
    buttonPressed: {
      opacity: 0.5
    },
    pressableStyle: {
        flex: 1, 
    },
    innerGridItem: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})