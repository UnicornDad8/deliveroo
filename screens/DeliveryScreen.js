import React from "react";
import { useSelector } from "react-redux";
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import colors from "../colors";
import styled from "styled-components/native";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <DeliveryScreenContainer>
      <DeliverySafeAreaView>
        <DeliveryWrapper>
          <HomeButton onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="#fff" size={30} />
          </HomeButton>
          <OrderHelpText>Order Help</OrderHelpText>
        </DeliveryWrapper>

        <DeliveryArrivalContainer>
          <DeliveryArrivalTop>
            <View>
              <EstimatedArrivalText>Estimated Arrival</EstimatedArrivalText>
              <ArrivalMinutesText>45 - 55 minutes</ArrivalMinutesText>
            </View>
            <BikeImage source={{ uri: "https://links.papareact.com/fls" }} />
          </DeliveryArrivalTop>
          <Progress.Bar
            size={30}
            color={colors.colorPrimary}
            indeterminate={true}
          />
          <RestaurantOrderText>
            Your order at {restaurant.title} is being prepared
          </RestaurantOrderText>
        </DeliveryArrivalContainer>
      </DeliverySafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
        style={{
          flex: 1,
          marginTop: -80,
          zIndex: 0,
        }}
      >
        <Marker
          key={restaurant.id}
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#d21155"
        />
      </MapView>
      <DeliveryBottomContainer>
        <UserImage
          source={{
            uri: "https://github.com/Ceci007/image-repository/blob/master/img/team-2.jpg?raw=true",
          }}
        />
        <RiderContainer>
          <RiderName>Ariel Lee</RiderName>
          <RiderText>Your rider</RiderText>
        </RiderContainer>
        <CallText>Call</CallText>
      </DeliveryBottomContainer>
    </DeliveryScreenContainer>
  );
};

export default DeliveryScreen;

const DeliveryScreenContainer = styled.View`
  flex: 1;
  background: ${colors.colorPrimary};
`;

const DeliverySafeAreaView = styled.SafeAreaView`
  z-index: 50;
`;

const DeliveryWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

const HomeButton = styled.TouchableOpacity``;

const OrderHelpText = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: 20px;
`;

const EstimatedArrivalText = styled.Text`
  font-size: 16px;
  color: gray;
  opacity: 0.6;
  margin-bottom: 5px;
`;

const ArrivalMinutesText = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;

const DeliveryArrivalContainer = styled.View`
  margin: 10px 25px;
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  z-index: 50;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const BikeImage = styled.Image`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const DeliveryArrivalTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RestaurantOrderText = styled.Text`
  margin-top: 15px;
  color: gray;
`;

const DeliveryBottomContainer = styled.View`
  background: #fff;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  padding-bottom: 30px;
`;

const UserImage = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  object-fit: cover;
`;

const RiderContainer = styled.View`
  margin-left: 10px;
  flex: 1;
`;

const RiderText = styled.Text`
  color: gray;
`;

const RiderName = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const CallText = styled.Text`
  color: ${colors.colorPrimary};
  font-size: 16px;
  font-weight: 700;
`;
