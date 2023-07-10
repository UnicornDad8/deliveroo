import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { XMarkIcon } from "react-native-heroicons/solid";
import styled from "styled-components/native";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[items.id] = results[items.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <BasketScreenContainer>
      <HeaderOutter>
        <ModalHeader>
          <View>
            <BasketName>Basket</BasketName>
            <RestaurantTitle>{restaurant.title}</RestaurantTitle>
          </View>
          <BackButton onPress={navigation.goBack}>
            <XMarkIcon size={20} color="#fff" />
          </BackButton>
        </ModalHeader>
      </HeaderOutter>
    </BasketScreenContainer>
  );
};

export default BasketScreen;

const BasketScreenContainer = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

const HeaderOutter = styled.View`
  flex: 1;
  background: #f1f1f1;
`;

const BasketName = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 25px;
`;

const RestaurantTitle = styled.Text`
  color: #c0bdbe;
  text-align: center;
`;

const ModalHeader = styled.View`
  position: relative;
  padding: 25px;
  border-bottom-width: 1px;
  border-bottom-color: #00ccbb;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  background: #00ccbb;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;
