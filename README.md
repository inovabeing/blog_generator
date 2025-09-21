# Prompt Generation Tool

A modern, intuitive web application for generating enhanced prompts with keyword selection. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Smart Prompt Input**: Clean text area for entering your base prompt
- **Keyword Selection**: 5 categorized dropdown menus with relevant keywords
- **Flexible Selection**: Choose up to 4 keywords total across all categories
- **Real-time Validation**: Visual feedback for selection limits
- **Professional Output**: Generated prompts displayed in a dedicated panel
- **Copy Functionality**: One-click copying of generated results
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean interface with cyan and orange accent colors

## Categories

1. **Content Type**: Blog Post, Social Media, Email, Article, Script
2. **Tone**: Professional, Casual, Friendly, Formal, Creative
3. **Industry**: Technology, Healthcare, Finance, Education, Marketing
4. **Audience**: Beginners, Professionals, Students, General Public, Experts
5. **Format**: List, Paragraph, Bullet Points, Step-by-step, Q&A

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd prompt-generator
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Enter Your Prompt**: Type your base prompt in the text area
2. **Select Keywords**: Choose up to 4 keywords from the dropdown menus
3. **Generate**: Click the "Generate Enhanced Prompt" button
4. **Copy Results**: Use the copy button to save your generated prompt

## Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main application page
├── components/
│   ├── prompt-inputs.tsx    # Input form and dropdown components
│   └── output-display.tsx   # Results display component
└── README.md
\`\`\`

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **shadcn/ui** - High-quality UI components

## Design System

- **Primary Colors**: Cyan (#06b6d4) and Orange (#f97316)
- **Typography**: Inter font family with balanced line heights
- **Layout**: 40/60 split between input panel and output display
- **Spacing**: Consistent 4px grid system

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


If you encounter any issues or have questions, please open an issue on GitHub.
