import React from "react";
import { View, Text } from "react-native";
import CategoryCard from "./CategoryCard";
import styled from "styled-components/native";

export default function Categories() {
  return (
    <CategoriesContainer>
      <CategoriesScroll
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <CategoryCard
          title="testing 1"
          imgUrl="https://github.com/Ceci007/image-repository/blob/master/img/course-1.png?raw=true"
        />
        <CategoryCard
          title="testing 2"
          imgUrl="https://github.com/Ceci007/image-repository/blob/master/img/course-2.jpeg?raw=true"
        />
        <CategoryCard
          title="testing 3"
          imgUrl="https://github.com/Ceci007/image-repository/blob/master/img/course-3.jpg?raw=true"
        />
        <CategoryCard
          title="testing 4"
          imgUrl="https://github.com/Ceci007/image-repository/blob/master/img/course-4.jpg?raw=true"
        />
        <CategoryCard
          title="testing 5"
          imgUrl="https://github.com/Ceci007/image-repository/blob/master/img/course-5.jpg?raw=true"
        />
      </CategoriesScroll>
    </CategoriesContainer>
  );
}

const CategoriesScroll = styled.ScrollView`
  background: #f1f1f1;
`;

const CategoriesContainer = styled.View`
  height: 110px;
`;
