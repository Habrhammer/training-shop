import React, { useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { POST_FORM_REQUESTED } from "../../redux/reducers/subscribeReducer";
import SubscribeLoader from "../subscribe/subscribe-loader/SubscribeLoader";
import { useDispatch, useSelector } from "react-redux";
import NavColumn from "../footer-nav/NavColumn";
import "./Footer.scss";

const Footer = ({
  footerFormId,
  data: { navigation, socialLinks, payments },
}) => {
  const dispatch = useDispatch();
  const { loading, data, formId, error } = useSelector((data) => {
    return data.footerSubscribeForm;
  });

  let form = useRef();

  useEffect(() => {
    if (data?.status >= 200 && data?.status < 400) {
      form.current.setValues({ subscribeEmail: "" });
      dispatch({
        type: "POST_FORM_FAILED",
        error: false,
        formId: formId,
        loading: false
      });
    }
  }, [data?.status, dispatch,formId]);

  return (
    <footer className="footer" data-test-id="footer">
      <div className="footer__top footer-top">
        <div className="footer-top__body _container">
          <Formik
            innerRef={form}
            initialValues={{
              subscribeEmail: "",
            }}
            validationSchema={Yup.object({
              subscribeEmail: Yup.string().matches(
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/,
                "Неверный адрес электронной почты"
              ),
            })}
            onSubmit={(values, actions) => {
              dispatch({
                type: POST_FORM_REQUESTED,
                data: values,
                formId: footerFormId,
              });
              // actions.resetForm();
            }}
          >
            {(formik) => (
              <Form className="footer-top__form form-footer">
                <Field name="subscribeEmail" type="text">
                  {({ field, meta }) => (
                    <>
                      <div className="footer-top__title">
                        BE IN TOUCH WITH US:
                      </div>

                      <div>
                        {meta.touched && meta.error && (
                          <div className="form-footer__error">{meta.error}</div>
                        )}
                        <input
                          data-test-id="footer-mail-field"
                          type="email"
                          className="footer-top__input"
                          placeholder="Enter your email"
                          autoComplete="off"
                          {...field}
                        />
                        {/* {footerFormId === formId &&
                          data?.status &&
                          (data?.status >= 200 && data?.status < 400 ? (
                            <div className="form-footer__success">
                              Данные успешно отправлены!
                            </div>
                          ) : (
                            <div className="form-footer__error-request">
                              Ошибка отправки данных!
                            </div>
                          ))} */}
                        {formId === footerFormId && (data?.status ||
                        !error ? (
                          data?.status >= 200 &&
                          data?.status < 400 && (
                            <div className="form-footer__success">
                              Данные успешно отправлены!
                            </div>
                          )
                        ) : (
                          <div className="form-footer__error-request">
                            Ошибка отправки данных!
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </Field>
                <button
                  data-test-id="footer-subscribe-mail-button"
                  disabled={
                    (loading && formik.isSubmitting) ||
                    !(formik.isValid && formik.dirty)
                  }
                  className="footer-top__btn"
                >
                  {loading && formik.isSubmitting && <SubscribeLoader />}Join Us
                </button>
              </Form>
            )}
          </Formik>
          <div className="footer-top__social">
            {socialLinks.map(({ id, name, image, link }) => {
              return (
                <a href={link} key={id}>
                  <img src={image} alt={name} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer__body">
        <div className="footer__container _container">
          <div className="footer__menu footer-menu">
            <NavColumn navigation={navigation} categoryName="Categories" />
            <NavColumn navigation={navigation} categoryName="Information" />
            <NavColumn navigation={navigation} categoryName="Useful links" />
            <NavColumn navigation={navigation} categoryName="Contact us" />
          </div>
        </div>
      </div>
      <div className="footer__bottom footer-bottom">
        <div className="footer-bottom__body _container">
          <div className="footer-bottom__copyright">
            Copyright © 2032 all rights reserved
          </div>
          <div className="footer-bottom__payments">
            {payments.map(({ name, image }, ind) => {
              return <img src={image} alt={name} key={ind} />;
            })}
          </div>
          <div className="footer-bottom__link">
            <a href="https://Clevertec.ru/training">Clevertec.ru/training</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
