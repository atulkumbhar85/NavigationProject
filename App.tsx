/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

const Stack = createNativeStackNavigator()

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
          name="catagoriesScreen" 
          component={CatagoriesScreen} 
          options={{
            title: "Category Screen",
          }}
          />
          <Stack.Screen 
          name="MealsOverview" 
          component={MealsOverviewScreen} 
          options={{
            title: "Meals Overview",
          }}
          />
          <Stack.Screen name="MealDetails" component={MealDetails} />
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
