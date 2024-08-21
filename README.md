# Nuxt App

## Overview

This is a frontend application built with Nuxt 3, designed to work with the [backend-njs](https://github.com/mcasante/backend-njs) application. It uses Nuxt 3 and Nuxt UI to provide a modern development experience.

## Prerequisites

- **Node.js** v16.x or higher
- **pnpm** v8.x or higher

_\* Note: I use `pnpm` as the package manager, but you can use `npm`, `yarn` or `bun` if you prefer._

## Installation

```bash
# Install dependencies
pnpm install

# Copy the environment variables
cp .env.example .env
```

## Running the app

```bash
# Start the development server
pnpm dev

# Open the app
open http://localhost:3000
```

> [!IMPORTANT]  
> The backend application must be running in order to properly run this frontend application.
