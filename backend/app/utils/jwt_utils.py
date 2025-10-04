from functools import wraps
from flask import request, jsonify
import jwt, os
from ..models import User

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get("Authorization")
        if not token:
            return jsonify({"message": "Token is missing"}), 401
        try:
            token = token.split()[1]  # Bearer <token>
            data = jwt.decode(token, os.getenv("JWT_SECRET_KEY"), algorithms=["HS256"])
            current_user = User.query.get(data["user_id"])
        except:
            return jsonify({"message": "Token is invalid"}), 401
        return f(current_user, *args, **kwargs)
    return decorated
