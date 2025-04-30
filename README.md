# Camera Website

A full-stack web application for managing and displaying camera-related content. This project consists of a React frontend and a Node.js backend, both written in TypeScript.

- Modern React frontend with TypeScript
- Node.js backend with TypeScript
- Docker support for both client and server
- Storybook for component documentation
- Comprehensive testing setup
- ESLint and Prettier for code quality
- StyleLint for CSS/SCSS styling
- Continuous Integration workflow

## 🛠️ Tech Stack

### Frontend

- React with TypeScript
- Vite for build tooling
- Storybook for component documentation
- Vitest for testing
- StyleLint for CSS/SCSS linting

### Backend

- Node.js with TypeScript
- RESTful API endpoints
- Environment configuration support

## 📦 Prerequisites

- Node.js (Latest LTS version recommended)
- Yarn package manager
- Docker and Docker Compose (optional, for containerized development)

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/fadihanna123/CameraWebsite.git
cd CameraWebsite
```

2. Install dependencies:

```bash
yarn setup
```

3. Set up environment variables:

   - Copy `.docker.env.example` to `.docker.env` in both client and server directories
   - Update the environment variables as needed

4. Start the development servers:

```bash
yarn dev
```

## 🛠️ Available Scripts

- `yarn dev` - Start both frontend and backend in development mode
- `yarn setup` - Install dependencies for both client and server
- `yarn format` - Format code using Prettier
- `yarn lint` - Run ESLint on both client and server
- `yarn seed` - Run database seeding (server)
- `yarn ci` - Run CI checks (build, test, and lint client)
- `yarn clear` - Clear node_modules in root, client, and server

## 🐳 Docker Support

The project includes Docker support for both client and server. To run the application using Docker:

```bash
docker-compose up
```

## 🧪 Testing

The project includes a comprehensive testing setup:

- Frontend tests using Vitest
- Component testing with Storybook
- Run tests with: `yarn --cwd ./client test`

## 📝 Code Quality

This project maintains high code quality standards using:

- ESLint for JavaScript/TypeScript linting
- Prettier for code formatting
- StyleLint for CSS/SCSS
- EditorConfig for consistent coding style
- Continuous Integration checks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✍️ Author

Fadi Hanna - [GitHub Profile](https://github.com/fadihanna123)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📦 Version

Current version: 1.0.4
