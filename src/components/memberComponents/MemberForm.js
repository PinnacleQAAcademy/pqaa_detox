import React, { useState} from 'react';
import { ScrollView, SafeAreaView} from 'react-native';
import { Button} from 'react-native-elements';
import MemberFormInputFields from './MemberFormInputFields';
import MemberFormDateFields from './MemberFormDateFields';
import MemberFormTimeFields from './MemberFormTimeFields';
import MemberFormPickerFields from './MemberFormPickerFields';
import MemberFormCalendarFields from './MemberFormCalendarFields';

const emailRegex = new RegExp(/^\S+@\S+\.\S+$/);

const MemberForm = ({ onSubmit, initialValues}) => {
  const [name, setName] = useState(initialValues.name);
  const [surname, setSurname] = useState(initialValues.surname);
  const [email, setEmail] = useState(initialValues.email);
  const [dateOfBirth, setDateOfBirth] = useState(initialValues.dateOfBirth);
  const [addressLineOne, setAddressLineOne] = useState(
    initialValues.addressLineOne,
  );
  const [addressLineTwo, setAddressLineTwo] = useState(
    initialValues.addressLineTwo,
  );
  const [city, setCity] = useState(initialValues.city);
  const [postcode, setPostcode] = useState(initialValues.postcode);
  const [country, setCountry] = useState(initialValues.country);
  const [startDate, setStartDate] = useState(initialValues.startDate);
  const [startTime, setStartTime] = useState(initialValues.startTime);
  const [startDay, setStartDay] = useState(initialValues.startDay);
  const [fieldsOnError, setFieldsOnError] = useState([]);

  const handleSubmit = () => {
    const valuesToSubmit = {
      name,
      surname,
      email,
      dateOfBirth,
      startDay,
      addressLineOne,
      addressLineTwo,
      city,
      postcode,
      country,
      startDate,
      startTime,
    };

    const errors = Object.keys(valuesToSubmit).filter((key) => {
      // not required
      if (key === 'addressLineTwo') {
        return false;
      }

      return !valuesToSubmit[key];
    });

    if (errors.length > 0) {
      return setFieldsOnError(errors);
    }

    setFieldsOnError([]);
    onSubmit(valuesToSubmit);
  };

  return (
    <ScrollView>
      <SafeAreaView style={{margin: 5}}>
        <MemberFormInputFields
          labelAndPlaceholder="Name"
          inputValue={name}
          inputChangeText={setName}
          editableStatus={true}
          isFailingValidation={!name}
          errorMessage="Please enter a valid name"
          isInError={fieldsOnError.includes('name')}
        />

        <MemberFormInputFields
          labelAndPlaceholder="Surname"
          inputValue={surname}
          inputChangeText={setSurname}
          editableStatus={true}
          isFailingValidation={!surname}
          errorMessage="Please enter a valid surname"
          isInError={fieldsOnError.includes('surname')}
        />
        <MemberFormDateFields
          labelAndPlaceholder="Date of Birth"
          inputValue={dateOfBirth}
          inputChangeText={setDateOfBirth}
          isFailingValidation={!dateOfBirth}
          errorMessage="Please enter a valid date of birth"
          isInError={fieldsOnError.includes('dateOfBirth') && !dateOfBirth}
        />
        <MemberFormPickerFields
          labelAndPlaceholder="Start Day"
          listValues="week"
          inputValue={startDay}
          inputChangeText={setStartDay}
          isFailingValidation={!dateOfBirth}
          errorMessage="Please enter a valid start day"
          isInError={fieldsOnError.includes('startDay') && !startDay}
        />
        <MemberFormInputFields
          labelAndPlaceholder="Email"
          inputValue={email}
          inputChangeText={(email) => setEmail(email)}
          editableStatus={true}
          isFailingValidation={!emailRegex.test(email)}
          errorMessage="Please enter a valid email"
          isInError={fieldsOnError.includes('email')}
        />
        <MemberFormInputFields
          labelAndPlaceholder="Address Line One"
          inputValue={addressLineOne}
          inputChangeText={(addressLineOne) =>
            setAddressLineOne(addressLineOne)
          }
          editableStatus={true}
          isFailingValidation={!addressLineOne}
          errorMessage="Address line one is required"
          isInError={fieldsOnError.includes('addressLineOne')}
        />
        <MemberFormInputFields
          labelAndPlaceholder="Address Line Two"
          inputValue={addressLineTwo}
          inputChangeText={(addressLineTwo) =>
            setAddressLineTwo(addressLineTwo)
          }
          editableStatus={true}
        />
        <MemberFormInputFields
          labelAndPlaceholder="City"
          inputValue={city}
          inputChangeText={(city) => setCity(city)}
          editableStatus={true}
          isFailingValidation={!city}
          errorMessage="City is required"
          isInError={fieldsOnError.includes('city')}
        />
        <MemberFormInputFields
          labelAndPlaceholder="Postcode"
          inputValue={postcode}
          inputChangeText={(postcode) => setPostcode(postcode)}
          editableStatus={true}
          isFailingValidation={!postcode}
          errorMessage="Postcode is required"
          isInError={fieldsOnError.includes('postcode')}
        />
        <MemberFormPickerFields
          labelAndPlaceholder="Country"
          inputValue={country}
          inputChangeText={setCountry}
          listValues="country"
          isFailingValidation={!country}
          errorMessage="Country is required"
          isInError={fieldsOnError.includes('country') && !country}
        />
        <MemberFormCalendarFields
          labelAndPlaceholder="Start Date"
          inputValue={startDate}
          inputChangeText={setStartDate}
          isFailingValidation={!startDate}
          errorMessage="Start date is required"
          isInError={fieldsOnError.includes('startDate') && !startDate}
        />
        <MemberFormTimeFields
          labelAndPlaceholder="Start Time"
          listValues="week"
          inputValue={startTime}
          inputChangeText={setStartTime}
          isFailingValidation={!startTime}
          errorMessage="Start time is required"
          isInError={fieldsOnError.includes('startTime') && !startTime}
        />

        <Button title="Save Member" onPress={handleSubmit} />
      </SafeAreaView>
    </ScrollView>
  );
};

MemberForm.defaultProps = {
  initialValues: {
    name: '',
    surname: '',
    email: '',
    dateOfBirth: '',
    addressLineOne: '',
    addressLineTwo: '',
    city: '',
    postcode: '',
    country: '',
    startDate: '',
    startDay: '',
  },
};

export default MemberForm;
