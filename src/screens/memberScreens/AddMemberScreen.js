import React, { useContext } from 'react';
import { Text } from 'react-native';
import MemberContext from '../../context/MemberContext';
import MemberForm from '../../components/memberComponents/MemberForm';

const AddMemberScreen = ({ navigation }) => {
  const { addMember } = useContext(MemberContext);

  return (
    <MemberForm
      onSubmit={(newMember) => {
        addMember(newMember, () => navigation.navigate('Members'));
      }}
    />
  );
};

AddMemberScreen.navigationOptions = {
  headerTitle: 'Add Member',
  headerTitleAlign: 'center',
};

export default AddMemberScreen;
