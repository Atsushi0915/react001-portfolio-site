import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"
import { DefaultLayout } from "../components/templates/DefaultLayout"
import { HeaderOnly } from "../components/templates/HeaderOnly"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <DefaultLayout>
            <Top />
          </DefaultLayout>} >
        </Route>
        <Route exact path="/users" element={
          <HeaderOnly>
            <Users />
          </HeaderOnly>} >  
        </Route>
      </Routes>
    </BrowserRouter>
  )
}