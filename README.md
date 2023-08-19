# Agura Home Assignment 📊

## About the Application 📌

Inspired by the design and functionality of [Agora Website](https://agorareal.com/), this fully-responsive application is tailored for both desktop and mobile users. Its core feature is the dynamic rendering of the Ant Design table on distinct pages, each with unique data and designs. Additionally, users enjoy the flexibility of adjusting column widths via drag-and-drop actions. Every table maintains its unique column configuration, stored in the local storage, ensuring user preferences persist across sessions.


Quick Demo 🎥
Experience the application live! For a quick demo, [click here](https://rococo-blini-5b9ffc.netlify.app/).

## Technologies & Libraries 🛠️

### 1. React ⚛️

A JavaScript library for building interactive UIs effortlessly. We've integrated several libraries to enhance React's capabilities.
- **Documentation**: [React Official Docs](https://reactjs.org/docs/getting-started.html)

### 2. Webpack 📦

Chosen over `create-react-app` for its efficiency and superior performance, Webpack bundles our JavaScript files. It provides more control over the build process and allows for fine-tuning the configuration.
- **Documentation**: [Webpack Official Docs](https://webpack.js.org/concepts/)

### 3. Docker 🐳

Docker ensures that the application runs seamlessly across different environments, eliminating the "it works on my machine" issue. It encapsulates the app and its dependencies into a "container", guaranteeing consistency regardless of where it's run.
- **Documentation**: [Docker Official Docs](https://docs.docker.com/get-started/overview/)

### Libraries Used:

- **@ant-design/icons** - Icons from the Ant Design system. [More info](https://ant.design/components/icon/)
- **antd** - A comprehensive UI design language and React component library. [More info](https://ant.design/docs/react/introduce)
- **react-dom** - Pairs with React to render components to the DOM. [More info](https://reactjs.org/docs/react-dom.html)
- **react-resizable** - Used to adjust table columns dynamically, with adjustments saved in the local storage. [More info](https://github.com/STRML/react-resizable)
- **react-router-dom** - Manages routing in our React app, ensuring smooth page transitions. [More info](https://reactrouter.com/web/guides/quick-start)

## Getting Started 🚀

### Prerequisites:

Before you begin, ensure you have Docker installed. If not:
- [Download Docker](https://www.docker.com/products/docker-desktop)

### How to Run:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/OmriUday/agura-home-assignment.git
   cd agura-home-assignment

   * Or use the combined command:
   git clone https://github.com/OmriUday/agura-home-assignment.git && cd agura-home-assignment

2. **Build and Run with Docker**:
   ```bash
   docker build -t agura-assignment-image .
   docker run --name agura-assignment-container -p 8080:8080 agura-assignment-image

   * Or use the combined command:
   docker build -t agura-assignment-image . && docker run --name agura-assignment-container -p 8080:8080 agura-assignment-image

2. **View the App**:
   Open your browser and navigate to: [http://localhost:8080](http://localhost:8080/)

💡 Tip: For an optimal user experience, you can adjust the table columns by dragging them. Click on "reset columns size per page" if you wish to reset any changes.

Made with ❤️ by Omri Uday.<br>
Happy Coding!
