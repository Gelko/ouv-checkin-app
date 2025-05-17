# OUV Check-in App

An online briefing and check-in system for the Oravska Ultra Vyzva ultramarathon race. This application guides participants through important race information and collects their acknowledgment and contact details.

## Features

- Multi-step briefing process
- Required quiz questions to ensure information comprehension
- Responsive design for all devices
- Contact information collection
- Email notification system

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v17 or higher)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/ouv-checkin-app.git
cd ouv-checkin-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your email service configuration:
```
API_URL=your_api_url
EMAIL_SERVICE_KEY=your_email_service_key
```

4. Add your background images to the `public/assets/images` directory:
- welcome-bg.jpg
- route-bg.jpg
- dropbag-bg.jpg
- equipment-bg.jpg
- start-bg.jpg
- submit-bg.jpg

5. Add your logo:
- Add `logo.png` to `public/assets/images`

## Development

Run the development server:
```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Building for Production

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

1. Build the application for production
2. Deploy the contents of the `dist/ouv-checkin-app` directory to your web server
3. Configure your web server to handle the email submission endpoint at `/api/submit`

## Email Service Integration

The application is configured to send emails to contact@ouv.sk. To set up the email service:

1. Create an API endpoint at `/api/submit`
2. Configure the endpoint to accept POST requests with the following data structure:
```typescript
{
  to: string;
  subject: string;
  body: string;
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
