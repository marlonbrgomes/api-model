import jwt from 'jsonwebtoken';

export function Authentication(key){
  let obj = jwt.decode(key);

  /**
      Check if some property of current key is really what you want.
      You can improve this validation for search on database if one ID really exist or something else.
      Be Creative! :)
  **/
  if(obj.admin === true)
    return key;
  else
    return false;
};

export function getToken(req){
    // POSTS HANDLER
    if (req.headers.authorization) {
      let authArray = req.headers.authorization.split(' ');

      if(authArray[0] === 'Bearer' && authArray.length > 1)
        return Authentication(authArray[1]);

    // GET HANDLER (QUERYSTRING)
    } else if (req.query && req.query.token)
        return Authentication(req.query.token);

    return null;
};
