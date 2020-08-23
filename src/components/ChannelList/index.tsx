import React from 'react';

import { Container, Category, AddCategory } from './styles';
import ChannelButton from '../ChannelButton'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategory />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="faculdade" />
      <ChannelButton channelName="cs:go" />
      <ChannelButton channelName="Recol" />
    </Container>
  );
};

export default ChannelList;
