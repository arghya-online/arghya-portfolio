import React from "react";

export default function WhatIsNodeJs() {
  return (
    <article className="max-w-3xl mx-auto py-12 px-2 text-white bg-black font-sans">
      <h1 className="text-4xl font-bold mb-6">What is Nodejs and How it Works</h1>

      <p className="text-xl text-gray-400 mb-8">
        If you have ever wondered how people build backend servers with JavaScript the answer is usually Nodejs. It sounds fancy but it is actually a very practical tool that changed how web development works. Let us understand what Nodejs really is where it came from and how it runs behind the scenes.
      </p>

      <h2 className="text-2xl font-semibold mb-4">So what exactly is Nodejs</h2>
      <p className="text-gray-300 mb-6">
        Nodejs is not a programming language or a framework. It is simply a runtime environment that lets you run JavaScript outside the browser. Normally JavaScript only runs inside web browsers like Chrome or Firefox. But Nodejs allows that same JavaScript code to run directly on your computer or a server.
      </p>
      <p className="text-gray-300 mb-6">
        Think of it like this. The browser has a JavaScript engine called V8 which executes your code inside the browser window. Nodejs took that same V8 engine and made it run independently. That means you can now use JavaScript to create not only websites but also backend servers command line tools APIs and even desktop or mobile apps.
      </p>

      <h2 className="text-2xl font-semibold mb-4">How Nodejs came to be</h2>
      <p className="text-gray-300 mb-6">
        The story starts with a developer named Ryan Dahl back in 2009. At that time web servers mostly worked using languages like PHP Java or Python. They were good but they had one big problem they struggled when many requests came in at once.
      </p>
      <img src="https://i.ytimg.com/vi/M3BM9TB-8yA/maxresdefault.jpg" alt="ryandahl" className="mb-6 shadow-lg" />

      <p className="text-gray-300 mb-6">
        Ryan wanted something faster and more event driven. He noticed that browsers were good at handling many events at once like clicks scrolls or network calls. He thought why not use JavaScript which is already event driven to build servers that can handle many requests easily. That is how Nodejs was born.
      </p>

      <p className="text-gray-300 mb-6">
        The first version of Nodejs came out in 2009 built on top of Chrome’s V8 engine. It was fast lightweight and worked in a completely different way from traditional backend systems. Developers loved it because they could now use one language JavaScript for both frontend and backend.
      </p>

      <h2 className="text-2xl font-semibold mb-4">How Nodejs actually works</h2>
      <p className="text-gray-300 mb-6">
        To understand Nodejs you need to know how it handles requests. In most backend languages every request creates a new thread which uses memory and slows things down when there are many requests. Nodejs takes a different path. It uses a single thread that manages everything through an event loop.
      </p>

      <p className="text-gray-300 mb-6">
        The event loop is the secret sauce. It keeps listening for events like new requests or completed tasks. When a request comes in Nodejs does not block the thread waiting for something to finish. Instead it delegates that task to the system continues to the next job and comes back when the previous one is done. This makes it super efficient especially for IO tasks like reading files or connecting to databases.
      </p>

      <p className="text-gray-300 mb-6">
        You can imagine Nodejs as a restaurant with one waiter who never stops. The waiter takes an order sends it to the kitchen and immediately moves to the next table. When the kitchen finishes a dish the waiter delivers it. That is how Nodejs handles requests non blocking and asynchronous.
      </p>

      <h2 className="text-2xl font-semibold mb-4">The key parts behind Nodejs</h2>
      <p className="text-gray-300 mb-6">
        Nodejs is built on several main components. The first is the V8 engine which executes JavaScript code at lightning speed. Then comes the libuv library which handles all the asynchronous operations like file system access networking and the event loop.
      </p>

      <p className="text-gray-300 mb-6">
        On top of that Nodejs provides a bunch of built in modules such as http fs and path. These modules let you build servers read or write files and handle system paths without installing anything extra. You can also add thousands of community packages using npm which is Node’s package manager and one of the biggest software ecosystems today.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Why developers love Nodejs</h2>
      <p className="text-gray-300 mb-6">
        Nodejs became popular because it is fast lightweight and simple for people who already know JavaScript. You can easily build APIs chat apps streaming services and much more without worrying too much about complex multithreading.
      </p>

      <p className="text-gray-300 mb-6">
        It also fits perfectly in the modern full stack development workflow. A developer can use React or Vue for the frontend and Nodejs with Express for the backend all in the same language. That makes switching between the two sides of a project way easier.
      </p>

      <p className="text-gray-300 mb-6">
        Another reason is npm. With millions of ready made packages you can find a library for almost anything you need authentication file uploads database connections you name it.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Where Nodejs shines</h2>
      <p className="text-gray-300 mb-6">
        Nodejs works best when your app needs to handle lots of connections that do not require heavy CPU processing. Examples include chat apps online games streaming platforms or APIs that serve many users at once. Because it is event driven it can handle many simultaneous users efficiently without breaking a sweat.
      </p>

      <p className="text-gray-300 mb-6">
        However Nodejs is not ideal for CPU heavy work like complex calculations image processing or machine learning. Since it runs on a single thread such tasks can block the event loop and slow everything else down. Still for real time and fast IO operations Nodejs is one of the best choices out there.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Final thoughts</h2>
      <p className="text-gray-300 mb-6">
        Nodejs started as an experiment to make web servers faster and ended up changing how backend development works. It bridged the gap between frontend and backend by bringing JavaScript to both sides. Today it powers everything from small hobby projects to large scale apps like Netflix LinkedIn and PayPal.
      </p>

      <p className="text-gray-300 mb-6">
        If you are starting backend development and already know JavaScript Nodejs is the perfect place to begin. It is fast beginner friendly and has a massive community to help you learn and build.
      </p>

      <p className="mt-8 p-4 border border-yellow-600 text-lg bg-black text-white font-medium">
        So if someone asks what Nodejs is you can say it is what makes JavaScript run outside the browser and turns it into a powerful tool for building servers and modern web apps.
      </p>
    </article>
  );
}
