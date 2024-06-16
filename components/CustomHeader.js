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
              <LocationContainer>
                <Location>Current Location</Location>
                <ChevronDownIcon
                  style={{ marginTop: 5 }}
                  size={20}
                  color="#000"
                />
              </LocationContainer>
            </View>
          </ProfileContainer>
        </Header>
        <SearchBarContainer>
          <InputContainer>
            <MagnifyingGlassIcon
              style={{ marginLeft: 5, marginRight: 10 }}
              size={20}
              color="gray"
            />
            <TextInput
              placeholder="Restaurants and cousine"
              keyboardType="default"
            />
          </InputContainer>
          <AdjustmentsVerticalIcon size={26} color="#c0bdbe" />
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
  width: 44px;
  height: 44px;
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

const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Location = styled.Text`
  font-weight: 700;
  color: #000;
  font-size: 22px;
  margin-right: 7px;
  margin-top: -4px;
  justify-content: flex-end;
`;

const InputContainer = styled.View`
  flex-direction: row;
  background: #f0edee;
  padding: 10px;
  flex: 1;
  margin-top: 4px;
  margin-right: 7px;
  align-items: center;
  border-radius: 4px;
`;

const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
