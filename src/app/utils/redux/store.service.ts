import { Injectable } from '@angular/core';
import { createStore } from 'redux';
import * as _ from "lodash";

@Injectable()
export class StoreService {

  private store;

  ACTION_TYPES = {
    ADD_CONTACT: 'ADD_CONTACT',
    UPDATE_CONTACT: 'UPDATE_CONTACT',
    DELETE_CONTACT: 'DELETE_CONTACT'
  };

  ACTION_CREATORS = {
    addContact: (contact) => ({ type: this.ACTION_TYPES.ADD_CONTACT, contact }),
    updateContact: (contact) => ({ type: this.ACTION_TYPES.UPDATE_CONTACT, contact }),
    deleteContact: (id) => ({ type: this.ACTION_TYPES.DELETE_CONTACT, id })
  };

  REDUCERS = {
    addContact: (state = [], action) => {
      return [
        ...state,
        {
          id: action.contact.id,
          firstName: action.contact.firstName,
          lastName: action.contact.lastName,
          company: action.contact.company,
          phone: action.contact.phone,
          email: action.contact.email
        }
      ]
    },
    updateContact: (state = [], action) => {
      let newState = _.clone(state);
      let index = _.findIndex(newState, {'id': action.contact.id});
      newState[index] = action.contact;
      return newState;
    },
    deleteContact: (state = [], action) => {
      let newState = _.clone(state);
      _.remove(newState, {'id': action.id});
      return newState;
    }
  };

  contactsApp = (state = [], action) => {
    switch (action.type) {
      case this.ACTION_TYPES.ADD_CONTACT: return this.REDUCERS.addContact(state, action);
      case this.ACTION_TYPES.UPDATE_CONTACT: return this.REDUCERS.updateContact(state, action);
      case this.ACTION_TYPES.DELETE_CONTACT: return this.REDUCERS.deleteContact(state, action);
      default: return state;
    }
  }

  constructor() {
    this.store = createStore(this.contactsApp);
  }

  public getState(){
    return this.store.getState();
  }

  public dispatch(action){
    this.store.dispatch(action); 
  }

}