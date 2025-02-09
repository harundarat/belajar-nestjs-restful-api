# NestJS RESTful API Project 🚀

<div align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="140" alt="Nest Logo" />
  
  ![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![NestJS](https://img.shields.io/badge/NestJS-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
  ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
</div>

## 📖 Description

A robust RESTful API built with NestJS framework featuring user authentication, contact management, and address handling. This project implements modern development practices and follows REST API principles.

## ✨ Features

- 👤 **User Management**

  - Registration & Authentication
  - Token-based Authorization
  - User Profile Management

- 📱 **Contact Management**

  - CRUD Operations
  - Search & Filtering
  - Pagination Support

- 📍 **Address Management**
  - Multiple Addresses per Contact
  - Address Validation
  - Full CRUD Operations

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- PNPM Package Manager
- MySQL Database

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env
# Update .env with your database credentials

# Run database migrations
pnpm prisma migrate dev
```

### Running the Application

```bash
# Development mode
pnpm run start:dev

# Production mode
pnpm run start:prod
```

### Running Tests

```bash
pnpm run test
```

## 📚 API Documentation

### User Endpoints

- `POST /api/users` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/current` - Get current user
- `PATCH /api/users/current` - Update user
- `DELETE /api/users/current` - Logout user

### Contact Endpoints

- `POST /api/contacts` - Create contact
- `GET /api/contacts/:contactId` - Get contact
- `PUT /api/contacts/:contactId` - Update contact
- `DELETE /api/contacts/:contactId` - Remove contact
- `GET /api/contacts` - Search contacts

### Address Endpoints

- `POST /api/contacts/:contactId/addresses` - Create new address
- `GET /api/contacts/:contactId/addresses/:addressId` - Get address details
- `PUT /api/contacts/:contactId/addresses/:addressId` - Update address
- `DELETE /api/contacts/:contactId/addresses/:addressId` - Delete address
- `GET /api/contacts/:contactId/addresses` - List all addresses for a contact

Each address endpoint requires authentication and validates:

- Contact ownership
- Address existence
- Required fields (street, city, country, postal_code)

## 🛠 Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: MySQL
- **Testing**: Jest
- **Documentation**: Swagger/OpenAPI

## 📈 Project Structure

```
src/
├── address/          # Address module
├── contact/          # Contact module
├── user/            # User module
├── common/          # Shared resources
├── model/           # Data models
└── app.module.ts    # Main application module
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Harun Al Rasyid - Initial work - [harundarat](https://github.com/harundarat)

## 🙏 Acknowledgments

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- All contributors who helped with the project
