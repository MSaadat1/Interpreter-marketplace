import "./styles.css";
import type { interpreterProfilesType } from "../types";

type Props = {
  interpreter: interpreterProfilesType;
  onClick: (interpreter: interpreterProfilesType) => void;
};
export function InterpretersProfile({ interpreter, onClick }: Props) {
  return (
    <div className="interpreter-card" id="find-interpreter">
      <h2 className="inter-card-name">{interpreter.name}</h2>
      <p className="inter-card-paraOne">
        {" "}
        Languages - -{" "}
        {Array.isArray(interpreter.language)
          ? interpreter.language.join(" - ")
          : interpreter.language}
      </p>
      <p className="inter-card-paraTwo">
        {" "}
        Field - -{" "}
        {Array.isArray(interpreter.field)
          ? interpreter.field.join(" - ")
          : interpreter.field}
      </p>
      <p className="inter-card-paraThree">
        {" "}
        Experience - - {interpreter.experience}
      </p>
      <button className="inter-connect" onClick={() => onClick(interpreter)}>
        Connect
      </button>
    </div>
  );
}
