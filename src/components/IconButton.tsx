import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons';

type IconButtonProps = {
    icon: string
    color: string
    onPress: () => void
}

const IconButton = ({onPress, icon, color}: IconButtonProps) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <IonIcons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})