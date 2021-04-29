---
layout: page
title: Sign-In
permalink: /sign-in/
---

<div>
    <div>
        <p>Enter an email and password below and either sign in to an existing account or sign up</p>
        <input style="display:inline;width:auto;" type="text" id="email" name="email" placeholder="Email"/>
        <input style="display:inline;width:auto;" type="password" id="password" name="password" placeholder="Password"/>
        Sign-in status: <span id="quickstart-sign-in-status">Unknown</span>
        <br/>
        <button disabled id="quickstart-sign-in" name="signin">Sign In</button>
        <button id="quickstart-sign-up" name="signup">Sign Up</button>
        <!--<button disabled id="quickstart-verify-email" name="verify-email">Send Email Verification</button>-->
        <button id="quickstart-password-reset" name="verify-email">Send Password Reset Email</button>
        <!-- Container where we'll display the user details -->
        <!--<div>
            <div><code>currentUser</code></div>
            <pre><code id="quickstart-account-details">null</code></pre>
        </div>-->
    </div>
</div>