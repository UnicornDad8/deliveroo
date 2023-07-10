import { useEffect, useState } from "react";
import CustomHeader from "../components/CustomHeader";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import styled from "styled-components/native";
import sanityClient from "../sanity";

export default function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes->
        }
      }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <Container>
      <CustomHeader />
      <Wrapper vertical showsVerticalScrollIndicator={false}>
        <Categories />
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

const Wrapper = styled.ScrollView`
  flex: 1;
  background: #f1f1f1;
`;
