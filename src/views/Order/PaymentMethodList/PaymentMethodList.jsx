import React, { useState } from "react";
import styles from "./PaymentMethodList.module.scss";
import clsx from "clsx";
import Collapse from "../../../components/Collapse/Collapse";
import BulletinBox from "../BulletinBox/BulletinBox";

const news = [
  {
    title: "우리페이 앱 종료에 따른 결제 안내",
    type: "공지",
  },
  {
    title: "품절 취소시 환불 안내",
    type: "공지",
  },
  {
    title: "현대카드 2% 청구할인, 20 % m포인트 사용",
    type: "혜택",
  },
  {
    title: "신용카드 무이자 할부 안내",
    type: "혜택",
  },
];

export default function PaymentMethodList({ paymentMethods }) {
  const [selectedMethod, setSelectedMethod] = useState();

  const onSelectMethod = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div>
      <div className={styles["payment-method-list"]}>
        {paymentMethods.map((method) => (
          <div
            onClick={() => onSelectMethod(method)}
            className={clsx(
              styles["payment-method-list__item"],
              selectedMethod?.value === method.value &&
                styles["payment-method-list__item--active"]
            )}
          >
            {method.label}
          </div>
        ))}
      </div>

      <Collapse
        title={selectedMethod ? selectedMethod.label : "카드사를 선택해주세요."}
        className={styles["form-payment-wrap"]}
      >
        <div className={styles["form-payment"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur dicta eveniet laudantium delectus velit laboriosam sed
            est maiores, assumenda molestiae, molestias praesentium. Ea, atque
            eveniet! Modi necessitatibus distinctio doloremque illum.
          </p>
        </div>
      </Collapse>

      <BulletinBox news={news} className={styles["bulletin-box-wrap"]} />
    </div>
  );
}
