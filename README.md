 # Suuq.io Front-End Application

 Welcome to the **Suuq.io Front-End Repository**! This project is a modern, performant, and type-safe web application built using **Nuxt.js** and **TypeScript**. It serves as the front-facing part of Suuq.io, an online marketplace designed to improve the economy and livelihood of the people.

 ## Features
 - **TypeScript-First Approach**: Ensures type safety and code reliability. 💻
 - **Modular Architecture**: Built with a focus on reusability and scalability. 🏗️
 - **Nuxt.js Framework**: Leveraging server-side rendering (SSR) and static site generation (SSG) for optimal performance. 🚀
 - **Easy Authentication**: Includes an authentication flow for users to log in and manage their accounts. 🔒
 - **Mobile-Friendly Design**: Fully responsive and optimized for various devices. 📱

 ## Project Structure
 ```
 ├── pages                 # Application views and routes
 │   ├── about.vue         # About page
 │   ├── auth
 │   │   └── login.vue     # Login page
 │   └── index.vue         # Home page
 ├── server                # Backend-related configurations
 │   └── tsconfig.json     # TypeScript configuration for server
 ├── public                # Public assets
 │   ├── favicon.ico       # Favicon
 │   └── robots.txt        # SEO-related configuration
 ├── nuxt.config.ts        # Nuxt.js application configuration
 ├── package.json          # Dependencies and scripts
 └── tsconfig.json         # Global TypeScript configuration
 ```

 ## Coding Guidelines
 - Follow the **Single Responsibility Principle (SRP)** for cleaner, maintainable code. ✨
 - Adhere to **Object-Oriented Programming (OOP)** principles to create reusable and modular components. 👨‍💻
 - Implement the **Don't Repeat Yourself (DRY)** principle to reduce redundancy. 🚫
 - Use meaningful, descriptive names for all variables, functions, classes, and files. 📚

 ## Coding Standards
 - Use **TypeScript** for type safety. 💻
 - Maintain a consistent style:
   - Indent with **2 spaces**. ✂️
   - Always define **return types** for functions and methods. 🔍
   - Use **async/await** for asynchronous operations. ⏳
   - Add **clear comments** for complex logic. 📝

 ## Getting Started
 Follow these steps to set up the project on your local machine:

 ### Prerequisites
 - Node.js (>= 16.x)
 - npm or yarn

 ### Installation
 1. Clone the repository:
    ```bash
    git clone https://github.com/mhassan72/suuq-web.git
    ```
 2. Navigate to the project directory:
    ```bash
    cd suuq-web
    ```
 3. Install dependencies:
    ```bash
    npm install
    ```

 ### Running the Application
 - Development Mode:
   ```bash
   npm run dev
   ```
 - Build for Production:
   ```bash
   npm run build
   ```
 - Start the Production Server:
   ```bash
   npm run start
   ```

 ## Contributing
 Contributions are welcome! Please adhere to the general guidelines and coding standards outlined above. Open a pull request to propose your changes.

 ## License
 Read our [LICENSE](LICENSE) file for details.

 ## Contact
 For support or inquiries, feel free to reach out at **support@suuq.io**. 📨
