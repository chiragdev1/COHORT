Here is your JavaScript code converted into a properly formatted Markdown file with code sections and indentation preserved.

---

### **JavaScript Objects and Memory Concepts**  

#### **Introduction**  
An object is a representation of a real-world entity like a car, person, or laptop. It consists of **key-value pairs**. In JavaScript, almost everything is an instance of an object.

---

### **Creating an Object**  
```javascript
const user = {
   x: 10,
   firstName: 'Chirag',
   lastName: 'Arora',
   age: 23,
};

// console.log(user)
```

---

### **Adding a New Property to the Object**  
```javascript
user.height = 182;
```

---

### **Deleting a Property from the Object**  
```javascript
delete user.lastName;
```

---

### **Copying Objects and the Issue with Reference Assignment**  

#### **Task:**  
- Create `user1` with the given properties.
- Copy `user1` into `user2`.
- Change the `firstName` of `user2` to **Sahil** and print both objects.

```javascript
const user1 = {
   id: 9232,
   firstName: 'Chirag',
   age: 23
}

const user2 = user1;
user2.firstName = 'Sahil'; // Now both user1 and user2 have firstName = Sahil. Why?
```

---

### **Stack vs Heap Memory**  
In JavaScript, memory is managed in two ways:  

1. **Stack Memory**: Stores variables with static values (`string`, `number`, `boolean`).  
2. **Heap Memory**: Stores objects and arrays (dynamic structures).  

When we assign `user2 = user1`, JavaScript copies the **reference (address)** of `user1` into `user2`. Both `user1` and `user2` now point to the same object in the heap.

---

### **Solution: Creating an Independent Copy Using Spread Operator**  
The **spread operator (`...`)** helps create a new object with a separate memory reference.

```javascript
const user3 = {
   ...user1
};
user3.firstName = 'Chirag'; // Now both user1 and user3 have different memory addresses.
```

---

### **Shallow Copy Issue with Nested Objects**  
What if we add an **object** as a property inside `user1`?

```javascript
user1.address = {
   h: 2,
   s: 21,
   city: 'Delhi'
};

const user4 = {
   ...user1
};

// Changing address in user4
user4.address.h = 45; 
```

#### **Problem:**
The change is reflected in both `user1` and `user4`. Why?  
- The spread operator only performs a **shallow copy**, meaning:
  - Static values (like `firstName`, `age`) get a new address.
  - **Nested objects (like `address`) still share the same memory reference**.

---

### **Deep Copy Solution Using JSON**  
To fully clone an object (including nested objects), we can use **JSON serialization**.

```javascript
// Step 1: Convert user1 into a JSON string
const user1KaString = JSON.stringify(user1);

// Step 2: Convert the string back into an object
const user5 = JSON.parse(user1KaString);

// Changing address in user5
user5.address.h = 99; // Now, user1 remains unchanged.
```

---

### **Serialization & Deserialization**  
- **Serialization**: Converting an object into a string (e.g., `JSON.stringify()`).  
- **Deserialization**: Converting a string back into an object (e.g., `JSON.parse()`).  

---

### **Final Output**
```javascript
console.log(user1);
console.log(user1KaString);
console.log(user5);
```

---

### **Conclusion**  
- **Shallow copy**: Uses the spread operator (`...`), but nested objects still share memory.  
- **Deep copy**: Uses `JSON.stringify()` and `JSON.parse()` to create a fully independent copy.  

Hope this helps! 🚀