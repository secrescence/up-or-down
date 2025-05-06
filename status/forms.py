from django import forms


class WebsiteForm(forms.Form):
    """
    Form for collecting and validating website URLs

    This form:
    1. Provides a simple URL input field
    2. Validates the input
    3. Automatically adds http/https protocol if missing
    """

    # URL input field - required to prevent empty submissions
    url = forms.CharField(label="Enter website URL", required=True)

    def clean_url(self):
        """
        Custom cleaning method for the URL field

        This method ensures the URL has the necessary protocol prefix
        by adding https:// if neither http:// nor https:// is present.

        Returns:
            str: The cleaned URL with protocol prefix
        """
        url = self.cleaned_data["url"]

        # Add http:// or https:// if it's missing
        if not url.startswith(("http://", "https://")):
            url = "https://" + url

        return url
