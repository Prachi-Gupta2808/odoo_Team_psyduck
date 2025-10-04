from flask import Blueprint, request, jsonify
from .. import db
from ..models import User
from ..utils.jwt_utils import token_required
import jwt, os
from datetime import datetime, timedelta
import smtplib
from email.mime.text import MIMEText

auth_bp = Blueprint("auth", __name__)

# Admin creates user
@auth_bp.route("/create_user", methods=["POST"])
@token_required
def create_user(current_user):
    if current_user.role != "admin":
        return jsonify({"message": "Only admin can create users"}), 403

    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    role = data.get("role", "employee")

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "Email already exists"}), 400

    new_user = User(username=username, email=email, role=role)
    db.session.add(new_user)
    db.session.commit()

    send_email_notification(email, username)
    return jsonify({"message": f"{role} added successfully"}), 201

# Login route
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"message": "Invalid credentials"}), 401

    token = jwt.encode({
        "user_id": user.id,
        "exp": datetime.utcnow() + timedelta(hours=2)
    }, os.getenv("JWT_SECRET_KEY"), algorithm="HS256")

    return jsonify({"token": token, "role": user.role, "first_login": user.first_login})

# Set password route for first login
@auth_bp.route("/set_password", methods=["POST"])
def set_password():
    data = request.get_json()
    email = data.get("email")
    new_password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": "User not found"}), 404

    if not user.first_login:
        return jsonify({"message": "Password already set"}), 400

    user.set_password(new_password)
    db.session.commit()
    return jsonify({"message": "Password set successfully"}), 200

# Email notification function
def send_email_notification(to_email, username):
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    sender_email = os.getenv("EMAIL_USER")
    sender_password = os.getenv("EMAIL_PASS")

    subject = "You have been added to the App"
    body = f"Hi {username},\n\nYou have been added to the app by admin.\nPlease login and set your password."

    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = sender_email
    msg["To"] = to_email

    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, to_email, msg.as_string())
        server.quit()
    except Exception as e:
        print("Email send failed:", e)
