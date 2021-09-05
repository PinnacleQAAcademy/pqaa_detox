import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import MemberFormInputFields from './MemberFormInputFields';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';

const presentDate = moment(new Date()).format('YYYY-MM-DD');
const endDate = moment(new Date()).add(18, 'months').format('YYYY-MM-DD');

const MemberFormCalendarFields = ({
  labelAndPlaceholder,
  inputValue,
  inputChangeText,
  isFailingValidation,
  errorMessage,
  isInError,
}) => {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(inputValue);

  const calendarTap = () => {
    show === true ? setShow(false) : setShow(true);
  };

  const onConfirm = (confirmedDate) => {
    setSelectedDate(confirmedDate);
    inputChangeText(confirmedDate);
    setShow(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => calendarTap(true)}>
        <MemberFormInputFields
          labelAndPlaceholder={labelAndPlaceholder}
          editableStatus={false}
          inputValue={
            selectedDate
              ? moment(selectedDate.dateString).format('DD-MM-YYYY')
              : ''
          }
          isFailingValidation={isFailingValidation}
          errorMessage={errorMessage}
          isInError={isInError}
        />
      </TouchableOpacity>
      {show && (
        <Calendar
          current={presentDate}
          minDate={presentDate}
          maxDate={endDate}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => onConfirm(day)}
          markedDates={{
            [selectedDate.dateString]: {selected: true},
          }}
          monthFormat={'MMMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log('month changed', month);
          }}
          hideArrows={false}
          renderArrow={(direction) =>
            direction === 'right' ? (
              <AntDesign name="arrowright" />
            ) : (
              <AntDesign name="arrowleft" />
            )
          }
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
          showWeekNumbers={false}
          onPressArrowLeft={(substractMonth) => substractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
        />
      )}
    </View>
  );
};

export default MemberFormCalendarFields;
