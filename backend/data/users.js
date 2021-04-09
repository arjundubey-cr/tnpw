import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Arjun Dubey',
    email: 'admin@example.com',
    rollNumber: '180013125029',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Rohit Singh',
    email: 'rohit@email.com',
    rollNumber: '180013125037',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
]

export default users
