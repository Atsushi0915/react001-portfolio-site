import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useRecoilState } from "recoil"
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `あつし${val}`,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80',
    email: '12345@example.com',
    phone: '090-1111-2222',
    company: {
      name: "テスト株式会"
    },
    website: 'https://goggle.com'
    }
  }
))

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [ userInfo, setUserInfo ] = useRecoilState(userState)

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin});
  console.log(userInfo)
  
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  grid-gap: 20px;

`