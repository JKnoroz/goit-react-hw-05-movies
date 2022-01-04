import { useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import s from './GoBack.module.css';

export default function GoBack() {
  const location = useRef(useLocation()?.state?.from ?? '/');
  const navigate = useNavigate();

  return (
    <button className={s.gobackButton} onClick={() => navigate(location)}>
      Go back
    </button>
    // <Link to={location?.state?.from?.location ?? '/movies'}>
    //   {location?.state?.from ?? 'Назад'}
    // </Link>
  );
}
