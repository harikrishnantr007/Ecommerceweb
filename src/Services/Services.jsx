import React from 'react'
import './service.scss'
import servicedata from '../Assets/data/servicedata'

const Services = () => {
  return (
    <div className='container'>
        <div className="row services">
            {
                servicedata.map((item,index)=>(
                    <div key={index} className="col-6 col-md-4 col-lg-3">
                        <div className="service-card" style={{background:`${item.bg}`}} > 
                        <div className="icon">{item.icon}</div>
                        <div><h6 className='service-title'>{item.title}</h6>
                        <p>{item.subtitle}</p></div>
                     
                    </div>
                    </div>   
                ))
            }
        
           
             
                
                
                
              
                
                
              
    </div>
    </div>
  )
}

export default Services