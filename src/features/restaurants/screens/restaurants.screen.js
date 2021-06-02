import React from 'react';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';

import { StatusBar, SafeAreaView, Platform, StyleSheet, Text, View } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View` 
  padding: 16px;
`;

const RestaurantListContainer = styled.View` 
  flex: 1;
  padding: 16px;
  background-color: blue;
`;
export const RestaurantsScreen = () => (
    <SafeArea style={styles.container}>
        <SearchContainer style={styles.search}>
          <Searchbar/>
        </SearchContainer>
        <RestaurantListContainer style={styles.list}>
          <RestaurantInfoCard/>
        </RestaurantListContainer>
    </SafeArea>
);

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      marginTop: StatusBar.currentHeight
    },
    search: {
      padding: 16,
      backgroundColor: "white"
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: "blue"
    }
  });