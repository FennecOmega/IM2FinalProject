// Middleware to check if the user is a staff member
const permissionStaff = (req, res, next) => {
  const user = req.user; // Assuming user information is attached to the request

  if (user && user.user_type === 'Staff') {
    // User is a staff member, proceed to the next middleware or route handler
    next();
  } else {
    // User does not have staff permissions, send a forbidden response
    res.status(403).json({ message: 'Unauthorized access' });
  }
};

module.exports = permissionStaff;