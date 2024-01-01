/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StatusBar,
  StyleSheet, Text, View,
} from 'react-native';
import CatagoriesScreen from './src/screens/CatagoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetails from './src/screens/MealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './src/screens/Favorites';
import IonIcons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#351401',
      },
      headerTintColor: '#FFFFFF',
      sceneContainerStyle: {
        backgroundColor: '#3f2f25'
      },
      drawerContentStyle:{
        backgroundColor: '#351401'
      },
      drawerInactiveTintColor: '#FFFFFF',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',

    }}
    >
      <Drawer.Screen 
      name="Categories" 
      component={CatagoriesScreen}
      options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => <IonIcons name="list" color={color} size={size} />
      }}
      />
      <Drawer.Screen 
      name="Favorites" 
      component={Favorites}
      options={{
        title: 'All Favorites',
        drawerIcon: ({color, size}) => <IonIcons name="star" color={color} size={size} />
      }}
      />
    </Drawer.Navigator>
  )
}

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'default'} />
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#351401',
          },
          headerTintColor: '#FFFFFF',
          contentStyle: {
            backgroundColor: '#3f2f25'
          }
        }}
        >
          <Stack.Screen 
          name="Drawer" 
          component={DrawerNavigator} 
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="MealsOverview" 
          component={MealsOverviewScreen} 
          options={{
            title: "Meals Overview",
          }}
          />
          <Stack.Screen name="MealDetails" component={MealDetails} options={{
            title: "Meal Details",
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
