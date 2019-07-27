import React, {SFC} from 'react';

interface demoProps {
  demo: string;
}

const Demo: SFC<demoProps> = props => <button> {props.demo} </button>

export default Demo;