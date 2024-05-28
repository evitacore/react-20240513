import { useReducer } from "react";
import { Rating } from "../rating/component";

const INITIAL_STATE = {
  name: "", 
  text: "",
  rating: 0,
};

function reducer(state, { type, payload } = {}) {
  switch(type) {
    case 'setName':
      return {...state, name: payload};
    case 'setText':
      return {...state, text: payload};
    case 'setRating':
      return {...state, rating: payload};
    case 'reset':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "reset" });
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <span>Name</span>
      <input 
        type="text" 
        value={form.name}
        onChange={(e) =>
          dispatch({ type: "setName", payload: e.target.value })
        }
      />
    </div>
    <div>
      <span>Text</span>
      <input 
        type="text" 
        value={form.text}
        onChange={(e) =>
          dispatch({ type: "setText", payload: e.target.value })
        }
      />
    </div>
    <div>
      <span>Rating</span>
      <Rating 
        value={form.rating}
        onClickRating={(e) =>
          dispatch({ type: "setRating", payload: Number(e.target.textContent) })
        }
      />
    </div>
    <button type="submit">Save</button>
  </form>;
};
