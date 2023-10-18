import trainBtn from "../../../img/svg/bar-arrow.svg";

interface AnotherTrainsProps {
  end: string;
  onAnoterTrains: () => void;
}

export default function AnotherTrains({
  end,
  onAnoterTrains,
}: AnotherTrainsProps) {
  return (
    <div
      className={`choice-of-places__another-trains choice-of-places__another-trains-${end}`}
    >
      <img className="another-trains__img" src={trainBtn} alt="" />
      <span onClick={onAnoterTrains} className="another-trains__another-train">
        Выбрать другой поезд
      </span>
    </div>
  );
}
