import { useState } from "react";
import { data } from "./data";
import * as S from "./styles";

export const Sidebar = () => {
  const [state, setState] = useState(0);
  const handleIconClick = (i) => setState(i);

  return (
    <S.Container>
      {data.map((item, index) => (
        <S.Button
          key={index}
          index={index}
          state={state}
          onPress={() => handleIconClick(index)}
        >
          <S.Icons
            key={index}
            index={index}
            state={state}
            name={item.icon}
            size={index === state ? 30 : 20}
          />
        </S.Button>
      ))}
      <S.YellowLeftBall state={state} />
      <S.GrayLeftSquare state={state} />
      <S.YellowBall state={state} />
      <S.YellowRightBall state={state} />
      <S.GrayRightSquare state={state} />
    </S.Container>
  );
};
