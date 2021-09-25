import "./entry.style.css";
import { Card } from "react-bootstrap";
import { LoginForm } from "../../components/login/LoginForm.comp";
import { EventHandler, FormEvent, useState } from "react";
import { ResetPassword } from "../../components/passwordReset/PasswordReset.comp";

export type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (event: React.ChangeEvent<FormControlElement>) => {
    const { name, value } = event.target;

    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const onHandleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Fill up all the form!");
    }
  };

  const onHandleReset: FormEventHandler = (event) => {
    event.preventDefault();
    if (!email) {
      alert("Please enter email!");
    }
  };

  return (
    <div className="entry-page bg-info">
      <Card className="form-box">
        {formLoad === "login" && (
          <LoginForm
            onHandleSubmit={onHandleSubmit}
            handleOnChange={handleOnChange}
            email={email}
            password={password}
            formSwitcher={setFormLoad}
          />
        )}

        {formLoad === "reset" && (
          <ResetPassword
            onHandleReset={onHandleReset}
            handleOnChange={handleOnChange}
            email={email}
            formSwitcher={setFormLoad}
          />
        )}
      </Card>
    </div>
  );
};
