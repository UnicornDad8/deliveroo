import React, { useLayoutEffect } from "react";
import { View, StatusBar, TextInput, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/solid";
import styled from "styled-components/native";

const STATUSBAR_HEIGHT =
  Platform.OS === "ios"
    ? `${StatusBar.currentHeight}%`
    : `${StatusBar.currentHeight}px`;

export default function CustomHeader() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      {Platform.OS === "ios" ? (
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      ) : (
        <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
      )}
      <HeaderWrapper>
        <Header>
          <ProfileContainer>
            <Image
              source={{
                uri: "https://github.com/Ceci007/image-repository/blob/master/img/team-1.jpg?raw=true",
              }}
            />
            <View>
              <Text>Deliver now!</Text>
              <Location>
                Current Location
                <ChevronDownIcon size={20} color="#00CCBB" />
              </Location>
            </View>
          </ProfileContainer>
          <UserIcon size={35} color="#00CCBB" />
        </Header>
        <SearchBarContainer>
          <InputContainer>
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              placeholder="Restaurants and cousine"
              keyboardType="default"
            />
          </InputContainer>
          <AdjustmentsVerticalIcon size={26} color="#00CCBB" />
        </SearchBarContainer>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.View`
  background-color: #fff;
  padding: 10px 20px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;

const Image = styled.Image`
  width: 44;
  height: 44;
  border-radius: 22px;
  margin-right: 10px;
`;

const ProfileContainer = styled.View`
  flex-direction: row;
`;

const Text = styled.Text`
  font-weight: 700;
  color: #c0bdbe;
  font-size: 14px;
`;
const Location = styled.Text`
  font-weight: 700;
  color: #000;
  font-size: 22px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  background: #f0edee;
  padding: 10px;
  flex: 1;
  align-items: center;
`;

const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
