# PocketLink
<img width="1888" height="920" alt="image" src="https://github.com/user-attachments/assets/76f37312-81be-4aea-b0cb-178ec65466a1" />

PocketLink is a modern web app to save, organize, and share your favorite learning resources in custom categories.

## Features

- Save links to videos, articles, social posts, and more
- Organize resources by custom categories
- Share collections with others via unique links
- Responsive and user-friendly interface

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/pocketlinkfront.git
cd pocketlinkfront
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file in the root directory and add your API URL or other environment variables as needed:

```
VITE_API_URL=https://your-backend-api.com
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### 5. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### 6. Deploy to Vercel

- Push your code to GitHub.
- Connect your repository to [Vercel](https://vercel.com/).
- Ensure your `vercel.json` is configured with `"distDir": "dist"`.

## Project Structure

```
src/
  components/    # React components
  App.jsx        # Main app file
  main.jsx       # Entry point
  config.jsx     # API config
public/
vercel.json      # Vercel deployment config
```

