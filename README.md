# Weather Application

This project is a Weather application designed to fetch and display real-time weather information using a weather API. The main focus of the project is on efficiently handling JSON responses and securely managing sensitive data such as API keys.

## Key Features:

-   API Integration: The application connects to a weather API to retrieve real-time data, including the current temperature and sunset time for any specified location.
-   JSON Response Handling: It processes the JSON response received from the API, extracting relevant information to be displayed in a user-friendly format.
-   Environment Variables (.env): To securely manage sensitive data like API keys, the application uses a .env file. This ensures that the API keys and other sensitive configuration details are not exposed in the source code.
-   Dynamic Location Search: Users can input any location to get the current weather information, making the application versatile and user-centric.
-   Secure API Key Usage: By utilizing environment variables, the project ensures that API keys are kept secure and are not hardcoded into the application, which is crucial for maintaining security, especially in public repositories.
