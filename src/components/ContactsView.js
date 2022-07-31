import { useParams } from "react-router-dom"

export const ContactsView = (props) => {

  const { contacts } = props

  const { id } = useParams()

  const contact = contacts.find(contact => Number(contact.id) === Number(id))

  return (
    <>
      <h2>Contact Info</h2>
      {
        contact ? (

          <>
            
            <p>{contact.firstName} {contact.lastName}</p>
            <p>{contact.street} {contact.city}</p>
          </>

        ) : (

          <>
            <p>No such contact...</p>
          </>
        )
      }
    </>
  )
}