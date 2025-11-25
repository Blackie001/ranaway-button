# 🎯 Runaway-button – JS Fun Button Challenge

A playful mini-project built with **HTML, CSS, and JavaScript** where a button *refuses* to be clicked!  
Move your cursor toward the button and watch it randomly escape across the screen.  
Think you can catch it? 😏.... Give it a try

---

## 🕹️ Demo Preview
> _Try clicking the button… if you can!_  
<img width="1907" height="994" alt="image" src="https://github.com/user-attachments/assets/efb1badb-69c9-472a-b6e9-fe079d9e0982" />
<img width="1868" height="905" alt="image" src="https://github.com/user-attachments/assets/8adc781f-b7d7-4ab7-85b6-c569d4bbc1c5" />


---

## 🚀 Features  📂 Project Structure

✔ Button moves to a random location when hovered  
✔ Smooth scaling animation during escape  
✔ Full-screen gradient background  
✔ “Victory” alert once successfully clicked  
✔ Pure **HTML + CSS + JavaScript**, no frameworks

---

## 🧠 How It Works 💯

- The button is detected using `getElementById`.
- On `mouseover`, JavaScript calculates random X/Y positions using `Math.random()` and updates the CSS `left` and `top`.
- A click triggers a simple JavaScript alert.


---


## 🚀 How to View
1. Clone this repository:
https://blackie001.github.io/ranaway-button/

Yuo can help me grow by recommending me to your friends, clone this or any of my repository, give it a star, download it and I'll appreciate

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
});```

