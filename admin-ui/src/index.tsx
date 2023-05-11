import React from 'react';
import ReactDOM from 'react-dom';

import AdminUI from '@glue42/server-admin-ui';
import '@glue42/theme';
import '@glue42/theme/dist/packages/rc-select.css';
import "@glue42/server-admin-ui/dist/src/styles/index.css";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
require('react-dom');
(window as any).React2 = require('react');
console.log((window as any).React1 === (window as any).React2);


ReactDOM.render(
  <React.StrictMode>
    <AdminUI      
      apiURL="http://localhost:4356/api"
      theme="dark"
      auth="auth0"
      auth_auth0={{
        domain: "",
        clientId: "",
        audience: "",
        redirectUri: "",
      }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
