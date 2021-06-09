import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';

import {SafeArea} from '../../../components/utility/safe-area.component'; 
import { FlatList } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from "../../../components/spacer/spacer.component";
 
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
const SearchContainer = styled.View` 
  padding: ${(props) => props.theme.space[3]};
`; 

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})` 

`;
export const RestaurantsScreen = () => {

  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  // console.log(restaurantContext);

  return (
    <SafeArea>
        <SearchContainer>
          <Searchbar/>
        </SearchContainer>
        <RestaurantList
          data={restaurants}
          renderItem={({item}) => {
            console.log(item);
            return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item}/>
            </Spacer>
          )}}
          keyExtractor={(item) => item.name}
        />
          
       
    </SafeArea>
  )
};

