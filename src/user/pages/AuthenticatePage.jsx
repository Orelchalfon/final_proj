import { Button, Card, colors } from "@mui/material";

import { useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/FormHook";
import { VALIDATOR_EMAIL, VALIDATOR_PASS } from "../../shared/utils/validators";
import { VALIDATOR_REQUIRE } from "./../../shared/utils/validators";
import "./AuthenticatePage.css";

const AuthenticatePage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const switchMode = () => {
    if (!isLogin) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLogin((prevMode) => !prevMode);
  };
  return (
    <Card className="authentication">
      <form action="submit" onSubmit={(e) => e.preventDefault()}>
        {!isLogin && (
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            errorText="Please enter a valid title."
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-Mail Address"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
          errorText="Please enter a valid title."
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_PASS()]}
          onInput={inputHandler}
          errorText="Please enter a valid description (at least 5 characters)."
        />
        {/* <IconButton
          type="submit"
          variant={"text"}
          color="primary"
          className="authentication-button"
          size="large"
          disabled={!formState.formIsValid}
          
        TouchRippleProps={{style:{borderRadius:"10px",width:"100%"}}}

          timeout={{ enter: 750, exit: 350 }}
        >
          <FontAwesomeIcon
            className="arrow"
            icon={faArrowRightLong}
            style={{borderRadius:"10px",}}
          />
        </IconButton> */}

        <Button
          color="primary"
          sx={{
            ":hover": {
              letterSpacing: "1px",
            },
            textTransform: "none",
          }}
          variant="outlined"
          disabled={!formState.formIsValid}
        >
          {isLogin ? "Sign-In" : "Sign-Up"}
        </Button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <Button
          size="small"
          sx={{
            ":hover": {
              backgroundColor: colors.lightBlue[700],
              letterSpacing: "1px",
            },
            textTransform: "none",
            marginInline: "15px",
            color: colors.lightBlue[50],
            backgroundColor: colors.lightBlue[800],
          }}
          onClick={() => switchMode()}
        >
          {isLogin ? "Sign-Up" : "Sign-In"}
        </Button>
      </p>
    </Card>
  );
};

export default AuthenticatePage;
