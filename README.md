# Full Stack Application
### 2. Backend

The backend service handles API requests and interacts with the MySQL database using the shared ORM library.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pankajwinaim/backend.git
   cd backend
   ```
# Create the database my-account and tables users

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** 

   PORT=3000
   DB_NAME=My-account
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_HOST=localhost
   DB_DIALECT=mysql
   ```

4. **Run database migrations:**
   ```bash
   npm run migrate
   ```

5. **Start the server:**
   ```bash
   npm start
   ```

   The backend server will be running at `http://localhost:3000`.


### Backend

- `GET /users`: Returns a list of all users
- `POST /users`: Creates a new user

