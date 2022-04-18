import React, { useEffect, useState } from "react";
import { Field, useFormikContext } from "formik";
import NumberFormat from "react-number-format";
import Select from "react-select";
import "./DeliveryForm.scss";
import {
  requestCities,
  requestCountries,
} from "../../../redux/reducers/cartReducer";
import { useDispatch, useSelector } from "react-redux";

const deliveryMethods = [
  "pickup from post offices",
  "express delivery",
  "store pickup",
];

const DeliveryForm = () => {
  const dispatch = useDispatch();
  // const formContext = useFormikContext();
  let {setFieldValue, values} = useFormikContext();
  const [activeCountry, setActiveCountry] = useState(null);
  let [citiesSearch, setCitiesSearch] = useState("");

  const cartData = useSelector((data) => {
    return data.cart;
  });

  let country = cartData?.cities[0]?.country;

  const countryOptions = cartData.countries.map(({ name }) => {
    return {
      value: name,
      label: name,
    };
  });

  let citiesOptions =
    citiesSearch.length >= 3
      ? cartData.cities.map(({ city }) => ({ value: city, label: city }))
      : [];

  useEffect(() => {
    values.deliveryMethod === "store pickup" &&
      dispatch(requestCountries());
  }, [values.deliveryMethod, dispatch]);

  useEffect(() => {
    let searchParams = {
      city: citiesSearch,
      country: activeCountry,
    };

    citiesSearch.length === 3 && dispatch(requestCities(searchParams));
  }, [activeCountry, citiesSearch, dispatch]);

  useEffect(() => {
    if (country !== values.country) {
      // dispatch(setCities([]))
      setFieldValue("storeAddress", "");
    }
  }, [
    activeCountry,
    setFieldValue,
    values.country,
    country,
    dispatch,
  ]);

  return (
    <>
      <div className="orderForm__section ">
        <div className="orderForm__name-section">
          Choose the method of delivery of the items
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            padding: "27px 0 53px",
          }}
        >
          {deliveryMethods.map((method, index) => {
            return (
              <div key={index}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Field type="radio" name="deliveryMethod" value={method} />
                  {[...method].map((e, i) => (i === 0 ? e.toUpperCase() : e))
                    .join``}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="orderForm__section">
        <div className="orderForm__name-section">PHONE</div>
        <div className="orderForm__item">
          <Field name="phone" type="phone">
            {({ field, meta }) => (
              <>
                <NumberFormat
                  format="+375 (##)#######"
                  mask="_"
                  allowEmptyFormatting={true}
                  autoComplete="off"
                  {...field}
                />
                {meta.touched && meta.error && (
                  <div className="orderForm__error">{meta.error}</div>
                )}
              </>
            )}
          </Field>
        </div>
      </div>
      <div className="orderForm__section">
        <div className="orderForm__name-section">E-MAIL</div>
        <div className="orderForm__item">
          <Field name="email" type="email">
            {({ field, meta }) => (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  {...field}
                />
                {meta.touched && meta.error && (
                  <div className="orderForm__error">{meta.error}</div>
                )}
              </>
            )}
          </Field>
        </div>
      </div>
      {values.deliveryMethod !== "store pickup" && (
        <div className="orderForm__section">
          <div className="orderForm__name-section">ADRESS</div>
          <div className="orderForm__item">
            <Field name="country" type="text">
              {({ field, meta }) => (
                <>
                  <input
                    type="text"
                    placeholder="Country"
                    autoComplete="off"
                    {...field}
                  />
                  {meta.touched && meta.error && (
                    <div className="orderForm__error">{meta.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
          <div className="orderForm__item">
            <Field name="city" type="text">
              {({ field, meta }) => (
                <>
                  <input
                    type="text"
                    placeholder="City"
                    autoComplete="off"
                    {...field}
                  />
                  {meta.touched && meta.error && (
                    <div className="orderForm__error">{meta.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
          <div className="orderForm__item">
            <Field name="street" type="text">
              {({ field, meta }) => (
                <>
                  <input
                    type="text"
                    placeholder="Street"
                    autoComplete="off"
                    {...field}
                  />
                  {meta.touched && meta.error && (
                    <div className="orderForm__error">{meta.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <div className="orderForm__item" style={{ width: "50%" }}>
              <Field name="house" type="text">
                {({ field, meta }) => (
                  <>
                    <input
                      type="text"
                      placeholder="House"
                      autoComplete="off"
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <div className="orderForm__error">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
            </div>
            <div className="orderForm__item" style={{ width: "50%" }}>
              <Field name="apartment" type="text">
                {({ field, meta }) => (
                  <>
                    <input
                      type="text"
                      placeholder="Apartment"
                      autoComplete="off"
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <div className="orderForm__error">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
            </div>
          </div>
        </div>
      )}

      {values.deliveryMethod === "pickup from post offices" && (
        <div className="orderForm__section">
          <div className="orderForm__name-section">POSTCODE</div>
          <div className="orderForm__item">
            <Field name="postcode" type="text">
              {({ field, meta }) => (
                <>
                  <NumberFormat
                    format="BY######"
                    placeholder="BY______"
                    mask="_"
                    value={field.value}
                    onValueChange={(val) => {
                      return setFieldValue(
                        "postcode",
                        val.floatValue || ""
                      );
                    }}
                  />
                  {meta.touched && meta.error && (
                    <div className="orderForm__error">{meta.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
        </div>
      )}

      {values.deliveryMethod === "store pickup" && (
        <div className="orderForm__section">
          <div className="orderForm__name-section">ADRESS OF STORE</div>
          <div
            className="orderForm__item orderForm__item_select"
            style={{ marginBottom: "35px" }}
          >
            <Field name="country" type="text">
              {({ field, meta }) => (
                <>
                  <Select
                    className="orderForm__select orderForm-select"
                    classNamePrefix="orderForm-select"
                    options={countryOptions}
                    {...field}
                    value={countryOptions.find(
                      ({ value }) => value === field.value
                    )}
                    placeholder="Country"
                    noOptionsMessage={() => "Store address not founded"}
                    onChange={({ value }) => {
                      setFieldValue(field.name, value);
                      setActiveCountry(value);
                      field.onChange(value);
                    }}
                  />
                  {meta.touched && meta.error && (
                    <div className="orderForm__error">{meta.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
          <div
            className="orderForm__item orderForm__item_select"
            style={{ marginBottom: "35px" }}
          >
            <Field name="storeAddress">
              {({ field, meta }) => (
                <>
                  <Select
                    key={`${values.storeAddress}${values.country}`}
                    // key={activeCountry}
                    className="orderForm__select orderForm-select"
                    classNamePrefix="orderForm-select"
                    defaultValue={
                      values.storeAddress
                        ? {
                            label: values.storeAddress,
                            value: values.storeAddress,
                          }
                        : null
                    }
                    isDisabled={values.country === ""}
                    options={citiesOptions}
                    {...field}
                    value={citiesOptions.find(({ value }) => {
                      return value === field.value;
                    })}
                    placeholder="Store address"
                    noOptionsMessage={() => "Store address not founded"}
                    onChange={({ value }) => {
                      setFieldValue("storeAddress", value);
                      field.onChange(value);
                    }}
                    onInputChange={(value) => setCitiesSearch(value)}
                  />
                  {meta.touched && meta.error && (
                    <div className="orderForm__error">{meta.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
        </div>
      )}

      <div className="orderForm__section">
        <div className="orderForm__item orderForm__item_terms">
          <Field name="terms">
            {({ field, meta }) => (
              <>
                <label>
                  <input
                    type="checkbox"
                    autoComplete="off"
                    checked={field.value}
                    {...field}
                  />
                  <span>
                    I agree to the processing of my personal information
                  </span>
                </label>
                {meta.touched && meta.error && (
                  <div className="orderForm__error">{meta.error}</div>
                )}
              </>
            )}
          </Field>
        </div>
      </div>
    </>
  );
};

export default DeliveryForm;
