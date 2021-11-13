import { useSelector, useDispatch } from "react-redux";
import contactActions from "../../../redux/contacts-actions";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { getVisibleContacts } from "../../../redux/selectors";

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={(id) => dispatch(contactActions.deleteContact(id))}
        />
      ))}
    </ul>
  );
}

export default ContactList;
