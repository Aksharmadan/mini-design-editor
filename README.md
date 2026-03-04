# Mini Design Canvas Editor

A simplified web-based design canvas similar to basic visual design tools like **Figma**.
Users can create, move, resize, and manage elements interactively on a canvas.

This project was built as part of the **GDG on Campus SRM Technical Recruitment Task (2026)**.

---

## 🚀 Features

* 🖌 **Canvas Workspace** – A dedicated design canvas where elements can be placed.
* 📦 **Add Elements** – Add rectangles and text blocks to the canvas.
* 🖱 **Element Selection** – Click any element to select it.
* 🔄 **Drag Movement** – Drag elements to reposition them anywhere inside the canvas.
* 📐 **Resize Elements** – Resize elements using corner handles.
* 🧱 **Layer Management** – Multiple elements can exist simultaneously on the canvas.
* ❌ **Element Deletion** – Remove selected elements using the delete button.
* ✏ **Editable Text** – Text blocks can be edited directly on the canvas.

---

## 🛠 Technologies Used

* **React (Vite)**
* **JavaScript**
* **HTML5**
* **CSS3**
* **react-rnd** (for drag & resize functionality)

---

## 📂 Project Structure

```
mini-design-editor
│
├── public
│   └── screenshots
│
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── style.css
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```

---

## 📸 Screenshots

### Empty Canvas

![Empty Canvas](src/screenshots/empty%20canvas.png)

### Rectangle Added

![Rectangle Added](src/screenshots/rectangle%20added.png)

### Adding Text

![Adding Text](src/screenshots/adding%20text%20.png)

### Resize and Drag

![Resize and Drag](src/screenshots/resize%20and%20drag.png)

### Multiple Elements

![Multiple Elements](src/screenshots/multiple%20elements.png)

---

## ⚙ Installation & Setup

1. Clone the repository

```
git clone https://github.com/Aksharmadan/mini-design-editor.git
```

2. Navigate into the project

```
cd mini-design-editor
```

3. Install dependencies

```
npm install
```

4. Start development server

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## 🌐 Deployment

The project can be deployed using:

* **Vercel**
* **Netlify**

---

## 📌 Future Improvements

* Export canvas as PNG
* Keyboard shortcuts (Delete / Duplicate)
* Snap-to-grid alignment
* Undo / Redo functionality
* Element property panel

---

## 👨‍💻 Author

Akshar Madan
