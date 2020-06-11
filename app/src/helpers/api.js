/* eslint import/prefer-default-export: 0 */

const API_ADDRESS = 'http://127.0.0.1:3001/'

export const getMessage = async () => {
  try {
    const request = await fetch(`${API_ADDRESS}message`);
    const message = await request.json();
    return message.message;
  } catch (err) {
    console.log('getMessage: err', err);
    return null;
  }
}