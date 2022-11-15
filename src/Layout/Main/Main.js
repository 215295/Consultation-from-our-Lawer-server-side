import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';

import Navber from '../../Pages/Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet> </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;



// [
//  {name:
//  "Employer lawyer"
//  img:
//  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UBzQQYvE0bD_7q…"
//  discripe:
//  "Employment and labor lawyers broadly handle the relationships between …"
//  Price:
//  100
 
// }
 
 
//  {
//  name:
//  "Personal lawyer"
//  img:
//  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnwGfaNo-5ukPId…"
//  discripe:
//  "Personal injury lawyers work primarily in civil litigations, represent…"
//  Price:
//  100
//  }

// {
//  name:
//  "Corporate lawyer"
//  img:
//  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEM7XbxibIqPcgC5…"
//  discripe:
//  "Business lawyers, also known as corporate lawyers, handle legal matter…"
//  Price:
//  100
// }

// {
//  name:
//  "Criminal lawyer"
//  img:
//  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OWbzf94gADnai…"
//  discripe:
//  "Criminal defense lawyers advocate on behalf of those accused of crimin…"
//  Price:
//  100}

//  {
//  name:
//  "Estate lawyer"
//  img:
//  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOFhAE8EnaDRS6…"
//  discripe:
//  "An estate planning lawyer is well-versed in the intricacies of propert…"
//  Price:
//  100

//  }

//  {
//  name:
//  "Immigration lawyer"
//  img:
//  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaZlfzGIF1qV6bd…"
//  discripe:
//  "Gaining citizenship or legal status can be an intimidating process. Im…"
//  Price:
//  100}
// ]