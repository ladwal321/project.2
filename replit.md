# EliteStore E-commerce Application

## Overview

EliteStore is a full-stack e-commerce application built with a modern tech stack featuring React frontend, Express.js backend, PostgreSQL database with Drizzle ORM, and Stripe payment integration. The application provides a complete shopping experience with user authentication, product catalog, shopping cart, order management, and admin dashboard.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state and custom hooks for local state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Replit OpenID Connect (OIDC) integration
- **Session Management**: Express sessions with PostgreSQL store
- **Payment Processing**: Stripe integration for secure payments

### Project Structure
- `/client` - React frontend application
- `/server` - Express.js backend API
- `/shared` - Shared types and schemas between frontend and backend

## Key Components

### Authentication & Authorization
- **Strategy**: OpenID Connect (OIDC) via Replit authentication
- **Session Storage**: PostgreSQL-backed sessions with connect-pg-simple
- **Role-based Access**: Admin and customer roles with protected routes
- **Security**: HTTP-only cookies with secure flags for production

### Database Schema
The application uses a well-structured PostgreSQL schema with the following main entities:
- **Users**: User profiles with authentication data and roles
- **Categories**: Product categorization system
- **Products**: Complete product catalog with pricing, inventory, and metadata
- **Orders**: Order management with items and status tracking
- **Cart Items**: Shopping cart persistence
- **Sessions**: Authentication session storage

### API Architecture
RESTful API endpoints organized by resource:
- `/api/auth/*` - Authentication and user management
- `/api/categories/*` - Category CRUD operations
- `/api/products/*` - Product catalog and management
- `/api/cart/*` - Shopping cart operations
- `/api/orders/*` - Order processing and management
- `/api/payment/*` - Stripe payment processing

### Payment Integration
- **Provider**: Stripe for secure payment processing
- **Flow**: Client-side payment intent creation with server-side confirmation
- **Security**: Server-side webhook handling for payment events
- **UI**: Stripe Elements for secure card input

## Data Flow

### User Authentication Flow
1. User clicks login → redirected to Replit OIDC provider
2. Successful authentication → user data stored/updated in database
3. Session created and stored in PostgreSQL
4. User redirected back to application with authenticated session

### Shopping Flow
1. Browse products → API fetches from products table with optional filtering
2. Add to cart → Creates/updates cart_items records
3. Checkout → Creates pending order and Stripe payment intent
4. Payment → Stripe processes payment, webhook confirms order
5. Order completion → Order status updated, cart cleared

### Admin Management Flow
1. Admin authentication → Role-based access control
2. Product management → CRUD operations on products and categories
3. Order monitoring → View and manage customer orders
4. Analytics → Dashboard with key business metrics

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **Authentication**: Replit OIDC service
- **Payments**: Stripe API and webhooks
- **File Storage**: Using external image URLs (Unsplash for demo)

### Development Tools
- **Type Safety**: TypeScript across the entire stack
- **Database Migrations**: Drizzle Kit for schema management
- **Code Quality**: ESLint configuration and TypeScript strict mode
- **Build Process**: Vite for frontend, esbuild for backend production builds

### UI Libraries
- **Component Library**: shadcn/ui built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React icon library
- **Forms**: React Hook Form with Zod schema validation

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: TSX for TypeScript execution with file watching
- **Database**: Neon serverless PostgreSQL
- **Environment**: Replit-optimized with cartographer integration

### Production Build
- **Frontend**: Vite production build with asset optimization
- **Backend**: esbuild bundling for Node.js deployment
- **Static Assets**: Served from dist/public directory
- **Database**: Production Neon PostgreSQL instance
- **Sessions**: Persistent PostgreSQL-backed sessions

### Environment Configuration
- **Database**: DATABASE_URL for Neon PostgreSQL connection
- **Authentication**: Replit OIDC configuration
- **Payments**: Stripe API keys (public and secret)
- **Security**: SESSION_SECRET for session encryption

The application is designed to be deployed on Replit with seamless integration of their authentication system and development tools, while maintaining the flexibility to be deployed on other platforms with minimal configuration changes.