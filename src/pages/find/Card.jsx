import React from 'react'
import { CiBookmark, CiLocationOn, CiSaveUp1, CiSearch } from "react-icons/ci";
export const Card = () => {
  return (
    <div className="two">
    <div className="upper">
        <img src="https://www.siegelgale.com/app/uploads/2021/10/SGCOM_Blog_211018.png" alt="" srcset="" />
        <div>
            <span>forntend devloper</span>
            <span>tcs</span>
        </div>
        <CiBookmark size={20} color="gray" />
    </div>

    <div className="mid">
        <div>
          <span>react</span>
        </div>
        <div>
          <span>javascript</span>
        </div>
        <div>
          <span>html</span>
        </div>
    </div>

    <div className="lower">
        <span>india,west bengal</span>
        <span>20 hours ago</span>
    </div>
  </div>
  )
}
