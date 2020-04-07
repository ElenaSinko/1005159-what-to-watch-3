import * as React from "react";

interface Props {
  onClick: () => void;
}

export const Button: React.FunctionComponent<Props> = (props: Props) => {
  const {onClick} = props;
  return <div className="catalog__more">
    <button onClick={onClick} className="catalog__button" type="button">Show more</button>
  </div>;
};

