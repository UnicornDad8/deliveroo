import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";
import styled from "styled-components/native";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

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
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            title={category.name}
            imgUrl={urlFor(category.image).width(200).url()}
          />
        ))}
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
