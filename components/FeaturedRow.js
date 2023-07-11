import { useEffect, useState } from "react";
import { View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";
import styled from "styled-components/native";

export default function FeaturedRow({ id, title, description }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        }
      }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View>
        <FeaturedHeader>
          <Title>{title}</Title>
          <ArrowRightIcon size={22} color="#00CCBB" />
        </FeaturedHeader>
        <Description>{description}</Description>
      </View>
      <FeaturedCardContainer
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </FeaturedCardContainer>
    </View>
  );
}

const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
`;

const FeaturedHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: gray;
  padding: 0 20px;
  margin-top: -15px;
`;

const FeaturedCardContainer = styled.ScrollView`
  padding: 5px;
`;
