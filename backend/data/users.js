import bcrypt from 'bcryptjs'
const users = [
  {
    firstName: 'Arjun',
    lastName: 'Dubey',
    email: 'admin@example.com',
    rollNumber: '180013125029',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    firstName: 'Rohit',
    lastName: 'Singh',
    email: 'rohit@email.com',
    rollNumber: '180013125037',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
]

export default users
