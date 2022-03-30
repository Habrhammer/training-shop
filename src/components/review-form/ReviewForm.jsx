import React, { useEffect, useState } from "react";
import "./ReviewForm.scss";
import { Formik, Form, Field, useFormikContext } from "formik";
import { REVIEW_FORM_REQUESTED } from "../../redux/reducers/reviewFormReducer";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import StarRating from "../rating/StarRating";
import SubscribeLoader from "../subscribe/subscribe-loader/SubscribeLoader";

const LoadingHandler = () => {
  const { setSubmitting } = useFormikContext();
  useEffect(
    () => () => {
      setSubmitting(false);
    },
    [setSubmitting]
  );
  return <SubscribeLoader />;
};

const ReviewForm = ({ setShow }) => {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { loading, data } = useSelector((forms) => {
    return forms.reviewForm;
  });

  let setShowPopupHandler = () => {
    setShow(false);
  };

  let [rating, setRating] = useState(1);

  return (
    <div className="popup-wrapper" onClick={setShowPopupHandler}>
      <div
        data-test-id="review-modal"
        className="form-popup"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="form-popup__body">
          <Formik
            initialValues={{
              name: "",
              review: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Введите имя"),
              review: Yup.string().required("Введите отзыв"),
            })}
            onSubmit={(values, actions) => {
              console.log(actions);
              values.id = id;
              values.rating = rating;
              dispatch({
                type: REVIEW_FORM_REQUESTED,
                data: values,
              });
              actions.resetForm();
            }}
          >
            {(formik) => (
              <Form className="review-form">
                <h2 className="review-form__title">Write a review</h2>

                <div className="review-form__rating">
                  <StarRating returnRating={setRating} />
                </div>
                <Field name="name" type="text">
                  {({ field, meta }) => (
                    <div className="input-wrapper">
                      <input
                        data-test-id="review-name-field"
                        type="text"
                        autoComplete="off"
                        placeholder="Имя"
                        {...field}
                      />
                      {meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
                <Field name="review" type="text">
                  {({ field, meta }) => (
                    <div>
                      <textarea
                        data-test-id="review-text-field"
                        className="input-wrapper"
                        type="textarea"
                        placeholder="Комментарий"
                        autoComplete="off"
                        {...field}
                      />
                      {meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
                <div className="review-form__footer">
                  <button
                    data-test-id="review-submit-button"
                    type="submit"
                    className="review-form__button"
                    disabled={loading || !(formik.isValid && formik.dirty)}
                  >
                    {loading && formik.isSubmitting && <LoadingHandler />}
                    Send
                  </button>
                </div>
                {data?.status &&
                  (data?.status >= 200 && data?.status < 400 ? (
                    <div className="review-form__success">
                      <div>Данные успешно отправлены!</div>
                    </div>
                  ) : (
                    <div className="review-form__error-request">
                      <div>Ошибка отправки данных!</div>
                    </div>
                  ))}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
