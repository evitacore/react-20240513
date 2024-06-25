import { Button } from "../button/component";
import styles from "./styles.module.scss";

export const CartIndicator = ({ count, onClearClick }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <span className={styles.icon}>
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.276 3.63H12l-2.186 6.512h4.353l-1.941 8.77a1.86 1.86 0 01-1.816 1.459h-4.98a1.86 1.86 0 01-1.817-1.46l-1.844-8.77h5.026l2.826-5.5a1.86 1.86 0 011.654-1.01z" fill="currentColor"></path><path opacity=".4" d="M5.309 20.363c.048.004.097.006.147.006h13.13a1.86 1.86 0 001.818-1.469l1.826-8.76h-5.028l-2.824-5.5a1.86 1.86 0 00-1.654-1.01H12l-.625 1.861h1.248l1.56 4.648h-.015l-1.941 8.77a1.86 1.86 0 01-1.816 1.458H5.43c-.041 0-.082-.001-.122-.004z" fill="currentColor"></path></svg>
        </span>
        <span>Cart: {count}</span>
        {count > 0 && <Button onClick={onClearClick} className={styles.button}>
        <span className={styles.icon_clear}><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.091 2H12.908c.431-.001.862-.002 1.254.13a2.5 2.5 0 0 1 1.268.955c.233.341.35.756.469 1.17l.028.102.242.846C19.05 5.511 21 6.148 21 7v2l-1.49 1-1.415 9.84c-.063.44-.145.894-.453 1.214C17.07 21.646 15.62 22.5 12 22.5c-3.599 0-5.054-.844-5.632-1.436-.317-.324-.4-.79-.464-1.239L4.51 10 3 9V7.06c0-.93 1.952-1.565 4.832-1.865l.24-.838.029-.101c.117-.415.235-.83.469-1.17a2.5 2.5 0 0 1 1.267-.957c.392-.131.823-.13 1.254-.13zm2.913 2.907.04.138a47.09 47.09 0 0 0-4.088-.002l.039-.136c.169-.59.2-.655.224-.69a.5.5 0 0 1 .253-.191c.04-.013.11-.026.725-.026h1.605c.614 0 .685.013.725.026a.5.5 0 0 1 .253.191c.024.035.056.1.224.69zm3.647 3.932L19 7.934v-.15a8.147 8.147 0 0 0-1.043-.286C16.517 7.19 14.418 7 12 7c-2.428 0-4.522.18-5.955.487A7.5 7.5 0 0 0 5 7.778v.148l1.37.907 1.548 10.93c.975.664 2.951.737 4.082.737 2.704 0 3.762-.52 4.083-.738L17.65 8.839zM10.52 9l.48 9.75-1.5-.25-.98-9.37 2-.13zM13 18.75 13.48 9l2 .13-.98 9.37-1.5.25z" fill="currentColor"></path></svg></span>
        </Button>}
      </div>
    </div>
  );
};
