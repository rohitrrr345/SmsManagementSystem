import jwt from 'jsonwebtoken';

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log("No token provided in Authorization header",authHeader
        
    );
    return res.status(401).json({ message: 'Unauthorized: Token not provided' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("Token verification failed:", err.message);
      return res.status(403).json({ message: 'Forbidden: Token verification failed' });
    }
    req.user = user;
    next();
  });
};

export default authenticateJWT;
