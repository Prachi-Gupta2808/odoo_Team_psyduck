from app import create_app  # import the create_app function from your app package

app = create_app()  # create the Flask app instance

if __name__ == "__main__":
    app.run(debug=True)  # start the Flask development server
