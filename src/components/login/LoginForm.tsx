import { UserNameValidationRegex } from "@/constants";
import { Localizer } from "@/utils";
import { Formik } from "formik";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import * as yup from "yup";
import { Button, ITextInputProps, TextInput } from "@/components";
import { FormProps } from "@/store/interface";
import { ValueLoginForm } from "@/store/interface/Forms";

interface LoginFormProps extends FormProps<ValueLoginForm>, ITextInputProps {
  label: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .matches(
        UserNameValidationRegex,
        Localizer.t("PhoneInput-Field-Invalid")
      ),
  });

  return (
    <Formik
      initialValues={{
        userName: "",
        passWord: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (e) => {
        setIsLoading(false);
        await props.onSubmit(e);
        setIsLoading(true);
      }}
    >
      {({ handleSubmit, values, errors, isValid }) => (
        <View>
          <View style={styles.space}>
            <TextInput
              style={styles.inputBox}
              label={""}
              value={values.userName}
              error={!isValid}
              errorMessage={errors.userName}
            />
            <TextInput
              style={styles.inputBox}
              label={""}
              value={values.passWord}
              error={!isValid}
              errorMessage={errors.userName}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={handleSubmit}
              style={styles.button}
              mode="elevated"
              disabled={!isValid}
              loading={isLoading}
            >
              {Localizer.t("VehicleLookup-Search-Button")}
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  space: {
    marginBottom: 20,
  },
  inputBox: {
    width: "100%",
  },
  button: {
    width: "50%",
    minWidth: 150,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
  },
});
