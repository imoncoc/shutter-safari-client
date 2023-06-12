# Shutter Safari
## Live site: https://shutter-safari.web.app/

Shutter Safari is a photography website dedicated to showcasing the beauty of the world through captivating images. With a focus on visually appealing design and user-friendly features, Shutter Safari provides a platform for photographers to share their work and for photography enthusiasts to explore stunning visuals.

## Features:

1. **Registration and Login System:** Users can create an account or log in using their email and password. Social login options are available for convenience.

2. **Homepage:** The homepage welcomes visitors with a visually engaging design, featuring a slider section with breathtaking photographs and accompanying text. The design ensures pleasing color contrast and proper alignment, creating an immersive experience.

3. **Navbar and Footer:** The navbar is present on all pages, displaying the website logo/name, and links to Home, Photographers, Galleries, Dashboard, and the user's profile picture (conditionally). The footer includes the website logo/name, copyright, contact information, and address, creating a cohesive and professional appearance.

4. **Popular Class:** This page showcases talented photographers and their portfolios. Each photographer's profile includes their image, name, and optionally, the number of classes they have contributed to. Users can explore the work of different photographers and gain inspiration from their unique styles.

5. **Popular Instructor:** This page showcases talented Instructor and their portfolios. Each photographer's profile includes their image, name, and optionally, the number of classes they have contributed to. Users can explore the work of different photographers and gain inspiration from their unique styles.

6. **Class Pages:** This page showcases all classes. Each photographer's profile includes their image, name, and optionally, the number of classes they have contributed to. Users can explore the work of different photographers and gain inspiration from their unique styles.

7. **Instructor Pages:** This page showcases talented Instructor and their portfolios. Each photographer's profile includes their image, name, and optionally, the number of classes they have contributed to. Users can explore the work of different photographers and gain inspiration from their unique styles.

8. **Light and Dark Theme Toggle:** The website implements a theme toggle feature, allowing users to switch between light and dark themes on the homepage. This enhances user experience by providing options to accommodate individual preferences and optimize viewing conditions.

9. **Responsive Design:** The website is designed to be responsive, ensuring optimal user experience across different devices and screen sizes. The layout and components adapt to different resolutions, providing seamless navigation and readability on desktops, tablets, and mobile devices.

10. **Animation and Icons:** The website incorporates animation effects and relevant icons to enhance the visual appeal and user engagement. Animation libraries such as Framer Motion, React Awesome Reveal, React Spring, or React Anime are utilized to bring subtle motion and interactivity to the user interface.

11. **React Query and Axios:** Tanstack Query (React Query) is implemented in at least two places or more, providing efficient data fetching and state management. Axios is used for making API calls in various functionalities, ensuring seamless communication between the frontend and backend.

12. **React Hook Form:** The registration and login page utilize React Hook Form for form validation and handling user input, ensuring a smooth and user-friendly experience.

13. **JWT Token Authentication:** The login and registration systems incorporate JWT token authentication. Users receive a token upon successful login or registration, which is sent with subsequent requests to the dashboard routes for verification and authorization.

14. **404 Page:** A custom 404 page is created with an interesting image or animation, accompanied by a "Back to Home" button. The page provides a visually appealing and user-friendly way to handle missing or inaccessible content.

15. **Student Dashboard:** Private and accessible only to students.
My Selected Classes: Displays all classes booked by the student. Includes relevant class information and options to delete or pay.

My Enrolled Classes: Shows classes the student selected and successfully paid for.

16. **Instructor Dashboard:** Private and accessible only to instructors.

Add a Class: Form with fields for class name, class image, instructor name (read-only), instructor email (read-only), available seats, and price. Clicking "Add" creates a pending class in the database.

My Classes: Displays classes added by the instructor. Shows relevant information like status (pending/approved/denied), total enrolled students, and feedback. Includes an update button.

Total Enrolled Students: Initially zero. Updates with the number of students who successfully booked the class.

Feedback: No feedback for pending or approved classes. If a class is denied, admin can provide feedback explaining the reason.

17. **Admin Dashboard::** Private and accessible only to admins.

Manage Classes: Displays all classes added by instructors. Shows class information, including image, name, instructor details, available seats, price, and status (pending/approved/denied). Includes buttons to approve, deny, and send feedback.

Manage Users: Shows relevant information of registered users. Includes buttons to make users instructors or admins.

## Technology Used:

- React.js for frontend development
- Node.js and Express.js for backend development
- MongoDB for database storage
- CSS or CSS frameworks (Bootstrap) for styling
- Git for version control

## Packages and Libraries:

- React Router for client-side routing
- React Hook Form for form handling and validation
- Axios for making API calls
- React
