import { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { memoize } from "proxy-memoize";
import colors from "../colors";
import styled from "styled-components/native";

function DishRow({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(
    memoize((state) => selectBasketItemsWithId(state, id))
  );

  const addItemToBasket = () => {
    dispatch(
      addToBasket({
        id,
        name,
        description,
        price,
        image,
      })
    );
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <DishContainer
        style={
          isPressed
            ? { borderBottomWidth: 0 }
            : {
                borderBottomWidth: 1,
                borderColor: "#dcdad7",
                borderTopWidth: 1,
              }
        }
        onPress={() => setIsPressed(!isPressed)}
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
            <Image source={{ uri: urlFor(image).width(100).url() }} />
          </ImageContainer>
        </DishTop>
      </DishContainer>

      {isPressed && (
        <DishBottom>
          <QuantityContainer>
            <IconsBox>
              <TouchableOpacity
                style={{ elevation: 2 }}
                onPress={removeItemFromBasket}
              >
                <MinusCircleIcon
                  color={items.length > 0 ? colors.colorPrimary : "#dcdad7"}
                  size={40}
                />
              </TouchableOpacity>
              <Quantity>{items.length}</Quantity>
              <TouchableOpacity
                style={{ elevation: 2 }}
                onPress={addItemToBasket}
              >
                <PlusCircleIcon
                  color={items.length > 0 ? colors.colorPrimary : "#dcdad7"}
                  size={40}
                />
              </TouchableOpacity>
            </IconsBox>
          </QuantityContainer>
        </DishBottom>
      )}
    </>
  );
}

export default memo(DishRow);

const DishContainer = styled.TouchableOpacity`
  background: #fff;
  padding: 20px;
`;
const DishTop = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CountButton = styled.TouchableOpacity`
  box-shadow: 0 0 20px #000;
`;

const Name = styled.Text`
  font-size: 22px;
  font-weight: 600;
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
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DishBottom = styled.View`
  background: #fff;
  padding: 0 15px;
  padding-bottom: 10px;
`;

const QuantityContainer = styled.View``;

const IconsBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Quantity = styled.Text`
  font-weight: 700;
  margin: 0 10px;
`;
