import styled from "styled-components";

export const CustomInput = styled.input<InputProps>`
  background-color: ${(props) => props.bgColor || "#eeeeee"};
  color: ${(props) => props.color || "#000000"};
  width: ${(props) => props.width || 100}%;
  padding: ${(props) => props.padding || 10}px;
  margin: ${(props) => props.margin || 10}px;
  border-style: ${(props) => props.borderStyle || "solid"};
  border-color: ${(props) => props.borderColor || "transparent"};
  border-width: ${(props) => props.borderWidth || 1}px;
  border-radius: ${(props) => props.borderRadius || 5}px;
`;

interface InputProps {
  bgColor?: string;
  color?: string;
  width?: number;
  padding?: number;
  margin?: number;
  borderStyle?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
}
