import styled from "styled-components/native";

export default function CategoryCard({ imgUrl, title }) {
  return (
    <CardContainer>
      <ImageContainer>
        <Image source={{ uri: imgUrl }} />
      </ImageContainer>
      <CategoryName>{title}</CategoryName>
    </CardContainer>
  );
}

const CardContainer = styled.TouchableOpacity`
  margin: 5px;
  height: 80px;
  position: relative;
  z-index: 1;
`;

const ImageContainer = styled.View`
  width: 80px;
  height: 80px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const CategoryName = styled.Text`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  font-weight: 700;
  z-index: 5;
`;
