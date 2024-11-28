# Project Title

A brief description of what your project does and its purpose.

---

## Table of Contents

1. [Task 1: Task Description](#task-1)
2. [Task 2: Task Description](#task-2)
3. [Task 3: Task Description](#task-3)
4. [Task 4: Task Description](#task-4)
5. [Task 5: Task Description](#task-5)
6. [Task 6: Task Description](#task-6)
7. [Task 7: Task Description](#task-7)
8. [Task 8: Task Description](#task-8)
9. [Task 9: Task Description](#task-9)
10. [Task 10: Task Description](#task-10)
11. [Task 11: Task Description](#task-11)
12. [Task 12: Task Description](#task-12)
13. [Task 13: Task Description](#task-13)

---

## Task 1: Task Description

Brief explanation of Task 1.

![Task 1 Image](./images/task1.jpg)

---

## Task 2: Task Description

Brief explanation of Task 2.

![Task 2 Image](./images/task2.jpg)

---

## Task 3: Task Description

Brief explanation of Task 3.

![Task 3 Image](./images/task3.jpg)

---

## Task 4: Task Description

Brief explanation of Task 4.

![Task 4 Image](./images/task4.jpg)

---

## Task 5: Task Description

Brief explanation of Task 5.

![Task 5 Image](./images/task5.jpg)

---

## Task 6: Task Description

Brief explanation of Task 6.

![Task 6 Image](./images/task6.jpg)

---

## Task 7: Task Description

Brief explanation of Task 7.

![Task 7 Image](./images/task7.jpg)

---

## Task 8: Task Description

Brief explanation of Task 8.

![Task 8 Image](./images/task8.jpg)

---

## Task 9: Task Description

Brief explanation of Task 9.

![Task 9 Image](./images/task9.jpg)

---

## Task 10: Task Description

Brief explanation of Task 10.

![Task 10 Image](./images/task10.jpg)

---

## Task 11: Task Description

Brief explanation of Task 11.

![Task 11 Image](./images/task11.jpg)

---

## Task 12: Task Description

Brief explanation of Task 12.

![Task 12 Image](./images/task12.jpg)

---

## Task 13: Task Description

Brief explanation of Task 13.

![Task 13 Image](./images/task13.jpg)

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Peer Review Assignment: Book Shop API

This repository contains the implementation of a book shop API with various routes and functionalities. Below are the tasks that have been completed, along with details and sample outputs.

---

## Table of Contents

1. [Task 1: Get All Books](#task-1)
2. [Task 2: Get Book Details by ISBN](#task-2)
3. [Task 3: Get Books by Author](#task-3)
4. [Task 4: Get Books by Title](#task-4)
5. [Task 5: Get Book Reviews](#task-5)
6. [Task 6: Register New User](#task-6)
7. [Task 7: Login](#task-7)
8. [Task 8: Add or Modify Book Review](#task-8)
9. [Task 9: Delete Book Review](#task-9)
10. [Task 10: Get Books Using Axios with Promises](#task-10)
11. [Task 11: Get Book by ISBN Using Axios with Promises](#task-11)
12. [Task 12: Get Books by Author Using Axios with Promises](#task-12)
13. [Task 13: Get Books by Title Using Axios with Promises](#task-13)

---

## Task 1: Get All Books

**Objective**: Complete the code for retrieving the list of books available in the shop.

**Hint**: Use the `JSON.stringify` method to display the output neatly.

**Testing**: Test the output on Postman.

![Task 1 - Get All Books](./images/1-getallbooks.png)

---

## Task 2: Get Book Details by ISBN

**Objective**: Retrieve the book details based on ISBN from the request parameters.

**Hint**: Retrieve the ISBN from the request parameters.

**Testing**: Test the output on Postman.

![Task 2 - Get Book Details by ISBN](./images/2-gedetailsISBN.png)

---

## Task 3: Get Books by Author

**Objective**: Retrieve the books based on the author from the request parameters.

**Hint**: Iterate through the `books` array and check for matching authors.

**Testing**: Test the output on Postman.

![Task 3 - Get Books by Author](./images/3-getbooksbyauthor.png)

---

## Task 4: Get Books by Title

**Objective**: Retrieve the books based on the title from the request parameters.

**Hint**: Similar to Task 3, but match by title instead of author.

**Testing**: Test the output on Postman.

![Task 4 - Get Books by Title](./images/4-getbooksbytitle.png)

---

## Task 5: Get Book Reviews

**Objective**: Retrieve the book reviews based on ISBN from the request parameters.

**Testing**: Test the output on Postman.

![Task 5 - Get Book Reviews](./images/5-getbookreview.png)

---

## Task 6: Register New User

**Objective**: Register a new user with a username and password.

**Hint**: If the username already exists, display an error message. Ensure the username and password are both provided.

**Testing**: Test the output on Postman.

![Task 6 - Register New User](./images/6-register.png)

---

## Task 7: Login

**Objective**: Log in as a registered user and authenticate the credentials.

**Hint**: Use JWT tokens for session management and validation.

**Testing**: Test the output on Postman.

![Task 7 - Login](./images/7-login.png)

---

## Task 8: Add or Modify Book Review

**Objective**: Add or modify a book review. A user can modify their review on the same ISBN, but reviews from different users are stored separately.

**Testing**: Test the output on Postman.

![Task 8 - Add or Modify Book Review](./images/8-reviewadded.png)

---

## Task 9: Delete Book Review

**Objective**: Delete a book review based on the session username. A user can only delete their own reviews.

**Testing**: Test the output on Postman.

![Task 9 - Delete Book Review](./images/9-deletereview.png)

---

## Task 10: Get Books Using Axios with Promises

**Objective**: Use Axios with Promise callbacks or async/await to retrieve the list of books.

**Testing**: Test the output on Postman.

![Task 10 - Get Books Using Axios](./images/task10.png)

---

## Task 11: Get Book by ISBN Using Axios with Promises

**Objective**: Use Axios with Promise callbacks or async/await to retrieve the book details based on ISBN.

**Testing**: Test the output on Postman.

![Task 11 - Get Book by ISBN Using Axios](./images/task11.png)

---

## Task 12: Get Books by Author Using Axios with Promises

**Objective**: Use Axios with Promise callbacks or async/await to retrieve books by author.

**Testing**: Test the output on Postman.

![Task 12 - Get Books by Author Using Axios](./images/task12.png)

---

## Task 13: Get Books by Title Using Axios with Promises

**Objective**: Use Axios with Promise callbacks or async/await to retrieve books by title.

**Testing**: Test the output on Postman.

![Task 13 - Get Books by Title Using Axios](./images/task13.png)

---

## Author Details

**Author**: [Sanket Padgal](https://github.com/swsanket)  
**Email**: [workwithsanketpadgal@gmail.com](mailto:workwithsanketpadgal@gmail.com)  
**LinkedIn**: [Sanket Padgal](https://www.linkedin.com/in/swspadgal1112/)
**Twitter**: [@SRPwithsanket](https://x.com/SRPwithsanket)

Feel free to reach out if you have any questions or suggestions.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

Author details
