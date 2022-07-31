import { useParams } from "react-router-dom"
import { UIText } from "../utils"

export const ContactsView = (props) => {

  const { contacts } = props

  const { id } = useParams()

  const contact = contacts.find(contact => Number(contact.id) === Number(id))

  return (
    <>
      <h2>{UIText.contactViewTitle}</h2>
      {
        contact ? (

          <>            
            <p>{contact.firstName} {contact.lastName}</p>
            <p>{contact.street} {contact.city}</p>
          </>

        ) : (
            <p>{UIText.contactViewNone}</p>
        )
      }
    </>
  )
}