import { useSelector, useDispatch } from "react-redux";
import contactActions from "../../redux/contacts-actions";
import s from "./Filter.module.css";
import { getFilter } from "../../redux/selectors";

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        className={s.input}
        value={filter}
        onChange={(event) =>
          dispatch(contactActions.changeFilter(event.target.value))
        }
      />
    </label>
  );
}

export default Filter;
