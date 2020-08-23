import React from 'react';

import { Container, Role, User, Avatar } from './styles';


const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickName="Luís Antônio" />

      <Role>Offline - 3</Role>
      <UserRow nickName="Twilio" isBot />
      
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />
      <UserRow nickName="Fulano" />

    </Container>
  );
};

export interface UserRowProps {
  nickName: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserRowProps> = ({ nickName, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickName}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

export default UserList;
