import { useReducer } from "react";
import { Rating } from "../rating/component";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { Input } from "../input/component";

const INITIAL_STATE = {
  text: "",
  rating: 5,
};

function reducer(state, { type, payload } = {}) {
  switch (type) {
    // case 'setName':
    //   return {...state, name: payload};
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    case "reset":
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

export const ReviewForm = ({
  initialValue = INITIAL_STATE,
  onSaveClick,
  onCancelClick,
}) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveClick({ ...initialValue, ...form });
    dispatch({ type: "reset" });
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      {/* <div className={styles.field}>
      <input 
        className={styles.input}
        placeholder="Enter your name"
        type="text" 
        value={form.name}
        onChange={(e) =>
          dispatch({ type: "setName", payload: e.target.value })
        }
      />
    </div> */}
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
