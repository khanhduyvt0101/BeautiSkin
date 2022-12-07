import { themeColors } from "@/constants";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import * as Paper from "react-native-paper";

const inputHeight: number = 41;
export interface ITextInputProps extends Partial<Paper.TextInputProps> {
  errorMessage?: string;
  required?: boolean;
}

export const TextInput = (props: ITextInputProps) => {
  const customStyle = StyleSheet.flatten([styles.textInput, props.style]);
  const { label, ...restOfProps } = props;

  const getLabel = () => {
    return props.required ? `${label ?? ""} *` : label;
  };

  return (
    <>
      <Paper.TextInput
        {...restOfProps}
        label={getLabel()}
        style={customStyle}
        mode="outlined"
        theme={{ roundness: 6 }}
      />
      <Paper.HelperText
        type="error"
        variant="labelSmall"
        visible={props.error && !!props.errorMessage}
      >
        {props.errorMessage}
      </Paper.HelperText>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: inputHeight,
    lineHeight: Platform.select({
      ios: inputHeight / 2,
      android: inputHeight,
    }),
  },
  required: {
    color: themeColors.colors.error,
  },
});
