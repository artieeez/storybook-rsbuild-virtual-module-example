# Rsbuild + Module Federation + Storybook Example

This project demonstrates how to set up **Rsbuild** with **Module Federation** and **Storybook** using a custom Rsbuild plugin to inject a dynamic import required for Module Federation.

## How to Run

### Provider with Storybook

1. Navigate to the `federation_storybook` directory:
    ```bash
    cd federation_storybook
    ```
2. Install dependencies:
    ```bash
    npm i
    ```
3. Start Storybook:
    ```bash
    npm run storybook
    ```

### Shell/Consumer

1. Navigate to the `federation_consumer` directory:
    ```bash
    cd federation_consumer
    ```
2. Install dependencies:
    ```bash
    npm i
    ```
3. Run the development server:
    ```bash
    npm run dev
    ```

