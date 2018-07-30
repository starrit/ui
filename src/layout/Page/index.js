import React, {Fragment} from 'react'
import PrimaryNavBar from "../PrimaryNavigation";
import Footer from "../Footer";

const Page = (props) => {
  const {children} = props;

  return (
    <Fragment>
      <PrimaryNavBar/>
      {children}
      <Footer/>
    </Fragment>
  )
}


export default Page;
