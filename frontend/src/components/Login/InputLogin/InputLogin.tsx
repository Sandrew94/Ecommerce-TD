import * as React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import {
  CreateAccountTextStyle,
  ForgotPasswordStyle,
  FormStyle,
  InputError,
  InputStyle,
  LabelStyle,
} from "./InputLogin.style";
import axios from "axios";
import { LoadingWrapper, LsdRingDiv } from "../../Spinner/Spinner.style";
import { setLogin } from "../../../store/actions/loginAction";
import { logoutTimer } from "../../../store/actions/logoutTimer";
import { ButtonStyle } from "../../../styles-global/button";

interface IInputLoginProps {
  isLogin: boolean;
  switchAuthModeHandler: () => void;
}

interface IInputLoginFormValues {
  email: string;
  password: string;
}

const InputLogin: React.FunctionComponent<IInputLoginProps> = ({
  isLogin,
  switchAuthModeHandler,
}) => {
  const navigate = useNavigate();
  const initialValues: IInputLoginFormValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required a valid email address")
        .max(20, "Must be 20 characters or less"),
      password: Yup.string()
        .required("Required a valid password")
        .min(6, "Must be max 6 characters or less"),
    }),
    onSubmit: async (values: IInputLoginFormValues, { setSubmitting }) => {
      setSubmitting(true);

      let url;
      if (isLogin) {
        url = "http://localhost:5000/api/users/login";
      } else {
        url = `http://localhost:5000/api/users/register`;
      }

      try {
        const { data } = await axios.post(url, values);
        console.log(data);

        dispatch(setLogin(data.token)); //Import token to redux
        dispatch(logoutTimer(6000000));

        navigate("/"); //Redirect to Homepage
      } catch (err) {
        if (err instanceof Error) {
          formik.setStatus(err.message);
        }
      }
      setSubmitting(false);
    },
  });

  return (
    <>
      <FormStyle onSubmit={formik.handleSubmit}>
        <LabelStyle>
          <InputStyle
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <InputError>{formik.errors.email}</InputError>
          ) : null}
        </LabelStyle>
        <LabelStyle>
          <InputStyle
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <InputError>{formik.errors.password}</InputError>
          ) : null}
        </LabelStyle>
        <ForgotPasswordStyle>Forgot your passoword?</ForgotPasswordStyle>
        {formik.isSubmitting && (
          <LoadingWrapper>
            <LsdRingDiv></LsdRingDiv>
          </LoadingWrapper>
        )}
        {!formik.isSubmitting && (
          <ButtonStyle type="submit" isActivePadding>
            {isLogin ? "Login" : "Sign Up"}
          </ButtonStyle>
        )}
        {formik.status && <InputError>{formik.status}</InputError>}
      </FormStyle>
      <CreateAccountTextStyle onClick={switchAuthModeHandler}>
        {isLogin
          ? "Don't have an Account? Create account"
          : "Already have an Account? Login"}
      </CreateAccountTextStyle>
    </>
  );
};

export default InputLogin;
