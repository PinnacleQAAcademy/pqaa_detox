import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MemberFormInputFields from './MemberFormInputFields';
import { weekDays, countryList } from '../../data/pickerData';

const MemberFormPickerFields = ({
  labelAndPlaceholder,
  listValues,
  inputValue,
  inputChangeText,
  isFailingValidation,
  errorMessage,
  isInError,
}) => {
  const [chosenValue, setChosenValue] = useState(inputValue);
  const [show, setShow] = useState(false);
  const options = listValues === 'week' ? weekDays : countryList;

  const updateDay = (day) => {
    inputChangeText(day);
    setChosenValue(day);
    setShow(false);
  };

  const handlePickerChange = (itemValue) => updateDay(itemValue);

  return (
    <View>
      <TouchableOpacity onPress={() => setShow(true)}>
        <MemberFormInputFields
          labelAndPlaceholder={labelAndPlaceholder}
          editableStatus={false}
          inputValue={chosenValue}
          isFailingValidation={isFailingValidation}
          errorMessage={errorMessage}
          isInError={isInError}
        />
      </TouchableOpacity>
      {show && (
        <View style={{flexDirection: 'column'}}>
          <Picker
            selectedValue={options[0]}
            onValueChange={handlePickerChange}>
            {options.map((item, index) => {
              return <Picker.Item label={item} value={item} key={index} />;
            })}
          </Picker>
        </View>
      )}
    </View>
  );
};

export default MemberFormPickerFields;
