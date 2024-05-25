import {React, useState} from 'react';
import {
  Box,
  InputSlot,
  FormControl,
  // FormControlLabel,
  // FormControlLabelText,
  Input,
  InputField,
  // FormControlHelper,
  // FormControlHelperText,
  InputIcon,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from '@gluestack-ui/themed';
import {AlertCircleIcon} from 'lucide-react-native';
import {StyleSheet} from 'react-native';

const FormControlCustom = props => {
  console.log('Props: ', props);
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
        <Input pr="$3" textAlign="center">
          <InputField
            type={props.type}
            value={props.value}
            onChangeText={props.onChange}
            placeholder={props.placeholder}
          />
          <InputSlot>
            <InputIcon as={props.icon} />
          </InputSlot>
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
