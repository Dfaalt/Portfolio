import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  isTyping?: boolean;
}

interface QuickReply {
  label: string;
  action: string;
  scrollTo?: string;
}

const quickReplies: QuickReply[] = [
  { label: "About Me", action: "about", scrollTo: "about" },
  { label: "My Skills", action: "skills", scrollTo: "skills" },
  { label: "My Projects", action: "projects", scrollTo: "projects" },
  { label: "Download CV", action: "cv" },
  { label: "Contact Info", action: "contact", scrollTo: "contact" },
];

const predefinedResponses: Record<string, string> = {
  about:
    "I'm a passionate full-stack developer with 5+ years of experience in web development, IoT systems, and mobile applications. I love turning complex problems into elegant, user-friendly solutions. Would you like me to scroll you to the About section?",
  skills:
    "I'm proficient in React, TypeScript, Node.js, Python, and various other technologies. I also have experience with IoT, mobile development, and cloud services. Let me show you my skills section!",
  projects:
    "I've worked on 20+ projects including web applications, mobile apps, and IoT systems. Check out my featured projects to see some of my best work!",
  cv: "You can download my CV to learn more about my experience and qualifications. I'll prepare the download for you shortly!",
  contact:
    "I'm currently available for new projects and collaborations! You can reach out through the contact form, and I'll get back to you as soon as possible.",
  greeting:
    "Hello! 👋 I'm your virtual assistant. How can I help you today? Feel free to use the quick replies below or type your own message!",
  default:
    "Thanks for your message! I'm a simple assistant with predefined responses. Try using the quick reply buttons below, or ask me about my skills, projects, or experience!",
};

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    <motion.span
      className="w-2 h-2 rounded-full bg-primary"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
    />
    <motion.span
      className="w-2 h-2 rounded-full bg-primary"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
    />
    <motion.span
      className="w-2 h-2 rounded-full bg-primary"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
    />
  </div>
);

const TypedMessage = ({
  text,
  onComplete,
  onType,
}: {
  text: string;
  onComplete: () => void;
  onType: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
        onType(); // Scroll on each character
      }, 20);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [currentIndex, text, onComplete, onType]);

  return <span>{displayedText}</span>;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: predefinedResponses.greeting, isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState<number | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBotResponse = (action: string, scrollTo?: string) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const responseText =
        predefinedResponses[action] || predefinedResponses.default;
      const newMessageId = Date.now();

      setMessages((prev) => [
        ...prev,
        { id: newMessageId, text: responseText, isBot: true, isTyping: true },
      ]);
      setTypingMessageId(newMessageId);

      if (scrollTo) {
        setTimeout(() => scrollToSection(scrollTo), 500);
      }

      if (action === "cv") {
        setTimeout(() => {
          // Trigger CV download - you can replace this with actual CV URL
          const link = document.createElement("a");
          link.href = "/cv.pdf";
          link.download = "CV.pdf";
          link.click();
        }, 1500);
      }
    }, 1000);
  };

  const handleQuickReply = (reply: QuickReply) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: reply.label, isBot: false },
    ]);
    handleBotResponse(reply.action, reply.scrollTo);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: inputValue, isBot: false },
    ]);
    setInputValue("");

    // Simple keyword matching for custom messages
    const lowerInput = inputValue.toLowerCase();
    let action = "default";

    if (lowerInput.includes("about") || lowerInput.includes("who")) {
      action = "about";
    } else if (lowerInput.includes("skill") || lowerInput.includes("tech")) {
      action = "skills";
    } else if (
      lowerInput.includes("project") ||
      lowerInput.includes("work") ||
      lowerInput.includes("portfolio")
    ) {
      action = "projects";
    } else if (
      lowerInput.includes("cv") ||
      lowerInput.includes("resume") ||
      lowerInput.includes("download")
    ) {
      action = "cv";
    } else if (
      lowerInput.includes("contact") ||
      lowerInput.includes("hire") ||
      lowerInput.includes("email")
    ) {
      action = "contact";
    } else if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey")
    ) {
      action = "greeting";
    }

    const scrollTo = quickReplies.find((r) => r.action === action)?.scrollTo;
    handleBotResponse(action, scrollTo);
  };

  const handleTypingComplete = useCallback(() => {
    setTypingMessageId(null);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Online indicator */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 left-4 sm:left-auto sm:bottom-24 sm:right-6 z-50 sm:w-[380px] max-h-[70vh] sm:max-h-none rounded-2xl shadow-2xl overflow-hidden border border-border bg-card"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="bg-primary p-4 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Bot className="h-5 w-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-primary"></span>
                </div>
                <div>
                  <h3 className="font-semibold">Portfolio Assistant</h3>
                  <p className="text-xs opacity-80">Always online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea
              ref={scrollAreaRef}
              className="h-[250px] sm:h-[300px] p-4"
            >
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-end gap-2 ${message.isBot ? "" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isBot
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {message.isBot ? (
                        <Bot className="h-4 w-4" />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                        message.isBot
                          ? "bg-muted text-foreground rounded-bl-sm"
                          : "bg-primary text-primary-foreground rounded-br-sm"
                      }`}
                    >
                      {message.isBot &&
                      message.isTyping &&
                      typingMessageId === message.id ? (
                        <TypedMessage
                          text={message.text}
                          onComplete={handleTypingComplete}
                          onType={scrollToBottom}
                        />
                      ) : (
                        message.text
                      )}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-end gap-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-muted rounded-2xl rounded-bl-sm">
                      <TypingIndicator />
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Quick Replies */}
            <div className="px-4 py-2 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply.action}
                    variant="outline"
                    size="sm"
                    className="text-xs h-7 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-background">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full h-10 w-10"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
