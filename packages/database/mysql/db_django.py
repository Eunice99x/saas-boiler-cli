import os
import django
from django.conf import settings
from django.db import connections
from django.db.utils import OperationalError

# Function to configure Django settings
def setup_django():
    settings.configure(
        DATABASES={
            'default': {
                'ENGINE': 'django.db.backends.mysql',  # or 'django.db.backends.postgresql'
                'NAME': 'test_db',                     # your database name
                'USER': 'root',                         # your MySQL username
                'PASSWORD': '',                         # your password (empty in your case)
                'HOST': '127.0.0.1',                   # your database host
                'PORT': '3306',                         # MySQL port
            }
        },
        INSTALLED_APPS=[
            # Add your Django apps here if needed
        ],
    )
    django.setup()

# Function to check database connection
def check_db_connection():
    setup_django()  # Set up Django
    db_conn = connections['default']  # Get the default database connection
    try:
        db_conn.cursor()  # Try to open a cursor to check the connection
        print("Database connection successful!")
    except OperationalError:
        print("Database connection failed.")

        # Function to check database connection and fetch data
def fetch_data():
    db_conn = connections['default']  # Get the default database connection
    
    try:
        db_conn.cursor()  # Try to open a cursor to check the connection
        print("Database connection successful!")

        # Querying data
        data = TestData.objects.all()  # Fetch all records from the test_data table
        
        # Print fetched data
        for entry in data:
            print(f"Title: {entry.title},")

    except OperationalError:
        print("Database connection failed.")


if __name__ == "__main__":
    check_db_connection()  # Execute the connection check when the script is run
    fetch_data()


#this is a trash code fix it ahmed :) please !