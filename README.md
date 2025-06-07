# Momentum - Interactive Campaign Dashboard

**Live Demo URL:** [https://momentum-dashboard-sahiti10.vercel.app](https://momentum-dashboard-sahiti10.vercel.app)

![Momentum Dashboard Live Demo](https://i.imgur.com/g8o4jVw.gif)  
*(Note: The GIF above shows the live data simulation in action. The deployed project is fully interactive.)*

---

## 📖 Description

Momentum is a professional-grade, real-time analytics dashboard built to track and analyze marketing campaign performance. It features a dynamic, polished UI that simulates a live data feed, providing stakeholders with up-to-the-second insights.

This project was built from the ground up to demonstrate a strong command of modern front-end development practices, including React Hooks, component-based architecture, asynchronous data handling, and professional deployment workflows (CI/CD).

---

## ✨ Key Features

* **Real-Time Data Simulation:** The dashboard updates every few seconds to mimic a live data stream, showcasing dynamic state management.
* **Interactive Charts:** Utilizes Chart.js for clean, responsive, and animated data visualizations.
* **Component-Based Architecture:** Built with reusable and modular components for scalability and maintainability (e.g., `KpiCard`, `LineChart`).
* **Responsive Design:** Ensures a seamless and optimal user experience across desktops, tablets, and mobile devices.
* **Professional CI/CD Pipeline:** Integrated with Vercel for continuous deployment, automatically deploying new versions on every `git push` to the main branch.

---

## 💻 Technologies Used

* **Front-End:** React, JavaScript (ES6+), HTML5, CSS3
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Data & API:** Asynchronous Fetch, REST API Simulation
* **Charting:** Chart.js with `react-chartjs-2`
* **Deployment & DevOps:** Vercel, Git, GitHub, Continuous Deployment (CI/CD)
* **Development Tools:** npm, Visual Studio Code

---

## 👤 My Role & Contributions

As the sole developer for this portfolio project, I was responsible for the complete lifecycle of the application:

* **Architecture:** Designed the component structure and data flow from the ground up.
* **UI/UX Development:** Translated a product concept into a fully functional and visually polished user interface using React and modern CSS.
* **State & Data Logic:** Implemented the "real-time" data simulation using `setInterval` and asynchronous functions to manage and update the application state dynamically.
* **Deployment:** Set up the entire continuous deployment pipeline by linking the GitHub repository to Vercel, enabling automated builds and deployments.

---

## 🚀 Live Deployment & CI/CD

This project is hosted on **Vercel** and configured for Continuous Deployment.

1.  A `git push` to the `main` branch on GitHub automatically triggers a new build process on Vercel.
2.  Vercel installs dependencies, runs a production build of the React app, and deploys it to its global CDN.
3.  The live URL is instantly updated with the new version, demonstrating a modern, automated development workflow.

---

## 🏃‍♂️ Getting Started

To clone this project and run it locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/sahiti10/momentum-dashboard.git](https://github.com/sahiti10/momentum-dashboard.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd momentum-dashboard
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.