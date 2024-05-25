import React from 'react';
import {
  Button,
  ButtonText,
  ButtonIcon,
  Box,
  VStack,
  Center,
} from '@gluestack-ui/themed';

const ServiceBox = props => {
  return (
    <Box>
      <Button>
        <ButtonIcon as={props.icon} />
        <ButtonText>{props.text}</ButtonText>
      </Button>
    </Box>
  );
};

export default ServiceBox;
