import React from 'react';

const JwtMongooseBlog = () => (
  <div className="min-h-screen bg-black text-white font-sans">
    <article className="max-w-3xl mx-auto py-12 px-1 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
        How I Made JWT Work Inside My Mongoose Model
      </h1>

      <p className="text-xl text-gray-400 mb-8">
        So I was working on a Node project with MongoDB and wanted users to log in and stay signed in without using sessions. 
        I used JWT for that, but instead of writing a separate file for tokens, I just built everything inside the Mongoose model. 
        It turned out to be super clean and easy to handle.
      </p>

      <p className="leading-relaxed text-gray-300 mb-6">
        Before we jump into how this works, let’s understand the main idea. Mongoose lets you define schemas that describe how your data looks in MongoDB. 
        You can also attach custom functions to those schemas. These functions can handle anything like hashing passwords or generating tokens. 
        That’s what I did here - I made my user model handle JWT creation by itself.
      </p>

      <hr className="border-gray-700 mb-10" />

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 1: The Schema Basics</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        First comes the schema. I used Mongoose and defined some basic fields like <code>username</code>, <code>email</code>, <code>fullname</code>, 
        and <code>password</code>. The <code>index</code> and <code>unique</code> properties make sure there are no duplicate users and that queries are fast. 
        Lowercase and trim keep everything consistent, so you do not end up with weird spacing or case issues.
      </p>

      <pre className="bg-gray-800 p-4 mb-4 overflow-x-auto text-sm shadow-inner rounded">
        <code className="text-white">
{`const userSchema = new Schema({
  username: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  fullname: { type: String, required: true, trim: true, index: true },
  password: { type: String, ref: [true, "Password is required"] },
});`}
        </code>
      </pre>

      <p className="leading-relaxed text-gray-300 mb-6">
        The schema structure is where everything starts. Each user document in the database will have these fields. 
        Mongoose makes it feel like working with regular objects, but everything maps to MongoDB behind the scenes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 2: Password Hashing</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        Storing raw passwords is obviously a big no. So before saving any user data, I used a <code>pre('save')</code> hook to hash the password automatically. 
        This means every time the user object is saved, the password goes through bcrypt hashing. The hash makes it impossible to read the original password even if the database gets leaked.
      </p>

      <pre className="bg-gray-800 p-4 mb-4 overflow-x-auto text-sm shadow-inner rounded">
        <code className="text-white">
{`userSchema.pre("save", async function(next) {
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});`}
        </code>
      </pre>

      <p className="leading-relaxed text-gray-300 mb-6">
        The cool thing here is that this code only runs when the password changes. 
        If the user updates their name or email, it skips rehashing, which saves processing time. 
        This keeps performance tight while keeping security solid.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 3: Comparing Passwords</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        When a user tries to log in, we need to check if the entered password matches the stored hashed one. 
        That’s where bcrypt comparison comes in. It compares the plain password with the hashed version safely.
      </p>

      <pre className="bg-gray-800 p-4 mb-4 overflow-x-auto text-sm shadow-inner rounded">
        <code className="text-white">
{`userSchema.methods.isPasswordCorrect = async function(password) {
  return await bcrypt.compared(password, this.password);
};`}
        </code>
      </pre>

      <p className="leading-relaxed text-gray-300 mb-6">
        This method returns true if the password matches. 
        It is simple but powerful because bcrypt does all the math behind the comparison, so you never need to worry about handling hashes manually.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 4: What JWT Actually Does</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        JWT or JSON Web Token is what keeps users logged in. Instead of storing sessions on the server, we generate a token with user details signed using a secret key. 
        When the user sends that token in future requests, we can verify it and know who they are. 
        It’s like a digital badge signed by the backend.
      </p>

      <p className="leading-relaxed text-gray-300 mb-4">
        In this model, there are two kinds of tokens: an access token and a refresh token. 
        The access token is short-lived and used for quick verifications. The refresh token lasts longer and helps issue a new access token when it expires. 
        This approach prevents users from having to log in again and again.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 5: Generating the Tokens Inside the Model</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        I created two small methods inside the model itself. One for access tokens and one for refresh tokens. 
        These tokens contain basic user info and are signed with the secret key defined in environment variables.
      </p>

      <pre className="bg-gray-800 p-4 mb-4 overflow-x-auto text-sm shadow-inner rounded">
        <code className="text-white">
{`userSchema.methods.generateAccessToken = function() {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};`}
        </code>
      </pre>

      <p className="leading-relaxed text-gray-300 mb-6">
        This method uses the instance data, like the user’s id and email, and signs it using a secret key. 
        The token expires after a certain time, which is good for security. 
        Even if someone steals the token, it won’t work after the expiry.
      </p>

      <p className="leading-relaxed text-gray-300 mb-4">
        The refresh token looks almost the same but is signed with a different secret and expiry. 
        It is stored in the database so you can revoke it anytime, like when the user logs out or resets their password.
      </p>

      <pre className="bg-gray-800 p-4 mb-4 overflow-x-auto text-sm shadow-inner rounded">
        <code className="text-white">
{`userSchema.methods.generateRefreshToken = function() {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      fullname: this.fullname,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};`}
        </code>
      </pre>

      <p className="leading-relaxed text-gray-300 mb-6">
        By keeping these inside the model, you don’t need to import JWT logic anywhere else. 
        The user object can generate its own tokens directly, which makes your controller functions short and clear.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 6: Why Keep JWT Logic Inside the Model</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        Normally people create a separate auth file or utility for tokens. 
        But placing the token generation inside the user model has some neat benefits. 
        It keeps authentication logic close to the data it belongs to. 
        Your code feels more object oriented because now each user document knows how to authenticate itself.
      </p>

      <p className="leading-relaxed text-gray-300 mb-4">
        It also means less code repetition. 
        If you ever change how tokens are created, you just update it in one place, not in every controller. 
        It is easier to test too because everything stays inside the schema.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 7: Bringing It All Together</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        So when a user signs up, their password gets hashed automatically thanks to the pre save hook. 
        When they log in, we call the password check method to compare what they entered. 
        If it matches, we simply call <code>generateAccessToken()</code> and <code>generateRefreshToken()</code> on that user document. 
        Those tokens are returned to the client and stored safely on the frontend.
      </p>

      <p className="leading-relaxed text-gray-300 mb-4">
        Every request that needs authentication will carry the access token. 
        The server verifies it using the same secret key. 
        If it’s valid, we trust the user and continue. 
        If it’s expired, the refresh token can generate a new access token without forcing a full login again. 
        It’s a simple system that works smoothly for most web apps.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Final Thoughts</h2>
      <p className="leading-relaxed text-gray-300 mb-6">
        This whole setup is clean, reusable, and secure. 
        It avoids external dependencies or large auth frameworks. 
        The main point is that your user model is not just storing data, it is actually smart enough to handle authentication on its own. 
        And because Mongoose lets you add your own functions, it feels natural to put JWT generation there.
      </p>

      <p className="leading-relaxed text-gray-300 mb-6">
        So if you are building any Node project with MongoDB, try keeping your JWT logic inside your model. 
        It makes your controllers smaller, your code more readable, and your authentication flow smoother. 
        Plus, it gives you that nice feeling of having a self contained user model that can secure itself. 
        That’s how I made JWT work inside my Mongoose model.
      </p>

      <p className="leading-relaxed mt-10 p-4 border border-yellow-600 bg-black text-lg font-medium">
        Once you set this up, you don’t need to fight with tokens anymore. Your model handles everything quietly behind the scenes.
      </p>
    </article>
  </div>
);

export default JwtMongooseBlog;
