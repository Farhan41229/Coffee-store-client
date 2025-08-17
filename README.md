# ☕ Coffee Store Client

A modern, responsive React-based web application for managing a coffee store's product catalog. This application provides an intuitive interface for coffee shop owners and staff to view, add, and manage coffee products with a beautiful, coffee-themed design.

## 🚀 Live Demo

*No live demo available - this is a local development project*

## ✨ Features

- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **☕ Coffee Management**: Complete CRUD operations for coffee products
- **🎨 Modern UI**: Beautiful coffee-themed interface with custom fonts
- **🔍 Product Display**: Grid layout showcasing coffee details
- **➕ Add Products**: Easy-to-use form for adding new coffee items
- **🗑️ Delete Products**: Secure deletion with confirmation dialogs
- **📝 Product Details**: Comprehensive coffee information tracking
- **⚡ Fast Performance**: Built with Vite for optimal development experience

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 4.1.8** - Utility-first CSS framework
- **DaisyUI 5.0.43** - Component library for Tailwind CSS
- **Custom Fonts** - Rancho (cursive) and Raleway (sans-serif)

### Routing & Navigation
- **React Router 7.6.2** - Client-side routing

### UI Components & Icons
- **React Icons 5.5.0** - Popular icon library
- **SweetAlert2 11.22.0** - Beautiful, responsive alerts and confirmations

### Development Tools
- **ESLint 9.25.0** - Code linting and quality
- **TypeScript Support** - Type definitions for React

## 📦 Dependencies

### Production Dependencies
```json
{
  "@tailwindcss/vite": "^4.1.8",
  "daisyui": "^5.0.43",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.6.2",
  "sweetalert2": "^11.22.0",
  "tailwindcss": "^4.1.8"
}
```

### Development Dependencies
```json
{
  "@eslint/js": "^9.25.0",
  "@types/react": "^19.1.2",
  "@types/react-dom": "^19.1.2",
  "@vitejs/plugin-react": "^4.4.1",
  "eslint": "^9.25.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.19",
  "globals": "^16.0.0",
  "vite": "^6.3.5"
}
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Backend API** running on `http://localhost:3000`

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd coffee-store-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint

## 📱 Project Structure

```
src/
├── components/          # React components
│   ├── AddCoffee.jsx   # Add new coffee form
│   ├── CoffeeCard.jsx  # Individual coffee display
│   ├── Header.jsx      # Navigation header
│   ├── Home.jsx        # Main page component
│   └── UpdateCoffee.jsx # Update coffee form
├── layouts/             # Layout components
│   └── HomeLayout.jsx  # Main layout wrapper
├── assets/              # Static assets
├── App.jsx             # Main App component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🔧 Configuration

### Backend API
The application expects a backend API running on `http://localhost:3000` with the following endpoints:
- `GET /coffees` - Retrieve all coffee products
- `POST /coffees` - Add new coffee product
- `DELETE /coffees/:id` - Delete coffee product by ID




## 🎨 Design Features

- **Coffee Theme**: Warm browns, creams, and coffee-inspired color palette
- **Custom Typography**: Rancho (cursive) for headings, Raleway for body text
- **Responsive Grid**: Adapts from 1 column on mobile to 2 columns on desktop
- **Interactive Elements**: Hover effects and smooth transitions
- **Form Design**: Fieldset-based forms with custom styling


## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Beautiful alerts with [SweetAlert2](https://sweetalert2.github.io/)

---

