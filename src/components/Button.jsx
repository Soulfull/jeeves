import React from 'react';
import { Link } from 'framework7-react';

const Button = (props) => (
    <Link
      className={`${props.className ? props.className : 'app-button'}`}
      href={props.href}
    >
      {props.children}
    </Link>
);

export default Button;
