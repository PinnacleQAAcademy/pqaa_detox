import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import MemberFormInputFields from './MemberFormInputFields';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { formatDate } from '../../utils/date';

const presentDate = new Date();
const yearMinusEighteen = presentDate.getFullYear() - 18;
const yearMinusOneHundredAndTen = presentDate.getFullYear() - 110;
const presentMonth = presentDate.getMonth();
const presentDay = presentDate.getDate();

const maxDate = moment(new Date()).subtract(18, 'years');

const MemberFormDateFields = ({
  labelAndPlaceholder,
  inputValue,
  inputChangeText,
  isFailingValidation,
  errorMessage,
  isInError,
}) => {
  const [date, setDate] = useState(inputValue || '');
  const [show, setShow] = useState(false);
  const [pickerDate, setPickerDate] = useState(date || new Date(maxDate));
  const [isError, setIsError] = useState(isInError);

  const setNewDate = (isShow, date) => {
    setShow(isShow);
    setIsError(false);
    setPickerDate(date);
    setDate(date);
    inputChangeText(date);
  };

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setNewDate(Platform.OS === 'ios', currentDate);
  };
  const handleConfirm = (confirmedDate) => {
    setNewDate(false, confirmedDate);
  };

  const handleCancelChange = () => {
    setShow(false);
    setDate(inputValue);
    setPickerDate(inputValue || new Date(maxDate));

    if (isFailingValidation) {
      setIsError(true);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setShow(true)}>
        <MemberFormInputFields
          labelAndPlaceholder={labelAndPlaceholder}
          editableStatus={false}
          inputValue={formatDate(date)}
          isFailingValidation={isFailingValidation}
          errorMessage={errorMessage}
          isInError={isError || isInError}
        />
      </TouchableOpacity>
      {show && (
        <View>
          <DateTimePicker
            timeZoneOffsetInMinutes={0}
            value={new Date(pickerDate) || new Date(maxDate)}
            mode="date"
            is24Hour={true}
            minimumDate={
              new Date(yearMinusOneHundredAndTen, presentMonth, presentDay)
            }
            maximumDate={new Date(yearMinusEighteen, presentMonth, presentDay)}
            display="default"
            onChange={handleChange}
          />
          {Platform.OS === 'ios' && (
            <View>
              <Button
                style={{margin: 5}}
                title="Confirm"
                onPress={() => handleConfirm(pickerDate)}
              />
              <Button
                style={{margin: 5}}
                title="Cancel"
                onPress={() => handleCancelChange()}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default MemberFormDateFields;
