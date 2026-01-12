"use client";

import { useState, useRef, useEffect } from "react";
import { fileSystem, FileSystemItem } from "@/data/file-system";

interface CommandOutput {
  command: string;
  output: string;
  type: "success" | "error" | "info";
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [currentPath, setCurrentPath] = useState("~");
  const [commandHistory, setCommandHistory] = useState<CommandOutput[]>([]);
  const [commandHistoryList, setCommandHistoryList] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-focus input when component mounts
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // Scroll to bottom when new output is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const parseCommand = (cmd: string): string[] => {
    return cmd
      .trim()
      .split(" ")
      .filter((arg) => arg.length > 0);
  };

  const getCurrentDirectoryItems = (): FileSystemItem[] => {
    if (currentPath === "~") {
      return fileSystem;
    } else if (currentPath === "~/projects") {
      const projectsDir = fileSystem.find((item) => item.name === "projects");
      return projectsDir?.children || [];
    } else if (currentPath.startsWith("~/projects/")) {
      const projectName = currentPath.replace("~/projects/", "");
      const projectsDir = fileSystem.find((item) => item.name === "projects");
      const project = projectsDir?.children?.find((item) => item.name === projectName);
      return project?.children || [];
    }
    return [];
  };

  const findFile = (path: string): FileSystemItem | null => {
    const pathParts = path.replace("~/", "").split("/");
    let current: FileSystemItem[] = fileSystem;

    for (const part of pathParts) {
      const found = current.find((item) => item.name === part);
      if (found) {
        if (found.type === "directory") {
          current = found.children || [];
        } else {
          return found;
        }
      } else {
        return null;
      }
    }
    return null;
  };

  const executeCommand = (cmd: string): string => {
    const args = parseCommand(cmd);
    const command = args[0]?.toLowerCase();

    switch (command) {
      case "help":
        return `Available commands:
  help        - Show this help message
  clear       - Clear terminal
  ls          - List directory contents
  pwd         - Print working directory
  cat <file>  - Display file contents
  cd <dir>    - Change directory
  echo        - Display a message
  date        - Show current date and time
  whoami      - Display current user
  
Portfolio commands:
  about       - About me (same as 'cat about.txt')
  projects    - View my projects (same as 'ls projects/')
  skills      - Show my skills (same as 'cat skills.txt')
  contact     - Get in touch (same as 'cat contact.txt')

🎮 Fun commands:
  matrix      - Show matrix rain animation
  fortune     - Get a random developer fortune
  ascii       - Display ASCII art
  starwars    - Play a text adventure
  hack        - "Hacker" simulation
  sudo        - Try to get admin privileges
  
💡 Tips:
  • Use Tab for autocomplete
  • Use ↑↓ for command history
  • Try the Easter egg commands! 😉`;

      case "clear":
        setCommandHistory([]);
        return "";

      case "pwd":
        return currentPath;

      case "echo":
        return args.slice(1).join(" ");

      case "date":
        return new Date().toString();

      case "whoami":
        return "visitor";

      case "ls":
        const items = getCurrentDirectoryItems();
        if (items.length === 0) {
          return currentPath === "~" ? "Directory is empty" : "Directory not found";
        }
        return items
          .map((item) => {
            const icon = item.type === "directory" ? "📁" : "📄";
            return `${icon} ${item.name}${item.type === "directory" ? "/" : ""}`;
          })
          .join("  ");

      case "cat":
        if (!args[1]) {
          return "cat: missing file operand";
        }
        const filePath = args[1].startsWith("/") ? args[1] : `${currentPath}/${args[1]}`;
        const file = findFile(filePath.replace("~/", ""));
        if (!file) {
          return `cat: ${args[1]}: No such file or directory`;
        }
        if (file.type === "directory") {
          return `cat: ${args[1]}: Is a directory`;
        }
        return file.content || "File is empty";

      case "cd":
        if (!args[1]) {
          setCurrentPath("~");
          return "Changed to home directory";
        }
        if (args[1] === "..") {
          setCurrentPath(currentPath === "~" ? "~" : "~");
          return "Changed to parent directory";
        }
        if (args[1] === "projects") {
          setCurrentPath("~/projects");
          return "Changed to projects directory";
        }
        if (args[1].startsWith("projects/")) {
          const projectName = args[1].replace("projects/", "");
          const projectsDir = fileSystem.find((item) => item.name === "projects");
          const project = projectsDir?.children?.find((item) => item.name === projectName);
          if (project) {
            setCurrentPath(`~/projects/${projectName}`);
            return `Changed to ${projectName} directory`;
          }
        }
        return `bash: cd: ${args[1]}: No such directory`;

      case "about":
        const aboutFile = findFile("about.txt");
        return aboutFile?.content || "About information not found";

      case "projects":
        const projectsDir = fileSystem.find((item) => item.name === "projects");
        if (projectsDir?.children) {
          return `📁 Projects Directory:
${projectsDir.children
  .map((project) => {
    const metadata = project.metadata;
    return `  ${project.name}/    - ${metadata?.description || "No description"}`;
  })
  .join("\n")}

Type 'cd projects' to explore or 'cat projects/[project]/README.md' for details`;
        }
        return "Projects directory not found";

      case "skills":
        const skillsFile = findFile("skills.txt");
        return skillsFile?.content || "Skills information not found";

      case "contact":
        const contactFile = findFile("contact.txt");
        return contactFile?.content || "Contact information not found";

      // Easter Egg Commands
      case "matrix":
        setTimeout(() => {
          setCommandHistory((prev) => [
            ...prev,
            {
              command: "matrix",
              output: "🌊 Matrix rain animation would appear here...\n(Imagine green characters falling! 🕹️)",
              type: "info",
            },
          ]);
        }, 500);
        return "Initializing matrix rain...";

      case "fortune":
        const fortunes = [
          "Code is like humor. When you have to explain it, it's bad. - Cory House",
          "First, solve the problem. Then, write the code. - John Johnson",
          "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
          "In order to be irreplaceable, one must always be different. - Coco Chanel",
          "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
          "Knowledge is power. - Francis Bacon",
          "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. - Dan Salomon",
          "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. - Antoine de Saint-Exupery",
          "Code never lies, comments sometimes do. - Ron Jeffries",
          "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
          "There are only two hard things in Computer Science: cache invalidation and naming things. - Phil Karlton",
          "The best way to get a project done faster is to start sooner. - Jim Highsmith",
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
          "Simplicity is the soul of efficiency. - Austin Freeman",
          "Before software can be reusable it first has to be usable. - Ralph Johnson",
        ];
        return `🔮 Developer Fortune:\n\n"${fortunes[Math.floor(Math.random() * fortunes.length)]}"`;

      case "ascii":
        return `
╔═══════════════════════════════════════╗
║  🚀 WELCOME TO BHANU'S TERMINAL 🚀   ║
╚═══════════════════════════════════════╝

    ▄████████ ▄██   ▄   ▄█       ███    █▄  
   ███    ███ ███   ██▄ ███       ███    ███  
   ███    █▀  ███▄▄▄███ ███       ███    ███  
  ▄███▄▄▄      ▀▀▀▀▀▀███ ███       ███    ███  
 ▀▀███▀▀             ███ ███       ███    ███  
   ███    █▄    ▄█    ███ ███       ███    ███  
   ███    ███  ███    ███ ███▌    ▄ ███    ███  
   ██████████   ▀██████▀  █████▄▄██ ████████▀  
                                   ▀         
 
Full Stack Developer | Problem Solver | Tech Enthusiast`;

      case "starwars":
        return `🌌 A long time ago in a codebase far, far away....
  
EPISODE IV
A NEW HOP(E)

It is a period of civil war. Rebel
developers, striking from their hidden
bases, have won their first victory
against the evil Bug Empire.

During the battle, Rebel spies managed
to steal secret plans to the Empire's
ultimate weapon, the DEATH STAR, an
armored space station with enough
power to destroy an entire application.

Pursued by the Empire's sinister agents,
Princess Leia races home aboard her
starship, custodian of the stolen plans
that can save her people and restore
freedom to the galaxy.... of code!

Type 'help' to continue your mission!`;

      case "hack":
        return `🔒 ACCESS DENIED
🔒 ACCESS DENIED  
🔒 ACCESS DENIED

Just kidding! You're already in the system! 😄

This is a portfolio terminal, not a hacking simulator!
But nice try though... your curiosity is appreciated!

Try these instead:
  • matrix   - See some cool animations
  • fortune  - Get developer wisdom
  • ascii     - View ASCII art

Welcome to my creative space! 🎨`;

      case "sudo":
        return `🛡️ [sudo] password for visitor: 
••••••••••
Authentication successful!
  
🎉 You now have admin privileges in this terminal!

Welcome, Superuser! You can now:
  • View all files (cat everything!)
  • Explore all directories (cd anywhere!)
  • Execute all commands (run anything!)

But remember... with great power comes great responsibility! 💪

(Disclaimer: No actual admin privileges were granted. Just for fun! 😉)`;

      default:
        if (!command) return "";
        return `bash: ${command}: command not found. Type 'help' for available commands`;
    }
  };

  const autoComplete = (currentInput: string): string => {
    const commands = [
      "help",
      "clear",
      "ls",
      "pwd",
      "cat",
      "cd",
      "echo",
      "date",
      "whoami",
      "about",
      "projects",
      "skills",
      "contact",
      // Easter egg commands
      "matrix",
      "fortune",
      "ascii",
      "starwars",
      "hack",
      "sudo",
    ];
    const currentItems = getCurrentDirectoryItems();
    const items = [...commands, ...currentItems.map((item) => item.name)];

    const matches = items.filter((item) => item.startsWith(currentInput));
    if (matches.length === 1) {
      return matches[0];
    } else if (matches.length > 1) {
      const commonPrefix = matches.reduce((prefix, item) => {
        let i = 0;
        while (i < prefix.length && i < item.length && prefix[i] === item[i]) {
          i++;
        }
        return prefix.substring(0, i);
      });
      return commonPrefix;
    }
    return currentInput;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      setInput(autoComplete(input));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistoryList.length > 0) {
        const newIndex = historyIndex < commandHistoryList.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistoryList[commandHistoryList.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistoryList[commandHistoryList.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const output = executeCommand(input);

    if (output) {
      setCommandHistory((prev) => [
        ...prev,
        {
          command: input,
          output: output,
          type: output.includes("command not found") || output.includes("No such directory") ? "error" : "success",
        },
      ]);
    }

    setCommandHistoryList((prev) => [...prev, input]);
    setHistoryIndex(-1);
    setInput("");
  };

  const getOutputClass = (type: CommandOutput["type"]) => {
    switch (type) {
      case "error":
        return "text-red-400";
      case "info":
        return "text-blue-400";
      default:
        return "text-green-400";
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-2 sm:p-4 font-mono text-xs sm:text-sm md:text-base">
      <div className="max-w-6xl mx-auto h-screen flex flex-col">
        {/* Terminal Header */}
        <div className="bg-gray-900 border border-gray-700 rounded-t-lg p-2 sm:p-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            <span className="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm truncate">terminal@portfolio</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          className="bg-gray-900 border-x border-b border-gray-700 rounded-b-lg p-2 sm:p-4 flex-1 overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
          style={{ minHeight: "0" }}
        >
          {/* Welcome Message */}
          <div className="mb-4">
            <p className="text-green-400 text-sm sm:text-base">Welcome to Bhanu&apos;s Terminal Portfolio</p>
            <p className="text-gray-400 text-xs">Type &apos;help&apos; to see available commands</p>
          </div>

          {/* Command History */}
          {commandHistory.map((cmd, index) => (
            <div key={index} className="mb-3 sm:mb-4">
              <div className="flex items-start flex-wrap">
                <span className="text-green-400 mr-2 whitespace-nowrap flex-shrink-0">
                  visitor@portfolio:{currentPath}$
                </span>
                <span className="text-gray-300 break-all">{cmd.command}</span>
              </div>
              <pre
                className={`mt-1 whitespace-pre-wrap ${getOutputClass(cmd.type)} text-xs sm:text-sm leading-relaxed`}
                style={{ wordBreak: "break-word" }}
              >
                {cmd.output}
              </pre>
            </div>
          ))}

          {/* Command Input */}
          <form onSubmit={handleSubmit} className="flex items-center flex-wrap">
            <span className="text-green-400 mr-2 whitespace-nowrap flex-shrink-0 text-xs sm:text-sm">
              visitor@portfolio:{currentPath}$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setHistoryIndex(-1);
              }}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-green-400 placeholder-green-600 min-w-0 text-xs sm:text-sm"
              placeholder="Enter command... (Tab: autocomplete, ↑↓: history)"
              autoComplete="off"
              spellCheck="false"
              style={{ WebkitTapHighlightColor: "transparent" }}
            />
          </form>
        </div>

        {/* Mobile Touch Instructions */}
        <div className="mt-2 sm:mt-4 text-center text-gray-500 text-xs">
          <div className="block sm:hidden">Tap terminal to focus</div>
          <div className="hidden sm:block">Type commands to interact</div>
        </div>
      </div>
    </div>
  );
}
