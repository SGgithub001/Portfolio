![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
# 👨‍💻 Sushil Gupta Personal Portfolio

A dynamic, responsive personal portfolio website built with React, Tailwind CSS, and 3D animations to showcase my skills and projects.

**View the live site:** [Portfolio Live](https://sushil-gupta-portfolio.vercel.app) 

---

## ✨ Features

- Fully Responsive Design: Adapts to all screen sizes, from mobile to desktop.
- Interactive 3D Model: Integrates a 3D robot model from Spline (`@splinetool/react-spline`).
- Smooth Animations: Uses Framer Motion for UI animations and AOS (Animate On Scroll) for scroll-based effects.
- Active Navbar: Automatically highlights the active section in the navigation bar based on scroll position.
- Functional Contact Form: Sends emails directly from the site using emailjs.
- User Feedback: Provides toast notifications for form submission status using react-toastify.
- Themed Styling: Custom scrollbar and text-selection colors to match the site's theme.

---

## 🚀 Tech Stack

| Purpose         | Library / Tool                     |
| --------------- | ---------------------------------- |
| Framework       | React.js                           |
| Build Tool      | Vite                               |
| Styling         | Tailwind CSS                       |
| Animations      | Framer Motion & AOS (Animate On Scroll) |
| 3D Modeling     | @splinetool/react-spline           |
| Email Service   | emailjs                            |
| Notifications   | react-toastify                     |
| Icons           | react-icons                        |

---

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.

### Installation & Setup

Clone the repository:
```bash
git clone https://github.com/SGgithub001/Portfolio.git
```

Install dependencies:
```bash
npm install
```

Set up environment variables:
- Create a file named `.env` in the root of your project.
- See the [Environment Variables](#-environment-variables) section below for the required keys.

Run the development server:
```bash
npm run dev
```


Open your browser to [http://localhost:5173](http://localhost:5173) (or the port specified by Vite).

---

## 🔑 Environment Variables
To run this project, you will need to create a `.env` file in the root of the project and add the following variables.

This project uses emailjs to power the contact form.
```bash
# Get these values from your EmailJS account dashboard
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_ID=your_emailjs_public_key
VITE_SPLINE_URL=your_spline_modal_url
```


You can get these values by creating a free account on [EmailJS](https://www.emailjs.com).



