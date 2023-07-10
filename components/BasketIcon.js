import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import Currency from "react-currency-formatter";
import styled from "styled-components/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();

  const basketTotal = useSelector(selectBasketTotal);

  return (
    <BasketTotalContainer>
      <BasketButton>
        <TotalItemsContainer>
          <TotalItems>{items.length}</TotalItems>
        </TotalItemsContainer>
        <ButtonText>View Basket</ButtonText>
        <CurrencyContainer>
          <Currency quantity={basketTotal} currency="GBP" />
        </CurrencyContainer>
      </BasketButton>
    </BasketTotalContainer>
  );
};

export default BasketIcon;

const BasketTotalContainer = styled.View`
  position: absolute;
  z-index: 50;
  width: 100%;
  padding: 20px 20px;
  bottom: 0;
  background: transparent;
`;

const BasketButton = styled.TouchableOpacity`
  background: #00ccbb;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
`;

const CurrencyContainer = styled.Text`
  margin-top: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

const TotalItemsContainer = styled.View`
  background: #01a296;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const TotalItems = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;
