# Meet App

Welcome to the Meet App! This application provides users with the ability to manage and visualize events easily.

## Features

### Feature 1: Filter Events By City

Given: The user has launched the event application and is on the events listing page. When: The user selects a specific city from the available city options in the filter menu. Then: The events listing page refreshes, displaying only the events that are located in the selected city.

### Feature 2: Toggle Event Details

Given the app is open
When the User toggles the display of event details
Then the User should be able to decide whether to see the event details or not

### Feature 3: Specify Number of Events

Given the app is open
When the User specifies the number of events to show
Then the app should display the selected number of events for the User

### Feature 4: Use App Offline

Given the app is installed on the User's device
And the device is in offline mode
When the User opens the app
Then the app should provide access to the latest information even when offline

### Feature 5: Add App Shortcut to Home Screen

Given the app is installed on the User's device
When the User adds a shortcut to the home screen
Then the User should be able to use the app more quickly from the home screen

### Feature 6: Display Charts for Event Details

Given the app is open
When the User navigates to view event details
Then the app should display charts illustrating patterns, trends, and key insights related to events
And this should enhance the User's understanding and decision-making capabilities

## Serverless Functions

The Meet app leverages serverless functions to enhance its performance, scalability, and cost-effectiveness. These functions are responsible for handling specific tasks without the need for maintaining a dedicated backend server. Here's how serverless functions are utilized in the Meet app:

### 1. Event Data Retrieval

To ensure real-time and up-to-date event information, serverless functions are employed to fetch event data from a scalable and always-available source. This allows the app to provide users with the latest information without the need for backend maintenance.

### 2. Filtering Events

When a user selects a specific city to filter events, a serverless function is triggered to dynamically fetch and display only the events relevant to the selected city. This ensures a seamless and responsive user experience.

### 3. Offline Support

Serverless functions enable the Meet app to function offline by caching essential data. In offline mode, users can still access the app, view previously retrieved event information, and make informed decisions even without an active internet connection.

### 4. Scalability and Cost Efficiency

The serverless architecture employed in the Meet app ensures easy scalability, allowing the application to handle varying loads effortlessly. Moreover, the pay-as-you-go model minimizes costs, as serverless functions eliminate the need for continuous backend server maintenance.

### 5. Instant Loading and Responsive Design

By utilizing serverless functions, the app achieves instant loading times, ensuring users can access event information quickly. Additionally, the responsive design is enhanced, providing a seamless experience across various devices and screen sizes.

### 6. Test-Driven Development (TDD) Approach

The Meet app adopts a Test-Driven Development (TDD) approach, where tests are written before implementing functionalities. This ensures that each feature meets its requirements and maintains high code quality. Serverless functions are tested rigorously to guarantee reliable and consistent performance.

### 7. Data Visualization

Serverless functions play a crucial role in retrieving and processing data for visualization. The charts illustrating event location distribution (scatterplot) and event genre popularity (pie chart) are powered by serverless functions, enhancing the visual appeal of the app and aiding users in drawing meaningful conclusions from the data.

#### By combining serverless architecture with Progressive Web App (PWA) features, the Meet app not only delivers a robust and scalable solution but also provides users with an engaging and responsive event management experience.
