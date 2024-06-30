import { FC, useReducer, FormEvent, Reducer, ChangeEvent } from "react";
import { Rating } from "../rating/component";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { Input } from "../input/component";

interface FormState {
  text: string;
  rating: number;
}

type Action =
  | { type: "setText"; payload: string }
  | { type: "setRating"; payload: number }
  | { type: "reset" };

const INITIAL_STATE: FormState = {
  text: "",
  rating: 5,
};

const reducer: Reducer<FormState, Action> = (state, action): FormState => {
  switch (action.type) {
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    case "reset":
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

type ReviewFormProps = {
  initialValue?: FormState;
  onSaveClick: (form: FormState) => void;
  onCancelClick?: () => void;
};

export const ReviewForm: FC<ReviewFormProps> = ({
  initialValue = INITIAL_STATE,
  onSaveClick,
  onCancelClick,
}) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSaveClick({ ...initialValue, ...form });
    dispatch({ type: "reset" });
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <Input
          value={form.text}
          setValue={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "setText", payload: e.target.value })
          }
          placeholder="Enter your text"
        />
      </div>
      <div className={styles.rating}>
        <div className={styles.rating}>Choose your rating</div>
        <Rating
          rating={form.rating}
          onChange={(rating) =>
            dispatch({ type: "setRating", payload: rating })
          }
        />
      </div>
      <Button type="submit">Save</Button>
      {onCancelClick && <Button onClick={onCancelClick}>Cancel</Button>}
    </form>
  );
};
