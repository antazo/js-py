# js-py

Testing the different JS libraries and frameworks under a Pythonic environment.

For this project we are going to use:

* BACKEND: Django API
* FRONTEND: React.js

## Installation

Clone (or fork) this repository:

```bash
git clone https://github.com/antazo/js-py
cd js/py
```

### Virtual environment

```bash
python -m venv myenv
source myenv/bin/activate
# On Windows use `.\myenv\Scripts\activate`
pip install -r requirements.txt
```

### Run

Run the backend and the frontend in different terminals. For the backend:

```bash
cd backend
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

For the frontend:

```bash
cd frontend
npm start
```

## Documentation

Follow these steps to create the project **js-py** from the scratch.

Create the backend with a new Django project, and API app:

```bash
mkdir backend
cd backend
django-admin startproject core .
django-admin startapp api
```

Add in `backend/core/settings.py`:

* `'rest_framework'`, `'corsheaders'` and `'api'` to INSTALLED_APPS
* `'corsheaders.middleware.CorsMiddleware'` to MIDDLEWARE
* `'http://localhost:3000'` to CORS_ALLOWED_ORIGINS

For the frontend, make sure that you have Node.js installed, it is needed for the npm (Node Package Manager). Then, proceed by creating the React app:

```bash
cd ../frontend
npx create-react-app .
npm install axios @mui/material @emotion/react @emotion/styled
```

