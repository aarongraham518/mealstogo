import React, {useContext} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import {Search} from '../../restaurants/components/search.component';
import {SafeArea} from '../../../components/utility/safe-area.component'; 
import { FlatList, Pressable } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from "../../../components/spacer/spacer.component";
 
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)` 
  margin-left: -25px;
`;

const LoadingContainer = styled(View)` 
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const RestaurantsScreen = ({navigation}) => {

  const {isLoading, restaurants} = useContext(RestaurantsContext);
  console.log(navigation);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer style={{position: "absolute", top: "50%", left: "50%"}}>
          <Loading 
            size={50}
            style={{marginLeft: -25}}
            animating={true} 
            color={Colors.blue300}
          />
        </LoadingContainer>
      )}
        
        <Search />
        <RestaurantList
          data={restaurants}
          renderItem={({item}) => {
            console.log(item);
            return (
            <Pressable onPress={() => navigation.navigate("RestaurantDetail")}>
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item}/>
                </Spacer>
            </Pressable>
            
          )}}
          keyExtractor={(item) => item.name}
        />
          
       
    </SafeArea>
  )
};

