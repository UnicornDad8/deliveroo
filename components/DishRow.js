import React from "react";
import { View, Text } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import styled from "styled-components/native";

function DishRow({ id, name, description, price, image }) {
  return (
    <DishContainer
      style={{
        borderBottomColor: "#dcdad7",
        borderBottomWidth: 1,
        borderTopColor: "#dcdad7",
        borderTopWidth: 1,
      }}
    >
      <DishTop>
        <DescriptionWrapper>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <CurrencyContainer>
            <Currency quantity={price} currency="GBP" />
          </CurrencyContainer>
        </DescriptionWrapper>
        <ImageContainer>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{ uri: urlFor(image).url() }}
          />
        </ImageContainer>
      </DishTop>
    </DishContainer>
  );
}

export default DishRow;

const DishContainer = styled.TouchableOpacity`
  background: #fff;
  padding: 20px;
`;
const DishTop = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Name = styled.Text`
  font-size: 22px;
  margin-bottom: 5px;
`;

const DescriptionWrapper = styled.View`
  flex: 1;
`;

const Description = styled.Text`
  color: gray;
  opacity: 0.8;
`;

const CurrencyContainer = styled.Text`
  margin-top: 10px;
  color: gray;
  opacity: 0.8;
`;

const ImageContainer = styled.View`
  width: 100px;
  height: 100px;
  background: #f3f3f4;
  margin-left: 10px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
