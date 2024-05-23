import React from 'react';
import {
  Box,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from '@gluestack-ui/themed';

const FormControl = props => {
  return (
    <Box h="$32" w="$72">
      <FormControl
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        isRequired={false}>
        <FormControlLabel mb="$1">
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="password"
            defaultValue="12345"
            placeholder="password"
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>
            Must be at least 6 characters.
          </FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            At least 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
  );
};