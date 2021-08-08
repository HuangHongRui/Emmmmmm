import React from "react";
import ReactDOM from "react-dom";
import Demo from "./components/Demo";
import Yiku from "./components/Yiku";
import 'antd/dist/antd.css';

import { column, data, mergeColumns } from './components/Yiku/config';

ReactDOM.render(
  <div>
    <Demo demo='123'/>
    <Yiku
      columns={column}
      dataSource={data}
      mergeColumns={mergeColumns}
    />
  </div>,
  document.getElementById("root")
);