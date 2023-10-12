import { Card, IconButton } from "@mui/material";
import Input from "../../shared/components/FormElements/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VALIDATOR_EMAIL, VALIDATOR_PASS } from "../../shared/utils/validators";
import { useForm } from "../../shared/hooks/FormHook";
import "./AuthenticatePage.css";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const AuthenticatePage = () => {
  const [formState, inputHandler] = useForm(
    {
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
  return (
    <Card className="authentication">
      <form action="submit" onSubmit={(e) => e.preventDefault()}>
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
        <IconButton
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
        </IconButton>
        {/* <Button disabled={!formState.formIsValid}>UPDATE PLACE</Button> */}
      </form>
    </Card>
  );
};

export default AuthenticatePage;
