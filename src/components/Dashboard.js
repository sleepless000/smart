import React from 'react';

const Dashboard = ({ location: { state } }) => {
  return (
    <>
      <h1>Dashboard</h1>
      {state && (
        <h2>
          Hello {state.user.username}, at {state.user.email}
        </h2>
      )}
    </>
  );
};

export default Dashboard;
