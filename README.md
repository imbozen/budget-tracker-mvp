Budget Tracker MVP

Project Description
- Budget Tracker MVP is a RESTful API that allows users to:
    Add expenses
    View all recorded expenses
    Calculate total spending

This application was developed during Sprint 1 using professional software development practices including feature branching, clean architecture, unit testing, and live deployment.

The goal of this MVP is to demonstrate core functionality while establishing a scalable technical foundation for future enhancements.

System Architecture
- This application follows the MVC (Model-View-Controller) pattern to ensure separation of concerns.
Architecture Layers
- Models
    Define the data structure (Expense object).
- Services
    Contain business logic.
    Handle validation.
    Calculate totals.
- Controllers
    Handle HTTP requests and responses.
    Call service layer functions.
- Routes
    Define API endpoints and connect them to controllers.
- Server
    Initializes Express.
    Configures middleware.
    Connects routes.
This structure improves maintainability, scalability, and testability.

Tech Stack
    Node.js
    Express
    Jest (Unit Testing)
    Git & GitHub (Version Control)
    Render (Deployment)

Architecture
    The application follows the MVC architecture pattern:
    Routes → Controllers → Services → Models

Design Patterns
    MVC Pattern
    Separates routing, business logic, and data models.
    Service Layer Pattern
    Business logic is handled in service modules to keep controllers lightweight.

Testing
    Unit and integration tests implemented using Jest and Supertest.

CI/CD
    Automated testing configured using GitHub Actions.

Deployment
    Application deployed using Render.