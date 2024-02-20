import React from 'react';
import UsersContainer from "./components/users/UsersContainer";
import CommentsContainer from "./components/comments/CommentsContainer";

const App = () => {
  return (
      <div>
        <UsersContainer/>
          <CommentsContainer/>
      </div>
  );
};

export default App;
