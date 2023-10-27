import { motion } from "framer-motion";
import Button from "../ui/GeneralButton";
import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";

const ContactForm = () => {
  const [email, setEmail] = useState<string>();
  const [contactMsg, setContactMsg] = useState<string>();

  const onChangeHandler = useCallback(
    (setter: Dispatch<SetStateAction<string | undefined>>) =>
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setter(e.target.value);
      },
    []
  );

  const onFocusHandler = useCallback(
    (setter: Dispatch<SetStateAction<string | undefined>>) => () =>
      setter((prevState) => (prevState === undefined ? "" : prevState)),
    []
  );

  const onBlurHandler = useCallback(
    (setter: Dispatch<SetStateAction<string | undefined>>) => () =>
      setter((prevState) => (prevState === "" ? undefined : prevState)),
    []
  );

  return (
    <form>
      <fieldset>
        <motion.label
          initial={{ y: 15, scale: 0.9 }}
          animate={
            email === "" || email ? { y: 0, scale: 1.1 } : { y: 15, scale: 0.9 }
          }
          htmlFor="email"
        >
          Email
        </motion.label>
        <input
          defaultValue={email}
          onChange={onChangeHandler(setEmail)}
          onFocus={onFocusHandler(setEmail)}
          onBlur={onBlurHandler(setEmail)}
          id="email"
          type="email"
        />
        <motion.label
          initial={{ y: 15, scale: 0.9 }}
          animate={
            contactMsg === "" || contactMsg
              ? { y: 0, scale: 1.1 }
              : { y: 15, scale: 0.9 }
          }
          htmlFor="message"
        >
          Message
        </motion.label>
        <textarea
          defaultValue={contactMsg}
          onChange={onChangeHandler(setContactMsg)}
          onFocus={onFocusHandler(setContactMsg)}
          onBlur={onBlurHandler(setContactMsg)}
          id="message"
          rows={3}
        />
      </fieldset>
      <Button
        type="submit"
        style={{
          color: "var(--color-color)",
          background: "var(--color-success)",
        }}
        content="Send"
      />
    </form>
  );
};

export default ContactForm;
