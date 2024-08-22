import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Register.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Input/Checkbox/Checkbox";
import { EmailRegex, PasswordRegex } from "../../constants";

export default function Register() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(EmailRegex, {
        message:
          "Invalid email format. It must have format like: example@test.com .",
      })
      .required(),
    password: yup
      .string()
      .min(8, "Password must have at least 8 characters.")
      .max(12, "Password must less than or equal 12 characters.")
      .matches(PasswordRegex, {
        message:
          "Password must including letters, number and special characters.",
      })
      .required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    address: yup.string().nullable(),
    additionAddress: yup.string().nullable(),
    phone: yup.string().nullable(),
    agreePolicy: yup.bool(),
    agreeReceivePromotionEmail: yup.bool(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (values) => {
    console.log("values: ", values);
    alert("Submit form");
  };

  return (
    <div className={styles["register-wrap"]}>
      <div className={styles["register-wrap__content"]}>
        <h3 className={styles["register-wrap__title"]}>JOIN US</h3>
        <div className={styles["register-wrap__divider"]}></div>

        <form
          className={styles["register-wrap__form"]}
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
                placeholder="example@email.com"
                label="아이디(이메일)"
                required
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
                type="password"
                label="비밀번호"
                required
                placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, formState: { errors } }) => (
              <Input
                {...field}
                error={errors.confirmPassword?.message}
                fluid
                type="password"
                label="비밀번호 확인"
                required
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field, formState: { errors } }) => (
              <Input
                {...field}
                error={errors.address?.message}
                fluid
                label="주소"
                suffix={
                  <span className={styles["register-wrap__link"]}>검색</span>
                }
              />
            )}
          />

          <Controller
            name="additionAddress"
            control={control}
            render={({ field, formState: { errors } }) => (
              <Input
                {...field}
                error={errors.additionAddress?.message}
                fluid
                placeholder="추가 주소"
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field, formState: { errors } }) => (
              <Input
                {...field}
                error={errors.phone?.message}
                fluid
                label="연락처"
              />
            )}
          />

          <div className={styles["register-wrap__checkbox-group"]}>
            <Controller
              name="agreePolicy"
              control={control}
              render={({ field, formState: { errors } }) => (
                <div>
                  <Checkbox {...field} id="agreePolicy">
                    <label
                      htmlFor="agreePolicy"
                      className={styles["register-wrap__checkbox-label"]}
                    >
                      <a className={styles["register-wrap__link"]} href="#">
                        이용약관
                      </a>{" "}
                      및{" "}
                      <a className={styles["register-wrap__link"]} href="#">
                        개인정보 처리 방침
                      </a>{" "}
                      에 동의합니다. (필수)
                    </label>
                  </Checkbox>
                </div>
              )}
            />

            <Controller
              name="agreeReceivePromotionEmail"
              control={control}
              render={({ field, formState: { errors } }) => (
                <div>
                  <Checkbox {...field} id="agreeReceivePromotionEmail">
                    <label
                      htmlFor="agreeReceivePromotionEmail"
                      className={styles["register-wrap__checkbox-label"]}
                    >
                      광고 및 메일 수신에 동의합니다. (선택)
                    </label>
                  </Checkbox>
                </div>
              )}
            />
          </div>

          <Button variant="solid" fluid htmlType="submit">
            가입하기
          </Button>
        </form>
      </div>
    </div>
  );
}
