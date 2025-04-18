# Multi Steps Job Application Form

This is a Next.js application built with TypeScript, Redux Toolkit, TipTap editor, and OpenAI integration. The project uses modern development tools and practices including Tailwind CSS for styling and React Hook Form for form management.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- npm or yarn package manager
- Git

## Getting Started

1. Clone the repository:

```bash
git clone [<repository-url>](https://github.com/nabedkhan/multistep-job-application-form)
cd multistep-job-application-form
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your OpenAI API key:

```env
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

The application will start in development mode with Turbopack. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Getting an OpenAI API Key

To use the AI prompting features, you'll need an OpenAI API key. Here's how to get one:

1. Go to [OpenAI's website](https://platform.openai.com/signup)
2. Create an account or sign in
3. Navigate to the [API keys section](https://platform.openai.com/api-keys)
4. Click "Create new secret key"
5. Copy the generated key (make sure to save it as it won't be shown again)
6. Add the key to your `.env` file as shown above

## Build Project and Run

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
npm run start
```

The application will run on port 3000 by default.
