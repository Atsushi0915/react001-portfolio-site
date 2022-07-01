import { Footer } from "../atoms/laysout/Footer";
import { Header } from "../atoms/laysout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}