import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./Login.module.scss";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { AppPath, EmailRegex, PasswordRegex } from "../../constants/index";

export default function Login() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(EmailRegex, {
        message:
          "Invalid email format. It must have a format like: example@test.com.",
      })
      .required("Email is required."),
    password: yup
      .string()
      .min(8, "Password must have at least 8 characters.")
      .max(12, "Password must be less than or equal to 12 characters.")
      .matches(PasswordRegex, {
        message:
          "Password must including letters, number and special characters.",
      })
      .required("Password is required."),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log("values: ", values);
    alert("Submit form");
  };

  const handleClickRegister = () => {
    navigate(AppPath.Register);
  };

  return (
    <div className={styles["login-wrap"]}>
      <div className={styles["login-wrap__content"]}>
        <h3 className={styles["login-wrap__title"]}>Welcome!</h3>
        <div className={styles["login-wrap__divider"]}></div>
        <form
          className={styles["login-wrap__form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="email"
            control={control}
            render={({ field, formState: { errors } }) => (
              <Input
                {...field}
                error={errors.email?.message}
                fluid
                placeholder="아이디 (이메일)"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, formState: { errors } }) => (
              <Input
                {...field}
                error={errors.password?.message}
                fluid
                placeholder="비밀번호"
                type="password"
              />
            )}
          />

          <Button variant="solid" fluid htmlType="submit">
            로그인하기
          </Button>
        </form>

        <p className={styles["login-wrap__other-method"]}>
          SNS 계정으로 로그인
        </p>

        <div className={styles["login-wrap__socials"]}>
          <button>
            <img
              className={styles["login-wrap__socials__icon"]}
              src="/assets/images/naver-icon.webp"
              srcSet="/assets/images/naver-icon.webp 1x,
              /assets/images/naver-icon@2x.webp 2x,
             /assets/images/naver-icon@3x.webp 3x"
              alt="naver icon"
            />
          </button>
          <button>
            <img
              className={styles["login-wrap__socials__icon"]}
              src="/assets/images/kakao-icon.webp"
              srcSet="/assets/images/kakao-icon.webp 1x,
              /assets/images/kakao-icon@2x.webp 2x,
             /assets/images/kakao-icon@3x.webp 3x"
              alt="kakao icon"
            />
          </button>
          <button>
            <img
              className={styles["login-wrap__socials__icon"]}
              src="/assets/images/facebook-icon.webp"
              srcSet="/assets/images/facebook-icon.webp 1x,
              /assets/images/facebook-icon@2x.webp 2x,
             /assets/images/facebook-icon@3x.webp 3x"
              alt="facebook icon"
            />
          </button>
          <button>
            <img
              className={styles["login-wrap__socials__icon"]}
              src="/assets/images/google-icon.webp"
              srcSet="/assets/images/google-icon.webp 1x,
              /assets/images/google-icon@2x.webp 2x,
             /assets/images/google-icon@3x.webp 3x"
              alt="google icon"
            />
          </button>
        </div>

        <Button variant="outline" fluid onClick={handleClickRegister}>
          계정이 없으신가요? 간편가입하기
        </Button>

        <div className={styles["login-wrap__other-actions"]}>
          <a href="#">아이디(이메일)찾기</a>
          <a href="#">비밀번호 찾기</a>
        </div>
      </div>
    </div>
  );
}
