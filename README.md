# Laravel Blog API

A RESTful API built with Laravel for managing blog posts and categories.

## Features

- RESTful API endpoints for Posts and Categories
- Authentication using Laravel Sanctum
- Email verification
- Query Builder integration for filtering and sorting
- Database seeding with fake data
- SQLite database support
- CORS configuration for frontend integration

## Requirements

- PHP 8.2+
- Composer
- SQLite (default) or other supported database

## Installation

1. Clone the repository:
```bash
https://github.com/rez1Pro/blogging-app.git
```

2. Install dependencies:
```bash
composer install
```

3. Set up environment:
```bash
cp .env.example .env
php artisan key:generate
```

4. Create SQLite database:
```bash
touch database/database.sqlite
```

5. Run migrations and seed the database:
```bash
php artisan migrate --seed
```

## API Endpoints

### Authentication
- POST `/login` - Login user
- POST `/register` - Register new user
- POST `/logout` - Logout user
- GET `/user` - Get authenticated user

### Posts
- GET `/api/posts` - List all posts (with filtering and pagination)
- POST `/api/posts` - Create new post
- GET `/api/posts/{post}` - Get single post
- PUT `/api/posts/{post}` - Update post
- DELETE `/api/posts/{post}` - Delete post

### Categories
- GET `/api/categories` - List all categories
- POST `/api/categories` - Create new category
- GET `/api/categories/{category}` - Get single category

## Query Parameters

### Filtering
```
GET /api/posts?filter[title]=example
GET /api/posts?filter[content]=search
GET /api/posts?filter[category_id]=1
```

### Sorting
```
GET /api/posts?sort=title
GET /api/posts?sort=-title (descending)
```

### Pagination
```
GET /api/posts?page=1&per_page=10
```

## Development

Run the development server:
```bash
php artisan serve
```

Run development environment with queue worker and logs:
```bash
composer run dev
```

## Testing

Run tests using Pest:
```bash
php artisan test
```

## License

This project is open-sourced software licensed under the MIT license.
