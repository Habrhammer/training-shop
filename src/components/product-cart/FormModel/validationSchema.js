import * as Yup from "yup";

let validationSchema = [
  Yup.object().shape({
    deliveryMethod: Yup.string(),
    phone: Yup.string()
      .required(`Поле должно быть заполнено`)
      .matches(
        /^\+375 \((25|29|33|44)\)[0-9]{3}[0-9]{2}[0-9]{2}$/,
        "Только номера беларусских операторов"
      ),
    email: Yup.string()
      .required(`Required`)
      .matches(
        /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,63}$/,
        "Неверный адрес электронной почты"
      ),
    country: Yup.string()
    // .when("deliveryMethod", {
    //   is: (val) =>
    //     val === "pickup from post offices" || val === "express delivery",
    //   then: Yup.string().required("Поле должно быть заполнено"),
    //   otherwise: Yup.string().notRequired(),
    // })
    .required("Поле должно быть заполнено"),
    storeAddress: Yup.string().when("deliveryMethod", {
      is: (val) =>
        val === "store pickup",
      then: Yup.string().required("Поле должно быть заполнено"),
      otherwise: Yup.string().notRequired(),
    }),
    city: Yup.string().when("deliveryMethod", {
      is: (val) =>
        // val === "pickup from post offices" || val === "express delivery",
        val !== "store pickup",
      then: Yup.string().required("Поле должно быть заполнено"),
      otherwise: Yup.string().notRequired(),
    }),
    street: Yup.string().when("deliveryMethod", {
      is: (val) =>
        val === "pickup from post offices" || val === "express delivery",
      then: Yup.string().required("Поле должно быть заполнено"),
      otherwise: Yup.string().notRequired(),
    }),
    house: Yup.string().when("deliveryMethod", {
      is: (val) =>
        val === "pickup from post offices" || val === "express delivery",
      then: Yup.string().required("Поле должно быть заполнено"),
      otherwise: Yup.string().notRequired(),
    }),
    postcode: Yup.string().when("deliveryMethod", {
      is: (val) => val === "pickup from post offices",
      then: Yup.string().min(6, "Поле должно содержать 6 символов").required("Поле должно быть заполнено"),
      otherwise: Yup.string().notRequired(),
    }),
    terms: Yup.boolean().oneOf(
      [true],
      "Вы должны согласиться на обработку личной информации"
    ),
  }),
  Yup.object().shape({
    paymentMethod: Yup.string(),
    card: Yup.string().when("paymentMethod", {
      is: (val) => val === "visa" || val === "mastercard",
      then: Yup.string()
            .min(16, "Поле должно содержать 16 символов").required("Поле должно быть заполнено"),
      otherwise: Yup.string().notRequired(),
    }),
    cardDate: Yup.string().when("paymentMethod", {
      is: (val) => val === "visa" || val === "mastercard",
      then: Yup.string()
        .required("Поле должно быть заполнено")
        .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Укажите корректные данные"),
      otherwise: Yup.string().notRequired(),
    }),
    cardCVV: Yup.string().when("paymentMethod", {
      is: (val) => val === "visa" || val === "mastercard",
      then: Yup.string()
        .required("Поле должно быть заполнено")
        .matches(/^[0-9]{3,4}$/, "Укажите корректные данные"),
      otherwise: Yup.string().notRequired(),
    }),
    cashEmail: Yup.string().when("paymentMethod", {
      is: (val) => val === "paypal",
      then: Yup.string()
        .required("Поле должно быть заполнено")
        .matches(
          /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,63}$/,
          "Неверный адрес электронной почты"
        ),
      otherwise: Yup.string().notRequired(),
    }),
  }),
];

export default validationSchema;
