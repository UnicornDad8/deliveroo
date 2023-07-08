import React from "react";
import CustomHeader from "../components/CustomHeader";
import styled from "styled-components/native";

export default function HomeScreen() {
  return (
    <Container>
      <CustomHeader />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background: #f1f1f1;
`;
