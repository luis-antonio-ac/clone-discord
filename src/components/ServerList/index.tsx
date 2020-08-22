import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome={true} />

      <Separator />

      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications={true} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={4} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
}

export default ServerList;