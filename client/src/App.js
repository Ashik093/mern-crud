import React, { Component,Fragment } from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AppNavbar from './components/common/AppNavbar';
import CreatePage from './pages/CreatePage';
import ReadPage from './pages/ReadPage';
import UpdatePage from './pages/UpdatePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  render() {
    return (
      <Fragment>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
          <BrowserRouter>
          <AppNavbar/>

              <Routes>
                  <Route exact path="/" element={<ReadPage/>} />
                  <Route exact path="/create" element={<CreatePage/>} />
                  <Route exact path="/update/:id" element={<UpdatePage/>} />
              </Routes>
          </BrowserRouter>
      </Fragment>
      )
  }
}

