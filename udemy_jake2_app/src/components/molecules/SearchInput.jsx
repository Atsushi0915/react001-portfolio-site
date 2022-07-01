import styled from "styled-components"

import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../atoms/input/input"

export const SearchInput = () => {
  return (
    <>
      <SConrainer>
        <Input placeholder='検索条件を入力'/>
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </SConrainer>
    </>
  )
}

const SConrainer = styled.div`
  display: flex;
  align-items: center;
`

const SButtonWrapper = styled.div`
  padding-left: 8px;

`