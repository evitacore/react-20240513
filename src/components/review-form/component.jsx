import { useReducer } from "react";
import { Rating } from "../rating/component";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { useCreateReviewMutation } from "../../redux/service/api";

const INITIAL_STATE = {
  text: "",
  rating: 0,
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
      return {...INITIAL_STATE};
    default:
      return state;
  }
}

export const ReviewForm = ({ restaurantId }) => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

  const [createReview, { isLoading }] = useCreateReviewMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createReview({
      restaurantId,
      newReview: {
        ...form,
        userId: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
      },
    });
    dispatch({ type: "reset" });
  };

  if(isLoading) {
    return <div>Loading</div>
  }

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
        <input
          className={styles.input}
          placeholder="Enter your text"
          type="text"
          value={form.text}
          onChange={(e) =>
            dispatch({ type: "setText", payload: e.target.value })
          }
        />
      </div>
      <div className={styles.rating}>
        <div className={styles.rating}>Rating</div>
        <Rating
          rating={form.rating}
          onChange={(rating) =>
            dispatch({ type: "setRating", payload: rating })
          }
        />
      </div>
      <Button className={styles.button} type="submit">
        Save
      </Button>
    </form>
  );
};
