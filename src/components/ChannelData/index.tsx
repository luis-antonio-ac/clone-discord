import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Diego Fernandez"
          date="05/02/2020"
          isBot
          hasMention
          content={
            <>
              <Mention>Luís Antônio</Mention>, fala dev!
            </>
          }
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
        <ChannelMessage
          author="Luís Antônio"
          date="05/02/2020"
          content="Hoje é meu aniversário"
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
