import React from "react";

export default function VscodeSetup() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        How to Set Up VS Code for DSA and CP (C++ Users)
      </h1>
      <p className="text-gray-400 mb-8">
        A complete, beginner-friendly guide to setting up Visual Studio Code for
        competitive programming and data structures practice in C++.
      </p>

      <p className="leading-relaxed text-gray-300 mb-4">
        If you’re a C++ programmer diving into DSA (Data Structures and
        Algorithms) or competitive programming, the right environment setup can
        make or break your productivity. VS Code is lightweight, fast, and
        highly customizable. In this guide, we’ll set up everything — compiler,
        extensions, input/output configuration, and debugging.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Install VS Code</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        Download Visual Studio Code from the official website (
        <a
          href="https://code.visualstudio.com"
          className="text-blue-400 underline"
        >
          code.visualstudio.com
        </a>
        ). Once installed, open it and familiarize yourself with the UI. You’ll
        mainly work with the editor window, terminal, and extensions panel.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Install the C++ Compiler
      </h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        On Windows, install MinGW or TDM-GCC. During installation, ensure the
        “Add to PATH” option is checked.  
        On macOS, install Xcode Command Line Tools using:
      </p>

      <pre className="bg-gray-900 p-4 rounded mb-4">
        <code> xcode-select --install </code>
      </pre>

      <p className="leading-relaxed text-gray-300 mb-4">
        Verify the installation by running <code>g++ --version</code> in your
        terminal. You should see your compiler version printed.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Install Essential Extensions
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
        <li>
          <b>C/C++ by Microsoft:</b> Adds IntelliSense, debugging, and syntax
          highlighting.
        </li>
        <li>
          <b>Code Runner:</b> Lets you run code directly with one click.
        </li>
        <li>
          <b>Competitive Programming Helper:</b> Automates I/O testing.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Configure Build & Run Tasks
      </h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        In VS Code, go to <b>Terminal → Configure Default Build Task</b> → C++.
        This creates a <code>tasks.json</code> file inside a
        <code>.vscode</code> folder. You can edit it to compile and run your C++
        file automatically.
      </p>

      <pre className="bg-gray-900 p-4 rounded mb-4">
        <code>
          {`{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "C++ Run",
      "type": "shell",
      "command": "g++",
      "args": ["-std=c++17", "\${file}", "-o", "\${fileDirname}/\${fileBasenameNoExtension}"],
      "group": { "kind": "build", "isDefault": true },
      "problemMatcher": ["$gcc"]
    }
  ]
}`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Setup Custom Input/Output
      </h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        Competitive programming often requires reading input from a file and
        printing to another. Create <code>input.txt</code> and
        <code>output.txt</code> in your project folder. Then, modify your C++
        main function to use file redirection when testing locally.
      </p>

      <pre className="bg-gray-900 p-4 rounded mb-4">
        <code>
{`#ifndef ONLINE_JUDGE
freopen("input.txt", "r", stdin);
freopen("output.txt", "w", stdout);
#endif`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Debugging Like a Pro
      </h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        Open <b>Run → Add Configuration → C++ (GDB)</b>. This generates a
        <code>launch.json</code> file. Set breakpoints, and press <b>F5</b> to
        debug step-by-step.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        7. Keyboard Shortcuts for Speed
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
        <li>Run Code: <kbd>Ctrl + Alt + N</kbd></li>
        <li>Build: <kbd>Ctrl + Shift + B</kbd></li>
        <li>Debug: <kbd>F5</kbd></li>
        <li>Terminal: <kbd>Ctrl + `</kbd></li>
      </ul>

      <p className="leading-relaxed text-gray-300 mt-8">
        Once your setup is complete, coding becomes effortless. You’ll focus
        purely on solving problems rather than fixing configurations. A clean
        setup not only saves time but also builds discipline in your workflow.
      </p>
    </article>
  );
}
