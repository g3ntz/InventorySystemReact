import React, { useEffect, useState } from "react";
import { omit } from "lodash";

const useForm = (onSuccess, onError) => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});
  const [event, setEvent] = useState();

  useEffect(() => {
    event && validate(event, event.target.name, event.target.value);
  }, [event]);

  //A method to handle form inputs
  const handleChange = (event) => {
    //To stop default events
    event.persist();
    setEvent(event);

    let name = event.target.name;
    let val = event.target.value;

    setValues({
      ...values, //spread operator to store old values
      [name]: val,
    });
  };

  const validate = (event, name, value) => {
    //A function to validate each input values
    const input = event.target;
    const inputText = input.getAttribute("val-text");

    const setErrorColor = (isError) => {
      if (isError) {
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "var(--clr-primary)";
      }
    };

    // GET ALL INPUT ATTRIBUTES THAT STARTS WITH 'val-'
    const validationAttributes = [...event.target.attributes]
      .filter((attr) => attr.nodeName.startsWith("val-"))
      .map((attr) => {
        return { name: attr.nodeName, value: attr.nodeValue };
      });

    // VALIDATION BASED ON ATTRIBUTES
    validationAttributes.forEach((attrib) => {
      switch (attrib.name) {
        case "val-required":
          if (value === "") {
            setErrors({
              ...errors,
              [name]: `${inputText ? inputText : name} is required`,
            });
            setErrorColor(true);
          } else {
            let newObj = omit(errors, name);
            setErrors(newObj);
            setErrorColor(false);
          }
          break;
        case "val-minlength":
          if (value.length < attrib.value && value != "") {
            setErrors({
              ...errors,
              [name]: `${inputText ? inputText : name} should be longer than ${
                attrib.value
              } characters`,
            });
            setErrorColor(true);
          } else {
            if (value != "") {
              let newObj = omit(errors, name);
              setErrors(newObj);
              setErrorColor(false);
            }
          }
          break;
      }
    });

    // VALIDATIONS BASED ON INPUT TYPE
    if (input.getAttribute("type") === "email" && value != "") {
      if (
        !new RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).test(value)
      ) {
        setErrors({
          ...errors,
          email: "Enter a valid email address",
        });
        setErrorColor(true);
      } else {
        if (value != "") {
          let newObj = omit(errors, name);
          setErrors(newObj);
          setErrorColor(false);
        }
      }
    }

    if (input.getAttribute("type") === "password" && value != "") {
      if (
        !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
      ) {
        setErrors({
          ...errors,
          [name]:
            "Password should contains at least 8 characters and uppercase,lowercase and numbers",
        });
        setErrorColor(true);
      } else {
        if (value != "") {
          let newObj = omit(errors, name);
          setErrors(newObj);
          setErrorColor(false);
        }
      }

      // CHECK IF PASSWORD AND CONFIRM PASSWROD ARE THE SAME
      if (name === "confirmPassword") {
        if (
          values.password !== values.confirmPassword &&
          name === "confirmPassword"
        ) {
          setErrors({
            ...errors,
            confirmPassword: "Password and Confirm Password doesn't match",
          });
          setErrorColor(true);
        } else {
          let newObj = omit(errors, "confirmPassword");
          setErrors(newObj);
          setErrorColor(false);
        }
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(values).length === 0) {
      alert("You can't submit empty form");
      return;
    } else if (Object.keys(errors).length > 0) {
      alert("check form errors");
      return;
    } else {
      // CHECK IF THERE ARE EMPTY REQUIRED FIELDS
      const formInputs = event.target.elements;
      for (const input of formInputs) {
        if (input.value === "" && input.getAttribute("val-required")) {
          onError();
          return;
        }
      }
    }

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      onSuccess();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
