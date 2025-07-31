import React from 'react';

// A reusable component for displaying styled code blocks.
const CodeBlock = ({ language, code }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg my-6">
      <div className="bg-gray-700 px-4 py-2 rounded-t-lg text-sm font-semibold text-gray-300">
        <span>{language}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};

const AppwriteAuthTutorialBlog = () => {
  return (
    <main className="bg-white text-gray-800 font-sans leading-relaxed">
      <article className="max-w-4xl mx-auto p-4 sm:p-8">
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          The Complete Guide to User Authentication in React with Appwrite
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Building a secure and reliable user authentication system is a foundational requirement for most modern web applications. It can also be a complex, time-consuming task fraught with security pitfalls.
        </p>
        <p className="mb-6">
          This is where a Backend-as-a-Service (BaaS) like <strong>Appwrite</strong> shines. Appwrite is an open-source platform that provides developers with a suite of backend APIs, including a powerful and secure Authentication API, that are easy to integrate into any frontend application.
        </p>
        <p className="mb-6">
          In this comprehensive guide, we will walk you through every step of building a complete authentication flow in a <strong>React</strong> application from scratch. 🚀
        </p>

        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-4 mb-8">
          <h3 className="font-bold mb-2">By the end of this tutorial, you will have:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>A fully functional user <strong>registration</strong> (signup) form.</li>
            <li>A secure user <strong>login</strong> and <strong>logout</strong> system.</li>
            <li>Persistent sessions that keep users logged in across browser refreshes.</li>
            <li><strong>Protected routes</strong> that are only accessible to authenticated users.</li>
            <li>A clean, reusable, and scalable code structure.</li>
          </ul>
        </div>
        
        <hr className="my-12" />

        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="prerequisites">
          Prerequisites
        </h2>
        <p className="mb-4">Before we begin, please ensure you have the following set up:</p>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li><strong>Node.js and npm:</strong> You should have Node.js (version 18 or higher) and its package manager, npm, installed on your machine.</li>
          <li><strong>React Knowledge:</strong> A basic understanding of React concepts like components, props, state (<code className="bg-gray-200 text-sm p-1 rounded">useState</code>), and hooks (<code className="bg-gray-200 text-sm p-1 rounded">useEffect</code>, <code className="bg-gray-200 text-sm p-1 rounded">useContext</code>).</li>
          <li><strong>An Appwrite Cloud Account:</strong> You'll need a free account to create your backend project. You can sign up at <a href="https://cloud.appwrite.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">cloud.appwrite.io</a>.</li>
        </ul>

        <hr className="my-12" />

        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="setup-backend">
          Section 1: Setting Up Your Appwrite Backend
        </h2>
        <p className="mb-6">First, we need to create an Appwrite project to act as the backend for our React application.</p>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 1.1: Create a New Appwrite Project</h3>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>Log in to your <a href="https://cloud.appwrite.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Appwrite Cloud dashboard</a>.</li>
          <li>Click the <strong>Create project</strong> button.</li>
          <li>Give your project a name (e.g., "React Auth Tutorial") and click <strong>Create</strong>.</li>
        </ol>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 1.2: Get Your Project Credentials</h3>
        <p className="mb-4">Once your project is created, you'll need two key pieces of information to connect your React app to it:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Project ID:</strong> Find this in the <strong>Settings</strong> tab of your project dashboard.</li>
            <li><strong>API Endpoint:</strong> This is also located in the <strong>Settings</strong> tab.</li>
        </ul>
        <p className="mb-6">Keep these handy; we'll need them shortly.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 1.3: Register Your Web App</h3>
        <p className="mb-4">For security, Appwrite only accepts requests from registered client applications.</p>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>Navigate to the <strong>Auth</strong> tab in the left sidebar.</li>
          <li>In the Auth dashboard, click on <strong>Add Platform</strong> and select <strong>New Web App</strong>.</li>
          <li>Give your web app a name (e.g., "React Client").</li>
          <li>For the <strong>Hostname</strong>, enter <code className="bg-gray-200 text-sm p-1 rounded">localhost</code>. This tells Appwrite to trust requests coming from your local development server.</li>
          <li>Click <strong>Next</strong> and then <strong>Skip optional SDK step</strong>, as we will install it manually.</li>
        </ol>
        <p className="mb-8 font-medium">Your Appwrite backend is now configured and ready to handle authentication requests! ✅</p>

        <hr className="my-12" />

        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="setup-frontend">
          Section 2: Initializing the React Frontend
        </h2>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 2.1: Create a New React Project</h3>
        <p className="mb-4">Open your terminal and run the following command to create a new React project with Vite:</p>
        <CodeBlock language="sh" code={`
          npm create vite@latest react-appwrite-auth -- --template react
          cd react-appwrite-auth
        `} />
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 2.2: Install Dependencies</h3>
        <p className="mb-4">We need two packages for this project: the Appwrite client SDK and `react-router-dom` for handling routing.</p>
        <CodeBlock language="sh" code={`npm install appwrite react-router-dom`} />
        <p className="mt-4 mb-6">Finally, start the development server to make sure everything is working:</p>
        <CodeBlock language="sh" code={`npm run dev`} />

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 2.3: Set Up Environment Variables</h3>
        <p className="mb-4">It's a critical security practice to never hardcode credentials directly in your source code. In the root of your project, create a new file named <code className="bg-gray-200 text-sm p-1 rounded">.env</code> and add your credentials:</p>
        <CodeBlock language=".env" code={`
          # .env
          VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
          VITE_APPWRITE_PROJECT_ID="YOUR_PROJECT_ID"
        `} />

        <hr className="my-12" />
        
        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="auth-service">
          Section 3: The Core Authentication Service
        </h2>
        <p className="mb-4">To keep our code organized, we will create a dedicated service that encapsulates all interactions with the Appwrite Authentication API. Create a file at <code className="bg-gray-200 text-sm p-1 rounded">src/appwrite/auth.js</code>.</p>
        <CodeBlock language="javascript" code={`
          import { Client, Account, ID } from 'appwrite';

          const appwriteConfig = {
            url: import.meta.env.VITE_APPWRITE_URL,
            projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
          };

          export class AuthService {
            client = new Client();
            account;

            constructor() {
              this.client
                .setEndpoint(appwriteConfig.url)
                .setProject(appwriteConfig.projectId);
              this.account = new Account(this.client);
            }

            async createAccount({ email, password, name }) {
              try {
                const userAccount = await this.account.create(ID.unique(), email, password, name);
                if (userAccount) {
                  return this.login({ email, password });
                } else {
                  return userAccount;
                }
              } catch (error) {
                console.error("Appwrite Service :: createAccount() :: ", error);
                throw error;
              }
            }
            
            async login({ email, password }) {
              try {
                return await this.account.createEmailPasswordSession(email, password);
              } catch (error) {
                console.error("Appwrite Service :: login() :: ", error);
                throw error;
              }
            }

            async getCurrentUser() {
              try {
                return await this.account.get();
              } catch (error) {
                console.log("Appwrite Service :: getCurrentUser() :: No current session");
                return null;
              }
            }

            async logout() {
              try {
                await this.account.deleteSessions();
              } catch (error) {
                console.error("Appwrite Service :: logout() :: ", error);
              }
            }
          }

          const authService = new AuthService();
          export default authService;
        `} />

        <h3 className="text-2xl font-semibold text-gray-800 my-4">💡 Understanding the Service</h3>
        <ul className="list-disc list-inside mb-8 space-y-2">
            <li><strong><code className="bg-gray-200 text-sm p-1 rounded">constructor</code></strong>: Initializes the Appwrite <code className="bg-gray-200 text-sm p-1 rounded">Client</code> with our project credentials.</li>
            <li><strong><code className="bg-gray-200 text-sm p-1 rounded">createAccount</code></strong>: Uses <code className="bg-gray-200 text-sm p-1 rounded">account.create()</code> to register a new user. On success, it calls <code className="bg-gray-200 text-sm p-1 rounded">login()</code> to immediately create a session.</li>
            <li><strong><code className="bg-gray-200 text-sm p-1 rounded">login</code></strong>: Uses <code className="bg-gray-200 text-sm p-1 rounded">account.createEmailPasswordSession()</code> to authenticate the user.</li>
            <li><strong><code className="bg-gray-200 text-sm p-1 rounded">getCurrentUser</code></strong>: Uses <code className="bg-gray-200 text-sm p-1 rounded">account.get()</code> to retrieve the currently logged-in user. This is key for session persistence.</li>
            <li><strong><code className="bg-gray-200 text-sm p-1 rounded">logout</code></strong>: Uses <code className="bg-gray-200 text-sm p-1 rounded">account.deleteSessions()</code> to securely end the user's session.</li>
        </ul>

        {/* --- Other Sections Would Follow The Same Pattern --- */}

      </article>
    </main>
  );
};

export default AppwriteAuthTutorialBlog;