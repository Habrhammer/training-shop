import React, { useEffect } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import { POST_FORM_REQUESTED } from "../../redux/reducers/subscribeReducer";
import SubscribeLoader from "../subscribe/subscribe-loader/SubscribeLoader";

import "./Subscribe.scss";
import man from "./../../assets/images/subscribe_section/man.png";
import woman from "./../../assets/images/subscribe_section/woman.png";
import { useDispatch, useSelector } from "react-redux";

const LoadingHandler = () => {
  const { setSubmitting } = useFormikContext();

  // resets the form state on unmount
  useEffect(
    () => () => {
      setSubmitting(false);
    },
    [setSubmitting]
  );
  return <SubscribeLoader />;
};

const Subscribe = ({ subscribeFormId }) => {
  const dispatch = useDispatch();
  const { loading, data, formId } = useSelector((data) => {
    return data.subscribeForm;
  });
  console.log(subscribeFormId);

  return (
    <section className="subscribe">
      <div className="subscribe__body _container">
        <div className="subscribe__content">
          <h2 className="subscribe__title">Special Offer</h2>
          <div className="subscribe__text">
            Subscribe
            <br /> And <span>Get 10% Off</span>
          </div>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string().email("Неверный адрес электронной почты"),
            })}
            onSubmit={(values, actions) => {
              dispatch({
                type: POST_FORM_REQUESTED,
                data: values,
                formId: subscribeFormId,
              });
              actions.resetForm()
            }}
          >
            {(formik) => (
              <Form className="subscribe__form subscribe-form">
                <Field name="email" type="text">
                  {({ field, meta }) => (
                    <>
                      <input
                        data-test-id="main-subscribe-mail-field"
                        type="email"
                        className="subscribe-form__input"
                        placeholder="Enter your email"
                        autoComplete="off"
                        {...field}
                      />
                      {meta.error && (
                        <div className="subscribe-form__error">
                          {meta.error}
                        </div>
                      )}
                    </>
                  )}
                </Field>

                <button
                  data-test-id="main-subscribe-mail-button"
                  disabled={
                    formik.isSubmitting || !(formik.isValid && formik.dirty)
                  }
                  type="submit"
                  className="subscribe-form__btn"
                >
                  {loading && formik.isSubmitting && <LoadingHandler />}Subcribe
                </button>
                {formId === subscribeFormId &&
                  data?.status &&
                  (data?.status >= 200 && data?.status < 400 ? (
                    <div className="subscribe-form__success">
                      Данные успешно отправлены!
                    </div>
                  ) : (
                    <div className="subscribe-form__error-request">
                      Ошибка отправки данных!
                    </div>
                  ))}
              </Form>
            )}
          </Formik>
        </div>
        <img src={woman} alt="women" className="subscribe__img1" />
        <img src={man} alt="men" className="subscribe__img2" />
      </div>
    </section>
  );
};

export default Subscribe;
