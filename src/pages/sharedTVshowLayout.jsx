import SectionTitle from '../components/sectionTitle/sectionTitle.component';

import { Outlet } from 'react-router-dom'

function SharedTVshowLayout() {
   return (
      <>
         <SectionTitle title={"series"} />
         <Outlet />
      </>
   )
}

export default SharedTVshowLayout;