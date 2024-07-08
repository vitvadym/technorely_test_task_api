# Company Management API

## Overview

This API allows user authentication, profile management, and company management. Token lifespan is 1 day.

## Request and Response Format

- All requests and responses use JSON format.

## API Endpoints

### User Authentication

1. **SignUp**
   - **Endpoint**: `/auth/signup`
   - **Method**: `POST`
   - **Description**: Register a new user with fields: email, password, phone number, last name, first name, nickname, description, position.

2. **SignIn**
   - **Endpoint**: `auth/signin`
   - **Method**: `POST`
   - **Description**: Log in with email and password to receive a bearer token.

### User Profile

1. **Get Profile**
   - **Endpoint**: `user/profile/:id`
   - **Method**: `GET`
   - **Description**: Retrieve the authenticated user's profile information.
   - 
1. **Get All Users**
   - **Endpoint**: `user/all`
   - **Method**: `GET`
   - **Description**: Retrieve the list registered users.

3. **Edit Profile**
   - **Endpoint**: `user/user/edit/:id`
   - **Method**: `PUT`
   - **Description**: Update user's profile information.
   - 
4. **Delete Profile**
   - **Endpoint**: `user/user/delete/:id`
   - **Method**: `DELETE`
   - **Description**: Delte user's profile.



### Company Management

1. **Get All Companies**
   - **Endpoint**: `company/all`
   - **Method**: `GET`
   - **Description**: Retrieve a list of companies for the authenticated user.
   - 
2. **Get Users Companies**
   - **Endpoint**: `company/my/:userId`
   - **Method**: `GET`
   - **Description**: Retrieve a list of companies for the authenticated user.

3. **Get Company by ID**
   - **Endpoint**: `/company/:id`
   - **Method**: `GET`
   - **Description**: Retrieve detailed information about a specific company.

4. **Create Company**
   - **Endpoint**: `/company/create`
   - **Method**: `POST`
   - **Description**: Create a new company with fields: name, address, service of activity, number of employees, description, type.

5. **Update Company**
   - **Endpoint**: `/company/edit/:id`
   - **Method**: `PUT`
   - **Description**: Update a specific company.

6. **Delete Company**
   - **Endpoint**: `/company/:id`
   - **Method**: `DELETE`
   - **Description**: Delete a specific company.
