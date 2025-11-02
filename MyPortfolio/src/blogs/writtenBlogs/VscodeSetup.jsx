import React from 'react';

const VscodeSetupBlog = () => (
  <div className="min-h-screen bg-black text-white font-sans">
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
        Set Up VS Code for C++ Like a Pro (But Easy)
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        Here’s a super simple guide to get VS Code ready for C++ DSA and competitive programming. No boring setup talk, just what you actually need.
      </p>

      <p className="leading-relaxed text-gray-300 mb-6">
        If you’ve just started coding in C++ and want to dive into DSA or competitive programming, setting up VS Code properly can save you a ton of time and pain. It’s lightweight, fast, and you can tweak it however you want.
      </p>
      <p className="leading-relaxed text-gray-300 mb-10">
        We’ll go from zero to full setup, compiler, extensions, file setup, debugging,  everything you need to just code and chill. Let’s go.
      </p>

      <hr className="border-gray-700 mb-10" />

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Download VS Code</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        First up, grab VS Code from the official site: 
        <a href="https://code.visualstudio.com" className="text-yellow-400 underline hover:text-yellow-300 transition duration-150">code.visualstudio.com</a>.
      </p>
      <p className="leading-relaxed text-gray-300 mb-4">
        After installing, take a quick look around ,the main editor, terminal below, and the extensions tab on the left. That’s basically where you’ll live.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Install Your C++ Compiler</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        You’ll need a compiler so your code can actually run.
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 pl-5">
        <li>On Windows: install <span className="font-medium text-yellow-400">MinGW</span> or <span className="font-medium text-yellow-400">TDM-GCC</span>. Don’t forget to check “Add to PATH” while installing.</li>
        <li>On macOS: just open the terminal and type this:</li>
      </ul>
      <pre className="bg-gray-800 p-4 mb-4 overflow-x-auto text-sm shadow-inner">
        <code className="text-green-400 select-all">xcode-select --install</code>
      </pre>
      <p className="leading-relaxed text-gray-300 mb-4">
        To make sure it’s working, open your terminal and type <code>g++ --version</code>. If you see a version number, you’re good to go.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Must-Have VS Code Extensions</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        Extensions make VS Code awesome. Search and install these three:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-3 mb-4 pl-5">
        <li><b className="text-yellow-400">C/C++ by Microsoft:</b> gives you code suggestions, highlights, and debugging.</li>
        <li><b className="text-yellow-400">Code Runner:</b> lets you run your code in one click.</li>
        <li><b className="text-yellow-400">Competitive Programming Helper (CPH):</b> helps you test your code with sample inputs quickly.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Set Up Build & Run</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        We want VS Code to know how to compile your C++ file automatically.
      </p>
      <p className="leading-relaxed text-gray-300 mb-4">
        Go to <span className="font-medium text-yellow-400">Terminal &gt; Configure Default Build Task</span> and choose the C++ option. It creates a <code>tasks.json</code> file. Use this setup:
      </p>

      <pre className="bg-gray-800 p-4 mb-4 overflow-x-auto text-sm shadow-inner">
        <code className="text-white">
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

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Input and Output Files</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        In CP, you usually take input from a file and print output to another. Create two files in your folder: <code className="text-yellow-400">input.txt</code> and <code className="text-yellow-400">output.txt</code>.
      </p>
      <p className="leading-relaxed text-gray-300 mb-4">
        Then, add this snippet at the top of your main function:
      </p>

      <pre className="bg-gray-800 p-4 mb-4 overflow-x-auto text-sm shadow-inner">
        <code className="text-cyan-400">
{`#ifndef ONLINE_JUDGE
freopen("input.txt", "r", stdin);
freopen("output.txt", "w", stdout);
#endif`}
        </code>
      </pre>
      <p className="leading-relaxed text-gray-300 mb-4 text-sm italic">
        This makes it use those files when running locally, but ignore them when submitting online.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Debug Like a Boss</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        Go to <span className="font-medium text-yellow-400">Run &gt; Add Configuration... &gt; C++ (GDB)</span>. It’ll create a <code>launch.json</code> file. Set breakpoints by clicking next to line numbers and press F5 to debug step by step.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Keyboard Shortcuts</h2>
      <p className="leading-relaxed text-gray-300 mb-4">
        If you love speed, learn these:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 pl-5">
        <li>Run Code: <kbd className="bg-gray-700 text-yellow-400 px-2 py-0.5 text-xs font-mono shadow-md">Ctrl + Alt + N</kbd></li>
        <li>Build/Compile: <kbd className="bg-gray-700 text-yellow-400 px-2 py-0.5 text-xs font-mono shadow-md">Ctrl + Shift + B</kbd></li>
        <li>Debug: <kbd className="bg-gray-700 text-yellow-400 px-2 py-0.5 text-xs font-mono shadow-md">F5</kbd></li>
        <li>Open/Close Terminal: <kbd className="bg-gray-700 text-yellow-400 px-2 py-0.5 text-xs font-mono shadow-md">Ctrl + `</kbd></li>
      </ul>

      <p className="leading-relaxed text-white0 mt-10 p-4 border border-yellow-600 bg-black text-lg font-medium">
        Once you’ve set everything up, you can stop worrying about configs and just focus on solving problems. Have fun coding!
      </p>
    </article>
  </div>
);

export default VscodeSetupBlog;
