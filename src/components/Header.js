import React, {Fragment} from 'react';

function Header({titulo}) {

    console.log(titulo);

    return (
        <Fragment>
          <h1>{titulo}</h1>
        </Fragment>
    )
}

export default Header;
