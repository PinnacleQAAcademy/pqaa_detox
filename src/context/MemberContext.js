import React, { useReducer } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const MemberContext = React.createContext();

const ASYNC_STORAGE_MEMBERS_KEY = 'members';

const GET_MEMBERS = 'GET_MEMBERS';
const ADD_MEMBER = 'ADD_MEMBER';
const ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS';
const ADD_MEMBER_FAILURE = 'ADD_MEMBER_FAILURE';
const EDIT_MEMBER = 'EDIT_MEMBER';
const EDIT_MEMBER_SUCCESS = 'EDIT_MEMBER_SUCCESS';
const EDIT_MEMBER_FAILURE = 'EDIT_MEMBER_FAILURE';
const DELETE_MEMBER = 'DELETE_MEMBER';
const DELETE_MEMBER_SUCCESS = 'DELETE_MEMBER_SUCCESS';
const DELETE_MEMBER_FAILURE = 'DELETE_MEMBER_FAILURE';

const memberInitialState = {
  members: [],
  isLoading: false,
  error: null,
};

const memberReducer = (state = memberInitialState, action) => {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload,
      };
    case ADD_MEMBER:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_MEMBER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: 'Failed to add member',
      };
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        members: action.updatedMembers,
      };
    case EDIT_MEMBER:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case EDIT_MEMBER_SUCCESS:
      return {
        ...state,
        members: action.editedMemberFilter,
      };

    case EDIT_MEMBER_FAILURE:
      return {
        ...state,
        error: 'Failed to edit member',
      };

    case DELETE_MEMBER: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        members: action.filteredMembers,
      };

    case DELETE_MEMBER_FAILURE:
      return {
        ...state,
        error: 'Failed to delete member',
      };
    default:
      return state;
  }
};

export const MemberProvider = ({ children }) => {
  const [memberState, dispatch] = useReducer(memberReducer, memberInitialState);

  const getMembers = async () => {
    try {
      let response = await AsyncStorage.getItem(ASYNC_STORAGE_MEMBERS_KEY);
      let parsedResponse = JSON.parse(response) || [];

      dispatch({ type: GET_MEMBERS, payload: parsedResponse });
    } catch (err) {
      return err;
    }
  };
  const addMember = async (newMember, callback) => {
    dispatch({type: ADD_MEMBER});
    const tmpMember = {
      id: Math.floor(Math.random() * 99999),
      ...newMember,
    };

    try {
      let updatedMembers = await AsyncStorage.getItem(
        ASYNC_STORAGE_MEMBERS_KEY,
      );

      if (!updatedMembers) {
        // the first time updatedMembers should be null.
        updatedMembers = [tmpMember];
      } else {
        updatedMembers = JSON.parse(updatedMembers);
        updatedMembers = [...updatedMembers, tmpMember];
      }

      await AsyncStorage.setItem(
        ASYNC_STORAGE_MEMBERS_KEY,
        JSON.stringify(updatedMembers),
      );
      dispatch({type: ADD_MEMBER_SUCCESS, updatedMembers});
      callback();
    } catch (e) {
      dispatch({type: ADD_MEMBER_FAILURE});
      callback();
    }
  };

  const editMember = async (id, editedMember, callback) => {
    dispatch({ type: EDIT_MEMBER });
    const tmpMember = { id, ...editedMember };
    try {
      const stringifiedMembers = await AsyncStorage.getItem(
        ASYNC_STORAGE_MEMBERS_KEY,
      );
      const members = JSON.parse(stringifiedMembers);
      const editedMemberFilter = members.map((member) => {
        return member.id === id ? tmpMember : member;
      });

      await AsyncStorage.setItem(
        ASYNC_STORAGE_MEMBERS_KEY,
        JSON.stringify(editedMemberFilter),
      );
      dispatch({ type: EDIT_MEMBER_SUCCESS, editedMemberFilter });
      callback();
    } catch (e) {
      dispatch({ type: EDIT_MEMBER_FAILURE });
    }
  };

  const deleteMember = async (id) => {
    dispatch({ type: DELETE_MEMBER });
    try {
      const stringifiedMembers = await AsyncStorage.getItem(
        ASYNC_STORAGE_MEMBERS_KEY,
      );
      const members = JSON.parse(stringifiedMembers);
      const filteredMembers = members.filter((member) => member.id !== id);
      await AsyncStorage.setItem(
        ASYNC_STORAGE_MEMBERS_KEY,
        JSON.stringify(filteredMembers),
      );
      dispatch({ type: DELETE_MEMBER_SUCCESS, filteredMembers });
    } catch (e) {
      dispatch({ type: DELETE_MEMBER_FAILURE });
    }
  };

  return (
    <MemberContext.Provider
      value={{
        data: memberState.members,
        addMember,
        editMember,
        getMembers,
        deleteMember,
      }}>
      {children}
    </MemberContext.Provider>
  );
};

export default MemberContext;
