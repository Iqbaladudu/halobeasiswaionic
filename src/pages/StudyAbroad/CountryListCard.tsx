import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/Clicked";
import { AppDispatch, RootState } from "../../store/store";

interface Props {
  countryName?: string;
  url?: string;
  position: number;
}

const CountryListCard: React.FC<Props> = ({ countryName, url, position }) => {
  const dispatch: AppDispatch = useDispatch();
  const { isClicked, clickPos } = useSelector(
    (state: RootState) => state.ClickedSlice
  );
  const handleClick = () => {
    dispatch(toggle(position));
  };

  return (
    <div
      onClick={() => handleClick()}
      className={clsx(
        "w-[100px] h-[55px] bg-variants rounded-[10px] text-secondary flex justify-center text-[20px] items-center",
        isClicked && clickPos === position && "ring-2 ring-secondary"
      )}
    >
      <p>{countryName}</p>
    </div>
  );
};

export default CountryListCard;
