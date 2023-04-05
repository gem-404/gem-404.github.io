# CV WEBSITE

This is a simple website that displays my CV, built using Python Flask and an HTML template. The website is hosted on Railway, a platform for deploying web applications.

## Requirements
To run the website locally, you'll need to have the following installed:

Python 3.6 or higher
Flask (pip install Flask)

NOTE: You'll need to have your resume in html form, and in the templates folder,
under the file name, index.html

    - To convert your resume.pdf to a html file, head over to [this conversion link](https://convertio.co) and get it done.

## Running the website
Clone this repository to your local machine

Navigate to the root directory of the project

Run the following command to start the server:

```bash
flask run
```

Open your web browser and go to http://localhost:5000 to view the website

## HTML template
The HTML template used for this website is called Resume, and it was created by Start Bootstrap. The template is free to use and can be customized to fit your needs.

## Deploying to Railway
To deploy the website to Railway, follow these steps:

    - Sign up for a free account on Railway
    - Connect your Github account to Railway
    - Create a new project on Railway and select the Github repository where you've stored your code
    - Configure your project settings to use Python as the language and flask run as the command to start the server
    - Deploy your project

Once your project is deployed, you can view it by going to the URL provided by Railway.

## License
This project is licensed under the GNU License.
