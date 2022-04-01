import React, { useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { POST_FORM_REQUESTED } from "../../redux/reducers/subscribeReducer";
import SubscribeLoader from "../subscribe/subscribe-loader/SubscribeLoader";

import "./Subscribe.scss";
import man from "./../../assets/images/subscribe_section/man.png";
import woman from "./../../assets/images/subscribe_section/woman.png";
import { useDispatch, useSelector } from "react-redux";

const Subscribe = ({ subscribeFormId }) => {
  const dispatch = useDispatch();
  const { loading, data, formId, error } = useSelector((data) => {
    return data.subscribeForm;
  });

  let form = useRef();

  useEffect(() => {
    if(data?.status >= 200 &&
      data?.status < 400 ){
        form.current.setValues({ email: "" });
        dispatch({
          type: "POST_FORM_FAILED",
          error: false,
          formId: formId,
          loading: false
        })
    }
    // data?.status >= 200 &&
    //   data?.status < 400 &&
    //   form.current.setValues({ email: "" });
    //   dispatch({
    //     type: "POST_FORM_FAILED",
    //     error: false,
    //   })
  }, [data?.status,dispatch,formId]);

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
            innerRef={form}
            initialValues={{
              email: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string().matches(
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/,
                "Неверный адрес электронной почты"
              ),
            })}
            onSubmit={(values, actions) => {
              dispatch({
                type: POST_FORM_REQUESTED,
                data: values,
                formId: subscribeFormId,
              });
              // actions.resetForm()
            }}
          >
            {(formik) => (
              <Form ref={form} className="subscribe__form subscribe-form">
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
                      {meta.touched && meta.error && (
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
                    (loading && formik.isSubmitting) ||
                    !(formik.isValid && formik.dirty)
                  }
                  type="submit"
                  className="subscribe-form__btn"
                >
                  {loading && formik.isSubmitting && <SubscribeLoader />}
                  Subcribe
                </button>
                {console.log(data?.status)}
                {/* {formId === subscribeFormId &&
                  data?.status &&
                  (data?.status >= 200 && data?.status < 400 ? (
                    <div className="subscribe-form__success">
                      Данные успешно отправлены!
                    </div>
                  ) : (
                    <div className="subscribe-form__error-request">
                      Ошибка отправки данных!
                    </div>
                  ))} */}
                {formId === subscribeFormId &&
                  (data?.status || !error ? (
                  data?.status >= 200 && data?.status < 400 && (
                    <div className="subscribe-form__success">
                      Данные успешно отправлены!
                    </div>
                  )) : (
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
