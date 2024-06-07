/* eslint-disable react/jsx-key */
import classNames from "classnames";
import styles from './styles.module.scss'

export const StarsRating = ({size = 5, rating = 5}) => {
  return <div>    
    {[...new Array(size)].map((_, index) => {
        const value = index + 1;

        return (
          <span className={classNames([styles.star], { [styles.checked]: value <= rating })} />
        )
      })}
  </div>;
};