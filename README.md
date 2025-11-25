# 🎯 Runaway-button – JS Fun Button Challenge

A playful mini-project built with **HTML, CSS, and JavaScript** where a button *refuses* to be clicked!  
Move your cursor toward the button and watch it randomly escape across the screen.  
Think you can catch it? 😏

---

## 🕹️ Demo Preview
> _Try clicking the button… if you can!_  
(Add a GIF or screenshot here once uploaded)

---

## 🚀 Features

✔ Button moves to a random location when hovered  
✔ Smooth scaling animation during escape  
✔ Full-screen gradient background  
✔ “Victory” alert once successfully clicked  
✔ Pure **HTML + CSS + JavaScript**, no frameworks

---

## 📂 Project Structure

html
Css
Js


## 🧠 How It Works

- The button is detected using `getElementById`.
- On `mouseover`, JavaScript calculates random X/Y positions using `Math.random()` and updates the CSS `left` and `top`.
- A click triggers a simple JavaScript alert.

---

## 💡 Code Snippet

```javascript
btn.addEventListener("mouseover", () => {
    const newX = Math.random() * (window.innerWidth - btn.clientWidth);
    const newY = Math.random() * (window.innerHeight - btn.clientHeight);
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
});

btn.addEventListener("click", () => {
    alert("Whoa! You actually caught me! 😲");
});
