import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  selectBasketItems,
  removeFromBasket,
  selectBasketTotal,
} from "../features/basketSlice";
import Currency from "react-currency-formatter";
import { useNavigation } from "@react-navigation/native";
import { XMarkIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import styled from "styled-components/native";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <BasketScreenContainer>
      <BasketWrapper>
        <ModalHeader>
          <View>
            <BasketName>Basket</BasketName>
            <RestaurantTitle>{restaurant.title}</RestaurantTitle>
          </View>
          <BackButton onPress={navigation.goBack}>
            <XMarkIcon size={20} color="#fff" />
          </BackButton>
        </ModalHeader>

        <DeliverContainer>
          <UserImage
            source={{
              uri: "https://github.com/Ceci007/image-repository/blob/master/img/team-1.jpg?raw=true",
            }}
          />
          <DeliverTime>Deliver in 50 - 75 min</DeliverTime>
          <TouchableOpacity>
            <ChangeText>Change</ChangeText>
          </TouchableOpacity>
        </DeliverContainer>

        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <FoodItem key={key}>
              <Count>{items.length} x</Count>
              <FoodImage
                source={{ uri: urlFor(items[0]?.image).width(80).url() }}
              />
              <Name>{items[0]?.name}</Name>
              <Price>
                <Currency quantity={items[0]?.price} currency="GBP" />
              </Price>

              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <RemoveText>Remove</RemoveText>
              </TouchableOpacity>
            </FoodItem>
          ))}
        </ScrollView>

        <SubtotalSection>
          <SubtotalContainer>
            <Subtotal>Subtotal</Subtotal>
            <CurrencyContainer>
              <Currency quantity={basketTotal} currency="GBP" />
            </CurrencyContainer>
          </SubtotalContainer>

          <SubtotalContainer>
            <Subtotal>Delivery Free</Subtotal>
            <CurrencyContainer>
              <Currency quantity={5.99} currency="GBP" />
            </CurrencyContainer>
          </SubtotalContainer>

          <SubtotalContainer>
            <Text>OrderTotal</Text>
            <CurrencyContainerBold>
              <Currency quantity={basketTotal + 5.99} currency="GBP" />
            </CurrencyContainerBold>
          </SubtotalContainer>

          <OrderButton
            onPress={() => navigation.navigate("PreparingOrderScreen")}
          >
            <OrderText>Place Order</OrderText>
          </OrderButton>
        </SubtotalSection>
      </BasketWrapper>
    </BasketScreenContainer>
  );
};

export default BasketScreen;

const BasketScreenContainer = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

const BasketWrapper = styled.View`
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
  border-bottom-color: #dcdad7;
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

const DeliverContainer = styled.View`
  flex-direction: row;
  padding: 15px 20px;
  background: #fff;
  margin: 25px 0;
  align-items: center;
`;

const UserImage = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-right: 10px;
`;

const DeliverTime = styled.Text`
  flex: 1;
`;

const ChangeText = styled.Text`
  color: #00ccbb;
`;

const FoodItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 25px;
  background: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #dcdad7;
`;

const Count = styled.Text`
  color: #00ccbb;
`;

const FoodImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin: 0 10px;
`;

const Name = styled.Text`
  flex: 1;
  font-weight: 500;
`;

const Price = styled.Text`
  color: gray;
  opacity: 0.6;
`;

const RemoveText = styled.Text`
  color: #00ccbb;
  font-size: 14px;
  margin-left: 10px;
`;

const SubtotalSection = styled.View`
  padding: 25px;
  background: #fff;
  margin-top: 25px;
`;

const SubtotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Subtotal = styled.Text`
  color: gray;
  opacity: 0.6;
`;

const CurrencyContainer = styled.Text`
  color: gray;
  opacity: 0.6;
`;

const CurrencyContainerBold = styled.Text`
  color: #000;
  font-weight: 700;
`;

const OrderButton = styled.TouchableOpacity`
  background: #00ccbb;
  padding: 20px;
  border-radius: 8px;
`;

const OrderText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;
