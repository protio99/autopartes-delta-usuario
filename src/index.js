import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
/* IMPORT DATA PICKER  */
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from 'date-fns/locale/es'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
    /* Import DatPicker Components  */

      <React.StrictMode>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <App />
      </MuiPickersUtilsProvider>
    </React.StrictMode>
);


