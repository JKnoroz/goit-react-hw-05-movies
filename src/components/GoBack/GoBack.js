import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import s from './GoBack.module.css';

export default function GoBack() {
  const location = useRef(useLocation()?.state?.from ?? '/');
  // const location = useLocation();
  const navigate = useNavigate();

  return (
    <button
      className={s.gobackButton}
      onClick={() => navigate(location.current)}
    >
      Go back
    </button>
  );
}
