import {React, useState} from 'react';
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
import {AlertCircleIcon} from 'lucide-react-native';
import {StyleSheet} from 'react-native';

const FormControlCustom = props => {
  return (
    <Box>
      <FormControl
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        isRequired={false}>
        {/* <FormControlLabel mb="$1">
          <FormControlLabelText>{props.label}</FormControlLabelText>
        </FormControlLabel> */}
        <Input>
          <InputField
            type={props.type}
            defaultValue=""
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
          />
        </Input>
        {/* <FormControlHelper>
          <FormControlHelperText>{props.helperText}</FormControlHelperText>
        </FormControlHelper> */}
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

const styles = StyleSheet.create({});

export default FormControlCustom;
