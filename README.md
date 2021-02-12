# Lorem Ipsum Blog Generator

## Home Page

<p>
The home page of this website will feature a navigation bar and a drop-down menu with a variety of color theme options. The main content is dynamically populated using javascript to create random Lorem Ipsum posts. A user may also sign up through a button on the navigation bar which will lead them to the sign up page. If a user is already logged in, then their profile will appear on the right of the main content and they will be able to create their own post.
</p>

## Sign Up Page
<p>
On the sign up page, can return back to the home page at will. The sign up form consists of a simple username and password field that is checked with RegEx to ensure no invalid usernames are signed in. After submitting the form, users are then directed to their profile page.
</p>

## Profile Page
<p>
On the profile page, users again have the ability to return back to home, but will have their credentials sent to the home page for the profile preview. A user's profile page consists of random details about the user as well as a table of random statistics. A user's profile pic is determined by their username and is automatically selected from an array of pre-existing assets.
</p>

## Technical Specifications
<p>
The website currently does not operate with a backend, so the sign-up feature does not actually save user credentials. Instead, it relies on grabbing credentials posted to the URL and generates user content based on the user name. As such, there is also no password verification system put in place.
</p>
<br>
<p>
This website was build using HTML, CSS, Javascript, and Bootstrap.
</p>