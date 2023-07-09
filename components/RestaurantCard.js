import React from "react";
import { View, Text } from "react-native";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import styled from "styled-components/native";

export default function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  return (
    <RestaurantCardContainer>
      <ImageContainer>
        <Image source={{ uri: imgUrl }} />
      </ImageContainer>
      <Wrapper>
        <Title>{title}</Title>
        <RatingContainer>
          <StarIcon size={22} color="#57c955" opacity={0.5} />
          <RatingRow>
            <Rating>{rating}</Rating>
            <Genre>{genre}</Genre>
          </RatingRow>
        </RatingContainer>
        <LocationContainer>
          <MapPinIcon size={22} color="gray" opacity={0.4} />
          <Location>Nearby, {address}</Location>
        </LocationContainer>
      </Wrapper>
    </RestaurantCardContainer>
  );
}

const RestaurantCardContainer = styled.TouchableOpacity`
  width: 230px;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
`;

const Wrapper = styled.View`
  padding: 10px;
`;

const ImageContainer = styled.View`
  width: 230px;
  height: 150px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RatingRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.Text`
  color: #57c955;
  opacity: 0.5;
  margin-right: 10px;
  font-size: 12px;
`;

const Genre = styled.Text`
  color: gray;
  font-size: 12px;
`;

const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Location = styled.Text`
  color: gray;
  opacity: 0.6;
  font-size: 12px;
`;
