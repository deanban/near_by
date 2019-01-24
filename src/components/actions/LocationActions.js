export function setAddress(str) {
  return {
    type: 'SET_ADDRESS',
    payload: str,
  };
}

export function setMercator({ lat, lng }) {
  return {
    type: 'SET_MERCATOR',
    payload: { lat, lng },
  };
}
