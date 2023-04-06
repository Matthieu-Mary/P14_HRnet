import { Link } from 'react-router-dom';
import closeBtn from "../assets/icons/close-button.svg"

type Props = {
  onClose: () => void;
}

function Modale({onClose}: Props) {
  return (
    <div className='modale'>
        <img src={closeBtn} alt="close button" onClick={onClose} />
        <p>Employé bien enregistré</p>
        <Link to="/employees">View Current Employees</Link>
    </div>
  )
}

export default Modale