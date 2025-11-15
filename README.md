# Hard Rock - Marketing Agency Website

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-12.0-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel 12.0">
  <img src="https://img.shields.io/badge/PHP-8.2+-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP 8.2+">
  <img src="https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Alpine.js-3.15-8BC0D0?style=for-the-badge&logo=alpinedotjs&logoColor=white" alt="Alpine.js">
</p>

## About Hard Rock

Hard Rock is a modern, dynamic marketing agency website built to showcase comprehensive marketing strategies for businesses. Our platform is designed to help businesses elevate their brand presence, reach their target audience, and achieve measurable growth through innovative marketing solutions.

## Features

- **Modern UI/UX**: Built with Tailwind CSS 4 for a sleek, responsive design
- **Smooth Animations**: Powered by GSAP, Lenis, and Locomotive Scroll for engaging user experiences
- **Interactive Elements**: Alpine.js for lightweight, reactive components
- **Fast Development**: Vite for lightning-fast builds and hot module replacement
- **Robust Backend**: Laravel 12 with PHP 8.2+ for powerful server-side functionality
- **Scalable Architecture**: MVC pattern with Laravel's elegant syntax

## Technology Stack

### Backend
- **Framework**: Laravel 12.0
- **PHP Version**: 8.2+
- **Database**: SQLite (configurable to MySQL, PostgreSQL, etc.)

### Frontend
- **CSS Framework**: Tailwind CSS 4.1.17
- **JavaScript Framework**: Alpine.js 3.15.1
- **Build Tool**: Vite 7.0.7
- **Animations**:
  - GSAP (GreenSock Animation Platform)
  - Lenis (Smooth scrolling)
  - Locomotive Scroll (Scroll-based animations)

### Development Tools
- **Laravel Pint**: Code style fixer
- **Laravel Pail**: Log viewer
- **PHPUnit**: Testing framework
- **Concurrently**: Run multiple dev servers simultaneously

## Prerequisites

Before you begin, ensure you have the following installed:

- PHP 8.2 or higher
- Composer
- Node.js (v18 or higher) & npm
- SQLite (or your preferred database)

## Installation

### Quick Setup

Run the automated setup script:

```bash
composer setup
```

This will:
- Install PHP dependencies
- Create `.env` file from `.env.example`
- Generate application key
- Run database migrations
- Install npm dependencies
- Build frontend assets

### Manual Setup

If you prefer to set up manually:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hard-rock.git
   cd hard-rock
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Database setup**
   ```bash
   php artisan migrate
   ```

6. **Build frontend assets**
   ```bash
   npm run build
   ```

## Running the Application

### Development Mode

Run all development servers concurrently (recommended):

```bash
composer dev
```

This starts:
- Laravel development server (http://localhost:8000)
- Queue worker
- Log viewer (Pail)
- Vite dev server with HMR

### Individual Services

Run services separately if needed:

```bash
# Start Laravel server
php artisan serve

# Start Vite dev server
npm run dev

# Watch logs
php artisan pail

# Run queue worker
php artisan queue:listen
```

## Building for Production

Build optimized assets for production:

```bash
npm run build
```

## Testing

Run the test suite:

```bash
composer test
```

Or directly with PHPUnit:

```bash
php artisan test
```

## Project Structure

```
hard-rock/
├── app/                    # Application core
│   ├── Http/              # Controllers, Middleware, Requests
│   ├── Models/            # Eloquent models
│   └── Providers/         # Service providers
├── bootstrap/             # Framework bootstrap
├── config/                # Configuration files
├── database/              # Migrations, seeders, factories
├── public/                # Public assets
├── resources/             # Views, raw assets
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   └── views/            # Blade templates
├── routes/                # Application routes
│   ├── web.php           # Web routes
│   └── console.php       # Console routes
├── storage/               # Logs, cache, uploads
├── tests/                 # Test files
└── vendor/                # Composer dependencies
```

## Environment Configuration

Key environment variables in `.env`:

```env
APP_NAME="Hard Rock"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite
# DB_DATABASE=/absolute/path/to/database.sqlite
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Code Style

This project uses Laravel Pint for code styling. Run the formatter:

```bash
./vendor/bin/pint
```

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Support

For support, email support@hardrock.agency or open an issue in the GitHub repository.

## Roadmap

- [ ] Client portfolio showcase
- [ ] Case studies section
- [ ] Blog/Resources section
- [ ] Contact form with email integration
- [ ] Service packages display
- [ ] Client testimonials
- [ ] Analytics dashboard
- [ ] CMS for content management

## Acknowledgments

- Built with [Laravel](https://laravel.com)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [GSAP](https://greensock.com/gsap/)
- Powered by the amazing open-source community
