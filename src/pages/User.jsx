import React from 'react';

import SessionController from '../networking/controllers/SessionController';

const User = () => {
  React.useEffect(() => {
    SessionController.getUser();
  }, []);

  return <div>User</div>;
};

export default User;
