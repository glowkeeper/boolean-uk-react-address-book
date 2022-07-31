import { Link } from "react-router-dom"

import { Paths } from "../utils"

export const ContactsList = (props) => {
  
  const { contacts, setContacts } = props

  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {contacts.map((contact, index) => {

          const { id, firstName, lastName } = contact
          return (
            <li className="contact" key={index}>
              <p>
                {firstName} {lastName}
              </p>
              <Link to={`${Paths.view}/${id}`}>View</Link>
              <Link to={`${Paths.edit}/${id}`}>Edit</Link>
              <Link to={`${Paths.delete}/${id}`}>Delete</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
