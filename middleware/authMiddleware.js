  const jwt = require('jsonwebtoken');
  function verifyJWT  (req,res,next)
  {
    
    token = req.body.cookie;
    console.log(token);
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
      const decoded = jwt.verify(token, 'your-secret-key');
      // req.userId = decoded.userId;
      next();
      } catch (error) {
        console.log(error)
      res.status(401).json({ error: 'Invalid token' });
      }
     
};
  module.exports = verifyJWT