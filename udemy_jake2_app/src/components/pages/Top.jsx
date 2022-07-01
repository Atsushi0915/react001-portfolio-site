import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/userState';
// import { UserContext } from '../../providers/UserProvider';

export const Top = () => {
  const navigate = useNavigate()
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);


  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true })
    navigate('/users')
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false })  
    navigate('/users')
  }

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <br />
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral} >一般ユーザー</SecondaryButton>
    </SContainer> 
  );
};

const SContainer = styled.div`
  text-align: center;
  padding: 20px;
`