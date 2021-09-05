import React, { useContext } from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import MemberContext from '../../context/MemberContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MemberFields from '../../components/memberComponents/MemberFields';
import {formatDate} from '../../utils/date';
import moment from 'moment';

const ShowMemberScreen = ({ navigation }) => {
  const { data } = useContext(MemberContext);

  const member = data.find((member) => member.id === navigation.getParam('id'));
  return (
    <ScrollView>
      <SafeAreaView>
        <MemberFields labelText="ID" fieldValue={member.id} />
        <MemberFields labelText="Name" fieldValue={member.name} />
        <MemberFields labelText="Surname" fieldValue={member.surname} />
        <MemberFields
          labelText="Date of Birth"
          fieldValue={formatDate(member.dateOfBirth)}
        />
        <MemberFields labelText="Start Day" fieldValue={member.startDay} />
        <MemberFields labelText="Email" fieldValue={member.email} />
        <MemberFields
          labelText="Address Line One"
          fieldValue={member.addressLineOne}
        />
        <MemberFields
          labelText="Address Line Two"
          fieldValue={member.addressLineTwo}
        />
        <MemberFields labelText="City" fieldValue={member.city} />
        <MemberFields labelText="Postcode" fieldValue={member.postcode} />
        <MemberFields labelText="Country" fieldValue={member.country} />
        <MemberFields
          labelText="Start Date"
          fieldValue={moment(member.startDate.dateString).format('DD-MM-YYYY')}
        />
        <MemberFields
          labelText="Start Time"
          fieldValue={
            member.startTime ? moment(member.startTime).format('HH:mm') : ''
          }
        />
      </SafeAreaView>
    </ScrollView>
  );
};

ShowMemberScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');

  return {
    headerTitle: `Member ${id}`,
    headerTitleAlign: 'center',
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('EditMember', {id})}>
        <FontAwesome style={styles.editIcon} name="pencil" size={25} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  editIcon: {
    paddingRight: 5,
  },
});

export default ShowMemberScreen;
