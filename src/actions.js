import { generateActions } from 'no-redux';

export const actionData = {
  things: {
    url: 'http://localhost:3000/load/'
  }
}

export default generateActions(actionData);