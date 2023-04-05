import { Link } from 'react-router-dom'


function Modale() {
  return (
    <div className='modale'>
        <p>Employé bien enregistré</p>
        <Link to="/employees">View Current Employees</Link>
    </div>
  )
}

export default Modale