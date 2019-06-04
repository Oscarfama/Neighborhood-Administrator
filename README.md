# Table of Content

1. Introduction
  1.1. Purpose
  1.2. scope
2. Overall Descriptions
  2.1 Product perspective
  2.2 Mobile Perspective
    2.2.1 Residence Perspective
    2.2.2 Guard Perspective
  2.3. Web Perspective
3. Specific Requirements
  3.1  Interface
    3.1.1 User Interface
    3.1.2 Communication interfaces
  3.2 Functional requirements
    3.2.1 Administrator
    3.2.2 Guard
    3.2.3 Resident









# Introduction

This section gives a scope description and overview of everything included in this SRS document. The purpose for this document is described also by presenting the project in a good manner.

### Purpose

The purpose of this document is to give a detailed description of the requirements for the &quot;Neighborhood administrator&quot; software. It will illustrate the purpose and complete declaration for the development of the system.

It will explain interface, interactions with external application. This document is intended o be proposed to a customer in charge of the administration on a residence for its approval and reference for the developing the first version of the system for his inhabitants.

### Scope

 The &quot;Neighborhood administrator&quot; is a Utility application which helps people to have a better contact with the people of the residence and greater control of it. The application should be free to download from either iOS or android for guards and residences as desktop app for administrators.

Residence administrator can provide their own information and control using the web-portal. This information will act as the bases for the notifications for all residences.

Furthermore, the software needs Internet connection to fetch, consult and display information. All system information is maintained in a database which is located in the cloud.

# Overall Description

This section will give an overview of the whole system and how it interacts with other systems and introduce the basic functionality of it.

### Product Perspective

The system will consist of two parts: one mobile application and one web portal. The mobile application will be used for guards and residences to view notifications, talk between them, have control of their own visitors as well.

 

### Web Perspective

The application consists on a control of the hole, he can add new people who wants to be in the residence, it has the same process for the guards.

He is in charge for all the notifications within the app, since he is the only one who can post, delete and modify the notifications, meanwhile the other users just see.

### Mobile Perspective (Guard)

The application consists in a dashboard menu with all notifications that the administrator submits, there is a side menu where the guard can do different things, for example:

- Add Visitor: form with the information of the visitor, also there is a Scan button where the guard will take the photo to the vehicle number and convert it to string.
- Chat: there is a feature where the guard and the residence can chat.



### Mobile Perspective (Resident)

This side of the applications has the same Dashboard as the guards with the notifications, this user has more features as:

- Add preferred user: there will be a list of limited persons per house that can pass faster than the others.
- Chat: there is a feature where the guard and the residence can chat. (same as guard).
- Don&#39;t bother: there is a notification where you don&#39;t accept any visitor in your house.

# Specific Requirements

### User Interface

##### Mobile App

The user interface must be friendly and compressible with some features like:

- The app must prioritize all residences.
- The app will allow to register and manage a user profile.
- The app must save the users information.
- Requires to login to the correct resident data.

##### Web App

The user must be more complex since all the features it has, next features:

- A dashboard to show all all notifications and be able to modify, add and delete.
- Require a login to perform any change.
- A form to add all persona staff and residences.

### Functional Requirements

##### Web App

- **Control Managing:** the system should be able to manage all information and notification for all the people in the resident.
- **Notifications Administration:** manage notifications selecting the people you want to receive those notifications.
- **Employee Managing:** it allows the manager to add other employees and residences in the platform.

##### Mobile App

- **Dashboard:**  just read all notifications.
- **Preferred users:** add preferred visitor there is a limit of preferred users per house.
- **Visit History:** see all people who wants to go to the resident house.
- **Chat:** contact between all persons in the app.

### Non-Functional Requirements

#### Platform availability

The mobile applications should be able to android and iOS platform. The maintenance within the app is with the Ionic Framework.

The Web application should be for the MAC and windows OS. The maintenance with the app is with the Ionic Framework.

#### Database Storage

Database managing, and server maintenance are in firebase, this company is not in charge of any of database issue or activities.
