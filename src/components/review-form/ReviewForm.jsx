import React, { useEffect, useRef, useState } from "react";
import "./ReviewForm.scss";
import { Formik, Form, Field } from "formik";
import { REVIEW_FORM_REQUESTED } from "../../redux/reducers/reviewFormReducer";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import StarRating from "../rating/StarRating";
import SubscribeLoader from "../subscribe/subscribe-loader/SubscribeLoader";

const ReviewForm = ({ setShow }) => {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { loading, data, error } = useSelector((forms) => {
    return forms.reviewForm;
  });

  let setShowPopupHandler = () => {
    setShow(false);
  };

  let reviewForm = useRef();
  useEffect(() => {
    data?.status >= 200 && data?.status < 400 && setShow(false);
    dispatch({ type: "REVIEW_FORM_SUCCESS", data: {} });
    dispatch({ type: "REVIEW_FORM_FAILED", error: false });
  }, [data?.status, setShow, dispatch]);

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
            innerRef={reviewForm}
            initialValues={{
              name: "",
              review: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Введите имя"),
              review: Yup.string().required("Введите отзыв"),
            })}
            onSubmit={(values, actions) => {
              values.id = id;
              values.rating = rating;
              dispatch({
                type: REVIEW_FORM_REQUESTED,
                data: values,
              });
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
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
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
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <div className="review-form__footer">
                  <button
                    data-test-id="review-submit-button"
                    type="submit"
                    className="review-form__button"
                    disabled={
                      (loading && formik.isSubmitting) ||
                      !(formik.isValid && formik.dirty)
                    }
                  >
                    {loading && formik.isSubmitting && <SubscribeLoader />}
                    Send
                  </button>
                </div>
                {data?.status || !error ? (
                  data?.status >= 200 &&
                  data?.status < 400 && (
                    <div className="review-form__success">
                      <div>Данные успешно отправлены!</div>
                    </div>
                  )
                ) : (
                  <div className="review-form__error-request">
                    <div>Ошибка отправки данных!</div>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
