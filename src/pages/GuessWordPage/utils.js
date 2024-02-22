export const initialStates = {
  isWordVisible: false,
  to: false,
  didPlayerSawWord: false,
  playerIndex: 0,
};

export const colors = [
  '#8cb36955',
  '#f4e28555',
  '#f4a25955',
  '#198ce055',
  '#5b8e7d55',
  '#bc4b5155',
];

export const getColor = (index) => {
  return colors[index % colors.length];
};
