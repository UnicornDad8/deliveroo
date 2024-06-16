import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import Currency from "react-currency-formatter";
import colors from "../colors";
import styled from "styled-components/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <BasketTotalContainer>
      <BasketButton onPress={() => navigation.navigate("Basket")}>
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
  background: ${colors.colorPrimaryLight};
  border: 4px solid ${colors.colorPrimary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
`;

const CurrencyContainer = styled.Text`
  margin-top: 10px;
  color: #333;
  font-size: 16px;
  font-weight: 700;
`;

const TotalItemsContainer = styled.View`
  background: ${colors.colorPrimary};
  width: 30px;
  height: 30px;
  border-radius: 5px;
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
  color: #000;
`;
