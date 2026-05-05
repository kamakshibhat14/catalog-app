# 🚀 Dynamic Multi-Category Product Catalog

A responsive React-based web application that dynamically displays products across multiple categories such as Cars, Phones, Bikes, and Computers. The application parses a JSON structure and renders category-specific attributes dynamically.

---

## 🌐 Live Demo
👉 https://catalog-app-theta-nine.vercel.app/

## 📂 GitHub Repository
👉 https://github.com/kamakshibhat14/catalog-app  

---

## 📌 Features

- 📦 Multi-category product catalog (Cars, Bikes, Phones, Computers)
- 🔍 Dynamic rendering of product attributes using JSON
- 📱 Fully responsive design (Mobile, Tablet, Desktop)
- ⚡ Smooth UI with modern animations and hover effects
- 🔁 Navigation between Home and Product Detail pages
- 🧩 Reusable React components

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Routing:** React Router
- **Styling:** CSS (Flexbox + Grid)
- **Data Handling:** JSON

---
```md
## 🧠 Approach

- Parsed the provided JSON data to dynamically generate UI.
- Grouped items based on categories for structured display.
- Created reusable components:
  - `CategorySection`
  - `ProductCard`
  - `ProductDetail`
- Implemented dynamic property rendering using:
  ```js
  item.itemprops.map(...)

## 📁 Folder Structure

  catalog-app/
│── src/
│   ├── components/
│   │   ├── CategorySection.js
│   │   ├── ProductCard.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── ProductDetail.js
│   │
│   ├── data/
│   │   ├── items.json
│   │
│   ├── styles/
│   │   ├── main.css
│   │
│   ├── App.js
│   ├── index.js

---

**## ⏱️ Time Taken**

Approximately 5–6 hours

💡 Highlights
Dynamic UI rendering based on category-specific properties
Clean and scalable component-based architecture
Responsive and modern UI design
Smooth user experience with navigation


