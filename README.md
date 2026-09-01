# Sai Ram - Assessment Platform

A modern, interactive online assessment and evaluation platform built with React and Vite. Users can log in, take timed assessments with various question types, and view their results.

## 🎯 Features

- **User Authentication** - Secure JWT-based login system
- **Protected Routes** - Only authenticated users can access assessments
- **Timed Assessments** - Real-time countdown timer for each assessment
- **Multiple Question Types**:
  - Button/Text-based options
  - Image-based options (MCQ with images)
  - Question palette for quick navigation
- **Assessment Configuration** - Customize assessment settings before starting
- **Results Dashboard** - View detailed assessment results and performance
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Error Handling** - Comprehensive error pages and validation

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Routing**: React Router DOM 6.16.0
- **Styling**: CSS (Modular component-based)
- **Code Quality**: ESLint with React plugin support
- **Package Manager**: npm

## 📁 Project Structure

```
Sai Ram/
├── public/                          # Static assets (SVGs)
│   ├── assessment.svg
│   ├── failure.svg
│   ├── logo.svg
│   ├── notfound.svg
│   ├── submit.svg
│   └── timeup.svg
├── src/
│   ├── components/                  # React components
│   │   ├── Assessment/              # Main assessment component
│   │   ├── AssessmentConfiguration/ # Assessment settings/configuration
│   │   ├── ButtonOptionItem/        # Button-based question options
│   │   ├── Header/                  # Header/Navigation component
│   │   ├── Home/                    # Dashboard/Home page
│   │   ├── ImageOptionItem/         # Image-based question options
│   │   ├── Login/                   # Login page
│   │   ├── NotFound/                # 404 page
│   │   ├── ProtectedRoute/          # Route protection wrapper
│   │   ├── Question/                # Question display component
│   │   ├── QuestionNumberItem/      # Question number selector
│   │   ├── QuestionPalette/         # Question overview palette
│   │   ├── Results/                 # Results display page
│   │   ├── Select/                  # Dropdown/select component
│   │   └── Timer/                   # Countdown timer component
│   ├── context/
│   │   └── EvaluationContext.jsx    # Global evaluation state management
│   ├── App.jsx                      # Main App component with routing
│   ├── App.css                      # Main styles
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── vite.config.js                   # Vite configuration
└── .eslintrc.cjs                    # ESLint rules
```

## 📋 Available Routes

| Route | Component | Protected | Description |
|-------|-----------|-----------|-------------|
| `/login` | Login | No | User login page |
| `/` | Home | Yes | Assessment dashboard/home page |
| `/assessment` | Assessment | Yes | Active assessment page |
| `/results` | Results | Yes | Assessment results and performance |
| `*` | NotFound | No | 404 error page |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. **Clone the repository** (if using Git):
   ```bash
   git clone <repository-url>
   cd "Sai Ram"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Navigate to `http://localhost:3000`
   - You'll be redirected to `/login` if not authenticated
   - Use your credentials to log in

## 📝 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR) at `http://localhost:3000`

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality and report any issues

### Preview
```bash
npm run preview
```
Previews the production build locally before deployment

## 🔐 Authentication

The platform uses JWT (JSON Web Token) authentication:

- **Login**: Submit credentials to `/api/login` endpoint
- **Token Storage**: JWT token stored in `localStorage` as `jwt_token`
- **Protected Routes**: Automatically redirects to login if token is missing
- **Logout**: Clears token from localStorage and redirects to login

## 🎨 Component Overview

### Core Components

- **Login**: Handles user authentication with error messages
- **Home**: Dashboard displaying available assessments
- **Assessment**: Main assessment interface with questions
- **Question**: Individual question display with options
- **QuestionPalette**: Navigation panel showing all questions
- **Timer**: Real-time countdown display
- **Results**: Post-assessment performance analysis
- **Header**: Navigation and user info display
- **ProtectedRoute**: Route wrapper ensuring user authentication

### UI Components

- **ButtonOptionItem**: Answer option with button/text
- **ImageOptionItem**: Answer option with image display
- **QuestionNumberItem**: Navigation link in question palette
- **Select**: Custom dropdown/select component
- **AssessmentConfiguration**: Pre-assessment configuration panel

## 💾 State Management

Global state is managed through React Context API:

- **EvaluationContext**: Manages assessment state, answers, timing, and user progress
- **Local State**: Component-level state for UI interactions
- **localStorage**: Persists JWT token for session management

## 🔧 Configuration

### Vite Configuration
Configured in `vite.config.js` with React plugin support for JSX transformation.

### ESLint Configuration
Enforced rules for React and React Hooks to ensure code quality and best practices.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚨 Error Handling

- **404 Pages**: NotFound component for invalid routes
- **Authentication Errors**: Login error messages from API
- **Network Errors**: Try-catch blocks with user feedback
- **Validation**: Input validation on login form

## 🔄 Deployment

To deploy the application:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to your hosting service:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
   - Any static hosting service

3. **Configure API endpoint**: Update API calls to point to your backend server

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## 📝 Environment Variables

Create a `.env` file in the root directory (if needed):

```env
VITE_API_URL=http://your-api-url
VITE_APP_NAME=Sai Ram Assessment
```

## 🐛 Troubleshooting

### Login Page Not Showing
- Clear browser cache and localStorage
- Ensure you're visiting `/login` or a protected route without a valid token

### Assessment Not Loading
- Check network tab for API errors
- Verify JWT token is valid and not expired
- Clear localStorage and re-login

### Styling Issues
- Clear Vite cache: Delete `.vite/` folder
- Restart dev server: `npm run dev`

## 📞 Support

For issues or questions, please create an issue in the repository or contact the development team.

## 📄 License

This project is part of the Sai Ram Assessment Platform. All rights reserved.

---

**Version**: 0.0.1  
**Last Updated**: 2026-09-01
