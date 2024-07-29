import './Header.css';
import person from '../../assets/person.png';
import { useSelector } from 'react-redux';

function Header() {
  const { roles, token } = useSelector((state) => state.auth);
  console.log(roles);
  console.log(token);
  return (
    <div className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <h1 className='headerText animate-header'>مــــنصة متخــــصــــصــــة في كل شئ</h1>
            <div className='row mt-4'>
              <div className="col-4 text-center stats">
                <i className="fas fa-graduation-cap icon icon-1 animate-icon"></i>
                <div className="stat-value animate-icon">20</div>
                <div className="stat-label animate-icon">الكورسات</div>
              </div>
              <div className="col-4 text-center stats">
                <i className="fas fa-users icon icon-2 animate-icon"></i>
                <div className="stat-value animate-icon">200</div>
                <div className="stat-label animate-icon">الطلاب</div>
              </div>
              <div className="col-4 text-center stats">
                <i className="fas fa-chalkboard-teacher icon icon-3 animate-icon"></i>
                <div className="stat-value animate-icon">15</div>
                <div className="stat-label animate-icon">المدرسين</div>
              </div>
            </div>
          </div>
          <div className="col-md-7 text-center text-md-end">
            <img src={person} alt="Person" className='imgPerson animate-img' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
