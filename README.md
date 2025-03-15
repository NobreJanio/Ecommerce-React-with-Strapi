# E-commerce Website with React and Strapi

A modern e-commerce platform built with React for the frontend and Strapi as the headless CMS backend.

## Project Overview

This project is a full-featured e-commerce website that demonstrates the integration of a React-based frontend with a Strapi backend. It includes features such as product browsing, category filtering, shopping cart functionality, and user authentication.

## Project Structure

```
├── frontend/     # React application
└── backend/      # Strapi CMS
```

## Technology Stack

### Frontend
- React
- Material-UI
- Redux for state management
- Vite as build tool

### Backend
- Strapi (Headless CMS)
- Node.js
- SQLite (default database)

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd Ecommerce-React-with-Strapi
```

2. Set up the backend:
```bash
cd backend
npm install
npm run develop
```

3. Set up the frontend:
```bash
cd frontend
npm install
npm run dev
```

4. Access the applications:
- Frontend: http://localhost:5173
- Strapi Admin: http://localhost:1337/admin

## Documentation

For detailed documentation about each part of the application:

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.