import * as React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import {
  ButtonStyle,
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

interface IInputLoginProps {}

interface IInputLoginFormValues {
  email: string;
  password: string;
}

const InputLogin: React.FunctionComponent<IInputLoginProps> = (props) => {
  const navigate = useNavigate();
  const initialValues: IInputLoginFormValues = {
    email: "",
    password: "",
  };

  //State from redux
  const { token } = useSelector((state: any) => state.login);
  console.log(token);
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

      try {
        setSubmitting(false);

        const { data } = await axios.post("url", values);
        console.log(data);

        dispatch(setLogin("TEST TOKEN")); //Import token to redux

        navigate("/"); //Redirect to Homepage
      } catch (err) {
        if (err instanceof Error) {
          formik.setStatus(err.message);
        }
      }
      setSubmitting(false);
    },
  });

  // console.log(formik.isSubmitting);
  // console.log(formik);

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
          <ButtonStyle type="submit">Sign In</ButtonStyle>
        )}
        {formik.status && <InputError>{formik.status}</InputError>}
      </FormStyle>
      <CreateAccountTextStyle>
        Don't have an Account? Create account
      </CreateAccountTextStyle>
    </>
  );
};

export default InputLogin;
