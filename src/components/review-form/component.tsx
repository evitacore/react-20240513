import { FC, useReducer, FormEvent, Reducer } from "react";
import { Rating } from "../rating/component";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { Input } from "../input/component";

interface FormState {
  text: string;
  rating: number;
  userId?: string;
}

type Action = { type: string; payload: any };

const INITIAL_STATE: FormState = {
  text: "",
  rating: 5,
};

const reducer: Reducer<FormState, Action> = (
  state,
  { type, payload }
): FormState => {
  switch (type) {
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    case "reset":
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

type ReviewFormProps = {
  initialValue?: FormState;
  onSaveClick: any; // TODO (form: FormState) => void;
  onCancelClick?: () => void;
};

export const ReviewForm: FC<ReviewFormProps> = ({
  initialValue = INITIAL_STATE,
  onSaveClick,
  onCancelClick,
}) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSaveClick({ ...initialValue, ...form });
    dispatch({ type: "reset", payload: 0 });
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <Input
          value={form.text}
          setValue={(e) =>
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
      <Button onClick={handleSubmit}>Save</Button>
      {onCancelClick && <Button onClick={onCancelClick}>Cancel</Button>}
    </form>
  );
};
