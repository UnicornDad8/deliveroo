import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import styled from "styled-components/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <PreparingOrderContainer>
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        style={{ width: 350, height: 350 }}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={{
          fontSize: 16,
          marginTop: 10,
          marginBottom: 10,
          textAlign: "center",
          fontWeight: 700,
          color: "#000",
          marginBottom: 30,
        }}
      >
        Waiting for restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle
        size={30}
        indeterminate={true}
        color="#00CCBB"
        borderWidth={2}
      />
    </PreparingOrderContainer>
  );
};

export default PreparingOrderScreen;

const PreparingOrderContainer = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  justify-content: center;
  align-items: center;
`;
