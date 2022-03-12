import React from 'react';

export const Login = React.memo((props) => {

return (
  <section className="login page__login">
    {props.children}
  </section>
)
})