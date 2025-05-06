from django.shortcuts import render
import requests
from requests.exceptions import RequestException
from .forms import WebsiteForm


def check_status(request):
    """
    View for checking website status

    This view:
    1. Handles form submission to check if a website is up
    2. Makes an HTTP request to the provided URL
    3. Returns the result to the template
    """
    url = None
    status = None

    # Process form submission
    if request.method == "POST":
        form = WebsiteForm(request.POST)
        if form.is_valid():
            url = form.cleaned_data["url"]
            try:
                # Try to connect to the website with a timeout of 5 seconds
                response = requests.get(url, timeout=5, allow_redirects=True)
                # If we get a successful status code (200-299), the site is up
                status = "UP" if response.status_code < 300 else "DOWN"
            except RequestException:
                # Any request exception (timeout, connection error, etc) means the site is down
                status = "DOWN"
    else:
        # For a GET request, just create an empty form
        form = WebsiteForm()

    return render(
        request,
        "status/check.html",
        {
            "form": form,
            "url": url,
            "status": status,
        },
    )
