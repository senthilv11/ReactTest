import React from 'react'
import { useLocation,useNavigate  } from 'react-router-dom';
import { Button } from 'primereact/button';

export default function PageNav() {
    const location = useLocation();
    let navigate = useNavigate(); 
    let currentPath = location.pathname;
    const path1 = 'First-Page';
    const path2 = 'Second-Page';
    const path3 = 'Third-Page';
  console.log(location.pathname);
  const goto = (btn) => {
    if(btn === 'next'){
        if(location.pathname === '/First-Page'){
            navigate(path2);
        }else{
            navigate(path3)
        }
    }else{
        if(location.pathname === '/Third-Page'){
            navigate(path2)
        }else{
            navigate(path1)
        }
    }
  }
  return (
    <div className='nav-btn sticky bottom-0 right-0'>
        {currentPath !== '/First-Page'  && <Button label="Previous" icon="pi pi-angle-left" size="small" className='border-noround  m-1' onClick={()=>goto('before')} />}
        {currentPath !== '/Third-Page'  && <Button label="Next" icon="pi pi-angle-right" size="small" iconPos="right" className='border-noround  m-1' onClick={()=>goto('next')} />}
    </div>
  )
}
