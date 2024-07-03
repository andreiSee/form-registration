// Firstname validation
export const minFirstname = 2;
export const maxFirstname = 255;

// Lastname validation
export const minLastname = 2;
export const maxLastname = 255;

// Email validation
export const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password validation
export const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
