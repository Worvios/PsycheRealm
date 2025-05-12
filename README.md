# PsycheRealm Blog

A modern, responsive blog platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark mode support
- 📱 Mobile-first approach
- 🔍 SEO optimized
- 🚀 Fast page loads with Next.js
- 📝 Rich content management with Sanity CMS
- 💅 Beautiful typography and UI components
- 🔒 Type-safe with TypeScript
- 🎯 Accessible and semantic HTML

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Sanity account (for CMS)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/psycherealm.git
   cd psycherealm
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
psycherealm/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── category/       # Category pages
│   │   ├── post/          # Blog post pages
│   │   └── page.tsx       # Home page
│   ├── components/         # React components
│   │   └── layout/        # Layout components
│   └── lib/               # Utility functions
├── public/                # Static assets
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Project dependencies
```

## CMS Setup

1. Create a new Sanity project at [sanity.io](https://www.sanity.io)
2. Install Sanity CLI:
   ```bash
   npm install -g @sanity/cli
   ```
3. Initialize Sanity in your project:
   ```bash
   sanity init
   ```
4. Configure your schema and content types
5. Deploy your Sanity studio:
   ```bash
   sanity deploy
   ```

## Deployment

The project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Configure environment variables
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sanity](https://www.sanity.io/)
- [Vercel](https://vercel.com/)
