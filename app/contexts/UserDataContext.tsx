import React from 'react';

const UserDataContext = React.createContext({
  userData: [] as string[],
});
export default UserDataContext;
