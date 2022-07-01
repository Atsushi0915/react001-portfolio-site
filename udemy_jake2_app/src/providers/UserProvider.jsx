import React, { createContext, useState } from 'react'

export const UserContext = createContext({});  //UserContext を生成

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);
  
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}

// App.jsx 内の<Router />を children として取得して chiildren としてそのまま返す。
// その時に、value を付加して返すので、<UserProvide></UserProvide>で囲った中で呼び出せるようになる。
// ↓↓こんなイメージ
//   <UserContext.Provider value={{ contextName }}>
//     <Router />
//   </UserContext.Provider>
//
// 呼び出し先は、
//  const context = useContext(UserContext)
// で呼び出す。
//  context 　は　{contextname: "あつし"}