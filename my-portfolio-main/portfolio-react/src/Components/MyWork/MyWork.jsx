import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useNavigate } from 'react-router-dom'

const MyWork = () => {
  const navigate = useNavigate()


const handleClick = (work) => {
    navigate(`/project/${work.id}`, { state: { work } });
  };


  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>

        </div>
      <div className="mywork-container" >
        {mywork_data.map((work, index)=>{
            return <img key={index} src={work.w_img} alt="" onClick={() => handleClick(work)}/>
        })}

      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
