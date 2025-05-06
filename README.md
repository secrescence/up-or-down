# secre up – website status checker

A cyberpunk-themed web application that checks if websites are up or down. Simply enter a URL, and the system will analyze the connection status with a stylish retro terminal interface.

🌐 **Live Demo:** [https://secre.up.railway.app](https://secre.up.railway.app)

---

## 🚀 Features

- **Simple URL Checking**: Enter any website URL to check its current status  
- **Real-time Validation**: Client-side validation with visual feedback  
- **Fun Response Messages**: Receive humorous status messages with each check  
- **Cyberpunk UI**: Enjoy a retro terminal aesthetic with neon colors and animations  
- **Responsive Design**: Works on desktop and mobile devices  

---

## 🔧 Technology Stack

- **Backend**: Django 5.2  
- **Frontend**: HTML, CSS, JavaScript  
- **Styling**: Bootstrap 5.3 with custom CSS  
- **HTTP Requests**: Requests library  
- **Deployment**: Gunicorn, Whitenoise  
- **Python Version**: 3.12.3  

---

## 📋 Installation

### Prerequisites

- Python 3.12+  
- pip package manager  

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/yourusername/secre-up.git
cd secre-up

# Set up a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Create a .env file in the project root
touch .env
# Add your SECRET_KEY and any required environment variables

# Run migrations
python manage.py migrate

# Start the development server
python manage.py runserver
```

Visit `http://127.0.0.1:8000` in your browser.

---

## 🔍 How It Works

1. User enters a website URL in the input field  
2. The application validates the URL format on the client-side  
3. When submitted, Django processes the request and attempts to connect to the URL  
4. The server returns the status (**UP** or **DOWN**) based on the connection result  
5. The result is displayed with a random fun message  

---

## 🌐 Deployment

The project is configured for deployment with:

- `Procfile` for Gunicorn  
- `Whitenoise` for static files in production  
- `runtime.txt` specifying the Python version  

### Railway Deployment

This application is configured for deployment on [Railway](https://railway.app):

1. Update the `ALLOWED_HOSTS` and `CSRF_TRUSTED_ORIGINS` in `settings.py` for your domain  
2. Connect your GitHub repo to Railway  
3. Set your environment variables in the Railway dashboard  
4. Deploy your project  

---

## 🎨 UI Design

The application features a cyberpunk-inspired interface with:

- Neon green and pink color scheme  
- Retro terminal aesthetics  
- Animated elements (loading dots, scanning effects)  
- Pixel art styling for a retro gaming feel  
- Custom fonts for an authentic terminal appearance  

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### Steps to Contribute

```bash
# Fork the project
# Create your feature branch
git checkout -b feature/AmazingFeature

# Commit your changes
git commit -m "Add AmazingFeature"

# Push to the branch
git push origin feature/AmazingFeature

# Open a Pull Request
```

---

## 📜 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Edsel Pisueña (secrescence)** – [GitHub Profile](https://github.com/secrescence)

---

## 🙏 Acknowledgments

- [Django](https://www.djangoproject.com/)  
- [Bootstrap](https://getbootstrap.com/)  
- [Font Awesome](https://fontawesome.com/)  
- [Google Fonts](https://fonts.google.com/)
