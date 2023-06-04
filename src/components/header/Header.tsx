import { useDispatch, useSelector } from 'react-redux';
import HeaderNavbar from './navbar/Navbar';
import { selectIsAuth } from '@/store/user/userSlice';
import { useEffect, useState } from 'react';
import { Token } from '@/constant';
import { AppDispatch } from '@/store';
import { fetchUserDataWithThunk } from '@/store/user/userSlice';

export default function Header() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.getItem(Token.Access)) {
      dispatch(fetchUserDataWithThunk());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderNavbar isAuth={isAuth} />
    </>
  );
}
