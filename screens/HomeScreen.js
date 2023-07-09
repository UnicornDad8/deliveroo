import React from "react";
import CustomHeader from "../components/CustomHeader";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import styled from "styled-components/native";

export default function HomeScreen() {
  return (
    <Container>
      <CustomHeader />
      <Wrapper vertical showsVerticalScrollIndicator={false}>
        <Categories />
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placement for our partners"
        />

        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />

        <FeaturedRow
          id="3"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />
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
