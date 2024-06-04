import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import Provider from './Provider/Provider.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
     <React.StrictMode>
     
      <Provider>
          <RouterProvider router={router} />
      </Provider>
     
   </React.StrictMode>,
  </div>
)
