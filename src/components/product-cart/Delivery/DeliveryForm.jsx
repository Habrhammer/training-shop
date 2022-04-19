import React, { useEffect, useState } from "react";
import { Field, useFormikContext } from "formik";
import NumberFormat from "react-number-format";
import Select, { components } from "react-select";
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
  const { setFieldValue, values } = useFormikContext();
  const [activeCountry, setActiveCountry] = useState(null);
  const [citiesSearch, setCitiesSearch] = useState("");

  const cartData = useSelector((data) => data.cart);

  const country = cartData?.cities[0]?.country;

  const countryOptions = cartData.countries.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const citiesOptions =
    citiesSearch.length >= 3
      ? cartData.cities.map(({ city }) => ({ value: city, label: city }))
      : [];

  useEffect(() => {
    values.deliveryMethod === "store pickup" && dispatch(requestCountries());
  }, [values.deliveryMethod, dispatch]);

  useEffect(() => {
    const searchParams = {
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
  }, [activeCountry, setFieldValue, values.country, country, dispatch]);

  useEffect(() => {
    activeCountry !== null &&
      document
        ?.querySelector(".orderForm-select-country .orderForm-select__input")
        ?.setAttribute("value", activeCountry);
    document
      ?.querySelector(".orderForm-select-storeAddress .orderForm-select__input")
      ?.setAttribute("name", "storeAddress");
  });

  const CustomInput = (props) => {
    const { placeholder } = props.selectProps;
    const inputProps = { ...props, placeholder };
    return <components.Input {...inputProps} />;
  };

  return (
    <>
      <div className="orderForm__section">
        <div className="orderForm__name-section">
          Choose the method of delivery of the items
        </div>

        <div className="orderForm__items orderForm__items_deliveryMethod">
          {deliveryMethods.map((method, index) => (
            <div className="orderForm__item" key={index}>
              <label className="orderForm__label_deliveryMethod">
                <Field type="radio" name="deliveryMethod" value={method} />
                {[...method].map((element, index) =>
                  index === 0 ? element.toUpperCase() : element
                ).join``}
              </label>
            </div>
          ))}
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
          <div className="orderForm__items orderForm__items_address">
            <div className="orderForm__item">
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
            <div className="orderForm__item">
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
                    name="postcode"
                    format="BY######"
                    placeholder="BY______"
                    mask="_"
                    value={field.value}
                    onValueChange={(val) => {
                      setFieldValue("postcode", val.floatValue || "");
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
          <div className="orderForm__item orderForm__item_select">
            <Field name="country" type="text">
              {({ field, meta }) => (
                <>
                  <Select
                    className="orderForm__select orderForm-select orderForm-select-country"
                    classNamePrefix="orderForm-select"
                    components={{ Input: CustomInput }}
                    options={countryOptions}
                    {...field}
                    value={countryOptions.find(
                      ({ value }) => value === field.value
                    )}
                    defaultInputValue={field.value}
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
          <div className="orderForm__item orderForm__item_select">
            <Field name="storeAddress" type="text">
              {({ field, meta }) => (
                <>
                  <Select
                    key={`${values.storeAddress}${values.country}`}
                    // key={activeCountry}
                    className="orderForm__select orderForm-select orderForm-select-storeAddress"
                    classNamePrefix="orderForm-select"
                    name="storeAddress"
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
                    value={citiesOptions.find(
                      ({ value }) => value === field.value
                    )}
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
