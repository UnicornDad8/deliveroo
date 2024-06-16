import { useLayoutEffect, useEffect } from "react";
import { View, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { urlFor } from "../sanity";
import { setRestaurant } from "../features/restaurantSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <RestaurantScreenContainer>
        <View>
          <StatusBar hidden />
          <ImageContainer>
            <Image source={{ uri: urlFor(imgUrl).url() }} />
          </ImageContainer>
          <BackButton onPress={navigation.goBack}>
            <ArrowLeftIcon size={20} color="#333" />
          </BackButton>
        </View>
        <RestaurantTextWrapper>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <RatingWrapper>
            <RatingRow>
              <StarIcon size={26} color="#4ade80" />
              <Rating>{rating}</Rating>
              <Genre>{genre}</Genre>
            </RatingRow>
            <LocationContainer>
              <MapPinIcon size={22} color="gray" opacity={0.4} />
              <Location>Nearby, {address}</Location>
            </LocationContainer>
          </RatingWrapper>

          <Description>{short_description}</Description>
          <DescriptionButton
            style={{
              borderColor: "#dcdad7",
              borderBottomWidth: 1,
              borderTopWidth: 1,
            }}
          >
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={22} />
            <DescriptionButtonText>Have a food allergy?</DescriptionButtonText>
          </DescriptionButton>
        </RestaurantTextWrapper>
        <MenuContainer>
          <MenuTitle>Menu</MenuTitle>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </MenuContainer>
      </RestaurantScreenContainer>
      <BasketIcon />
    </>
  );
};

export default RestaurantScreen;

const RestaurantScreenContainer = styled.ScrollView`
  background: #f1f1f1;
  position: relative;
  padding-bottom: 80px;
  margin-bottom: 30px;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 260px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px;
  background: #fff;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

const RestaurantTextWrapper = styled.View`
  background: #fff;
`;

const TitleContainer = styled.View`
  padding: 0 20px;
  padding-top: 20px;
`;
const Title = styled.Text`
  font-size: 26px;
  font-weight: 900;
`;

const RatingWrapper = styled.View`
  flex-direction: row;
  padding: 10px 20px;
`;

const RatingRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.Text`
  color: #4ade80;
  margin-left: 3px;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 700;
`;

const Genre = styled.Text`
  color: gray;
  font-size: 12px;
  margin-right: 10px;
`;

const DescriptionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  border-top: 5px solid red;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
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

const Description = styled.Text`
  color: gray;
  opacity: 0.8;
  padding: 0 20px;
  margin-top: 10px;
  padding-bottom: 20px;
`;

const DescriptionButtonText = styled.Text`
  padding-top: 10px;
  font-weight: 700;
  font-size: 18px;
  flex: 1;
  margin-left: 10px;
  margin-top: -10px;
`;

const MenuContainer = styled.View`
  padding-bottom: 80px;
`;

const MenuTitle = styled.Text`
  padding: 0 20px;
  padding-top: 30px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
`;
