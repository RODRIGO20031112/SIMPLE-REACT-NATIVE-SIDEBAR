import styled from "styled-components";
import { Animated } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const left0 = 10 + 5; // posição do círculo amarelo garnde
const left1 = 5 - 5; // posições do círculo(amarelo) e quadrado(cinza) esquerdos
const left2 = 65 + 5; // // posições do círculo(amarelo) e quadrado(cinza) direitos

export const Container = styled.View`
  background-color: #191919;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
`;

export const Icons = styled(Icon)`
  color: ${({ index, state }) => (index === state ? "#191919" : "#ffcc00")};
`;

export const Button = styled(TouchableOpacity)`
  z-index: 1;
  position: absolute;
  bottom: ${({ index, state }) => (index !== state ? 35 : 40)}px;
  left: ${({ index }) =>
    index === 0 ? 31 : index === 1 ? 100 * index + 35 : 100 * index + 31}px;
`;

export const YellowBall = ({ state }) => {
  const animatedLeft = useRef(new Animated.Value(left0)).current;

  useEffect(() => {
    Animated.timing(animatedLeft, {
      toValue: 100 * state + left0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [state]);

  return (
    <Animated.View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#ffcc00",
        position: "absolute",
        top: -31,
        left: animatedLeft,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></Animated.View>
  );
};

export const YellowLeftBall = ({ state }) => {
  const animatedLeft = useRef(new Animated.Value(-left1)).current;

  useEffect(() => {
    Animated.timing(animatedLeft, {
      toValue: 100 * state - left1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [state]);

  return (
    <Animated.View
      style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#ffcc00",
        position: "absolute",
        zIndex: 1,
        top: -10,
        left: animatedLeft,
      }}
    ></Animated.View>
  );
};

export const GrayLeftSquare = ({ state }) => {
  const animatedLeft = useRef(new Animated.Value(-left1)).current;

  useEffect(() => {
    Animated.timing(animatedLeft, {
      toValue: 100 * state - left1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [state]);

  return (
    <Animated.View
      style={{
        width: 20,
        height: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#191919",
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: animatedLeft,
      }}
    ></Animated.View>
  );
};

export const YellowRightBall = ({ state }) => {
  const animatedLeft = useRef(new Animated.Value(left2)).current;

  useEffect(() => {
    Animated.timing(animatedLeft, {
      toValue: 100 * state + left2,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [state]);

  return (
    <Animated.View
      style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#ffcc00",
        position: "absolute",
        zIndex: 1,
        top: -10,
        left: animatedLeft,
      }}
    ></Animated.View>
  );
};

export const GrayRightSquare = ({ state }) => {
  const animatedLeft = useRef(new Animated.Value(left2)).current;

  useEffect(() => {
    Animated.timing(animatedLeft, {
      toValue: 100 * state + left2,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [state]);

  return (
    <Animated.View
      style={{
        width: 20,
        height: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#191919",
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: animatedLeft,
      }}
    ></Animated.View>
  );
};
