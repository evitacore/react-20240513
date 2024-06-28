import { FC } from "react";

interface TitleProps {
  renderFirst: () => JSX.Element;
  renderSecond: () => JSX.Element;
}

export const Title: FC<TitleProps> = (props) => (
  <>
    {props.renderFirst()}
    {props.renderSecond()}
  </>
);
