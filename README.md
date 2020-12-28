# Uluwatu Book Club

✨**You can check the app in production at https://uluwatu-book-club.netlify.app/**

This social book platform has been built using **Gatsby** & **Firebase**.

Within the app you will be able to:
* Register and log in.
* View information about some books.
* Make comments and share ideas.

If you have an admin account you will be able to post new books to the platform.

## How to install
These are the steps you need to follow if you want to run the code with your own Firebase project (You will need access to **Firebase Authentication**, **Cloud Firestore**, **Firebase Storage** and **Cloud Functions**).
1. Download or clone the project.

2. Install the dependencies with `npm install`.

3. Open your Firebase project, go to **Project Settings**, navigate to *Service accounts* and click on "Generate new private key" to get a new Firebase SDK Key. Save this file at the root of the project and name it `firebase.json`.

4. Inside **Project Settings**, at the *General* tab, scroll to the bottom and copy the `firebaseConfig` object. Then, inside the Gatsby project go to *src/components/Firebase*, create a `config.js` file and paste the object there. Finally add an `export default firebaseConfig` at the bottom of the file.

5. In the **Authentication** section, enable the *Email/Password* provider.

6. Open **Cloud Firestore** and create the following collections: *authors*, *books*, *comments* and *publicProfiles*. You should add the following code in the *Rules* section:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  	match /comments/{comment}{
    	allow read;
      allow write: if false;
    }
    match /authors/{author}{
    	allow read;
      allow write: if false;
    }
  	match /books/{book}{
    	allow read;
      allow write: if false;
    }
  	match /publicProfiles/{profile}{
    	allow read; 
      allow write: if false;
    }
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

7. To enable the project's **Firebase Functions**, clone or download the `gatsby-uluwatu-book-club-firebase` project and follow the instructions that you will find there (Keep in mind that you will need to be subscribed to the Firebase Blaze membership plan to access Firebase Functions). 
https://github.com/angelprzz/gatsby-uluwatu-book-club-firebase
8. Run the project with `gatsby start`.

9. Open http://localhost:8000 in your browser.

