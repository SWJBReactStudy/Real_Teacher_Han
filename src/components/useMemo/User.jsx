import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  color: ${(props) => (props.active ? "salmon" : "black")};
`;

const User = ({ user, onRemove, onToggle }) => {
  return (
    <div>
      <Title active={user.active} onClick={() => onToggle(user.id)}>
        {user.name}
      </Title>
      <p>{user.email}</p>
      <button onClick={() => onRemove(user.id)}>X</button>
    </div>
  );
};

export default User;
