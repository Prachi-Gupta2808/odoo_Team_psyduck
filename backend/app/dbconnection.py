import sys, os

# Make sure Python finds your app folder, not the system one
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app import create_app
from app.database import db

app = create_app()

with app.app_context():
    db.create_all()
    print("✅ Database connected and tables created successfully!")