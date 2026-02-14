export type ProjectCategory = "all" | "web" | "iot" | "mobile";

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  images: string[];
  github: string;
  demo: string;
  category: ProjectCategory;
  features: string[];
}

export const projects: Project[] = [
  // Web Projects (6)
  {
    title: "Split Bill with React",
    description:
      "Split Bill is a modern web application built with React.js (Vite) and Tailwind CSS to simplify group expense management by automatically calculating each member’s share",
    fullDescription:
      "Split Bill is a modern web application built with React.js (Vite) and Tailwind CSS to simplify group expense management by automatically calculating each member’s share. Users can add members, input items with prices and quantities, assign items to specific people, and apply additional charges such as tax, service fees, discounts, or tips, with an optional rounding feature for cleaner totals. Powered by React’s state management, all updates are reflected instantly without page refresh, and results are displayed in a clear summary panel with a share-ready expense recap. Its responsive design ensures seamless use across desktop, tablet, and mobile devices.",
    tags: ["React", "Tailwind CSS", "Web Development"],
    images: ["/Web/project1.webp", "/Web/project1-2.webp"],
    github: "https://github.com/Dfaalt/SplitBill",
    demo: "https://split-bill-d.vercel.app/",
    category: "web",
    features: [
      "Payment Gateway Integration",
      "Real-time Inventory",
      "Admin Dashboard",
      "Email Notifications",
    ],
  },
  {
    title: "Movies Website with React",
    description:
      "DFlicks is a movie information website built with React JS and the TMDB API, featuring a responsive Bootstrap-based interface",
    fullDescription:
      "DFlicks is a movie information website built with React JS and the TMDB API, featuring a responsive Bootstrap-based interface. Users can browse popular movies, search by title with real-time results, and view detailed pages containing comprehensive information such as release date, rating, duration, genres, synopsis, production companies, trailers via YouTube integration, and cast & crew. The application also uses loading indicators to enhance user experience, providing a smooth, interactive, and informative platform for discovering movies.",
    tags: ["React", "Movie API", "Web Development"],
    images: ["/Web/project2.webp", "/Web/project2-1.webp"],
    github: "https://github.com/Dfaalt/DFlicks",
    demo: "https://dflicks.vercel.app/",
    category: "web",
    features: [
      "Real-time Collaboration",
      "Drag & Drop",
      "Time Tracking",
      "File Attachments",
    ],
  },
  {
    title: "MoodTunes AI Website with React",
    description:
      "MoodTunes is a web application built with React.js (Vite), Bootstrap, and Spotify API that recommends music based on the user’s mood using a CNN model for real-time facial emotion detection via webcam",
    fullDescription:
      "MoodTunes is a web application built with React.js (Vite), Bootstrap, and Spotify API that recommends music based on the user’s mood using a CNN model for real-time facial emotion detection via webcam. The app analyzes facial expressions and instantly generates personalized Spotify playlists displayed in an interactive card layout, allowing users to play music directly. With responsive design and dynamic state management, MoodTunes provides a seamless, fast, and engaging experience across desktop, tablet, and mobile devices.",
    tags: ["React", "Machine Learning", "Web Development"],
    images: ["/Web/project3.webp", "/Web/project3-1.webp"],
    github: "https://github.com/Dfaalt/MoodTunes",
    demo: "https://moodtunes-app.vercel.app/",
    category: "web",
    features: [
      "GPT-4 Integration",
      "Content Templates",
      "SEO Optimization",
      "Multi-language",
    ],
  },
  {
    title: "Image Converter with React",
    description:
      "Dfaalt Convert is a privacy-focused image conversion web application built with React.js (Vite), Tailwind CSS v4, and Supabase Authentication, allowing users to convert images between formats such as PNG, JPG, WebP, ICO, and BMP directly in the browser.",
    fullDescription:
      "Dfaalt Convert is a privacy-focused image conversion web application built with React.js (Vite), Tailwind CSS v4, and Supabase Authentication, allowing users to convert images between formats such as PNG, JPG, WebP, ICO, and BMP directly in the browser. It features drag-and-drop upload, adjustable quality settings, real-time preview, and fully client-side processing using the HTML5 Canvas API to ensure speed and data privacy. With secure authentication, responsive design, and efficient state management using React Hooks, the app delivers a fast, modern, and professional image conversion experience across all devices.",
    tags: ["React", "Tailwind CSS", "Web Development"],
    images: ["/Web/project4.webp", "/Web/project4-1.webp"],
    github: "https://github.com/Dfaalt/ImageConverter",
    demo: "https://image-converter-d.vercel.app/",
    category: "web",
    features: [
      "Smooth Animations",
      "Dark/Light Mode",
      "Contact Form",
      "Responsive Design",
    ],
  },
  {
    title: "Code Compiler with React",
    description:
      "Dfaalt Code Compiler is a modern web-based code editor built with React.js (Vite), TypeScript, Tailwind CSS v4, and Monaco Editor, enabling users to write, execute, and preview code directly in the browser.",
    fullDescription:
      "Dfaalt Code Compiler is a modern web-based code editor built with React.js (Vite), TypeScript, Tailwind CSS v4, and Monaco Editor, enabling users to write, execute, and preview code directly in the browser. It supports multiple languages including JavaScript, TypeScript, Python, C++, Java, and HTML/CSS/JS, with instant execution for JavaScript and TypeScript and live preview for web development. All processing runs client-side to ensure privacy, while features like keyboard shortcuts, file download, responsive preview modes, and modular architecture provide a fast, scalable, and professional coding experience.",
    tags: ["React", "TypeScript", "Web Development"],
    images: ["/Web/project6.webp", "/Web/project6-1.webp"],
    github: "https://github.com/Dfaalt/CodeCompiler",
    demo: "https://code-compiler-d.vercel.app/",
    category: "web",
    features: [
      "Markdown Editor",
      "Comment System",
      "SEO Optimization",
      "RSS Feed",
    ],
  },
  {
    title: "AI Gesture Transfer File with React",
    description:
      "HandSnap is an AI-powered web application developed as an undergraduate thesis at Yogyakarta State University, built with React.js (Vite), TensorFlow.js, MediaPipe Hands, and a Flask REST API to enable real-time gesture-based file transfer.",
    fullDescription:
      "HandSnap is an AI-powered web application developed as an undergraduate thesis at Yogyakarta State University, built with React.js (Vite), TensorFlow.js, MediaPipe Hands, and a Flask REST API to enable real-time gesture-based file transfer. The system uses an LSTM model trained on 1,800 gesture sequences with 21 hand landmarks to recognize gestures and trigger commands such as automatic screenshot capture and cross-device file transfer. With real-time processing, performance evaluation using FPS, latency, and transfer speed metrics, and a fully web-based architecture, HandSnap delivers an intuitive, cross-platform human–computer interaction experience inspired by gesture-based file sharing technologies.",
    tags: ["React", "TensorFlow", "Flask", "Web Development"],
    images: [
      "/Web/project7.webp",
      "/Web/project7-1.webp",
      "/Web/project7-2.webp",
      "/Web/project7-3.webp",
      "/Web/project7-4.webp",
    ],
    github: "https://github.com/Dfaalt/HandSnap",
    demo: "https://hand-snap.vercel.app/",
    category: "web",
    features: [
      "Interactive Charts",
      "Real-time Updates",
      "Data Export",
      "Role-based Access",
    ],
  },
  // IoT Projects (3)
  {
    title: "RFID Tag Monitoring Based Website",
    description:
      "RFID Tag Monitoring is a web-based system that uses ESP32 NodeMCU and RFID-RC522 to automatically read and transmit RFID card IDs to a local server via WiFi.",
    fullDescription:
      "RFID Tag Monitoring is a web-based system that uses ESP32 NodeMCU and RFID-RC522 to automatically read and transmit RFID card IDs to a local server via WiFi. The data is stored in a XAMPP-managed database and displayed through a web interface with REST API support for creating, updating, retrieving, and deleting records. With real-time monitoring, visual and audio confirmation, and seamless hardware–software integration, the system provides an efficient solution for RFID-based attendance and tag management.",
    tags: ["ESP32", "RFID", "REST API"],
    images: ["IoT/RFID1.webp", "IoT/RFID2.webp", "IoT/RFID3.webp"],
    github: "#",
    demo: "#",
    category: "iot",
    features: [
      "Remote Control",
      "Automation Rules",
      "Voice Assistant",
      "Energy Tracking",
    ],
  },
  {
    title: "DC Motor Speed Control with Microcontroller",
    description:
      "DC Motor Speed Control is a microcontroller-based project developed using Arduino Uno and a DC servo motor trainer to implement both open-loop and closed-loop speed control with a PID algorithm.",
    fullDescription:
      "DC Motor Speed Control is a microcontroller-based project developed using Arduino Uno and a DC servo motor trainer to implement both open-loop and closed-loop speed control with a PID algorithm. In the open-loop setup, motor speed is adjusted manually via PWM and results in unstable performance due to the absence of feedback. In contrast, the closed-loop configuration uses a tachogenerator sensor to provide real-time speed feedback, enabling the PID controller to automatically regulate PWM output and significantly improve stability. The system integrates an I2C LCD, motor driver, and keypad for parameter tuning, with performance analysis conducted through the Arduino Serial Plotter, demonstrating the practical effectiveness of PID control in embedded automation systems.",
    tags: ["Arduino", "PID", "Control Systems"],
    images: ["IoT/DCMotor1.webp", "IoT/DCMotor2.webp", "IoT/DCMotor3.webp"],
    github: "#",
    demo: "#",
    category: "iot",
    features: [
      "Auto Watering",
      "Soil Monitoring",
      "Mobile App",
      "Health Alerts",
    ],
  },
  {
    title: "Vehicle Speed Monitoring and Overspeed Warning System Based IoT",
    description:
      "Vehicle Speed Monitoring and Overspeed Warning System is an IoT-based solution developed using ESP32, ThingSpeak, and a Kodular mobile app to monitor vehicle speed in real time and provide overspeed alerts.",
    fullDescription:
      "Vehicle Speed Monitoring and Overspeed Warning System is an IoT-based solution developed using ESP32, ThingSpeak, and a Kodular mobile app to monitor vehicle speed in real time and provide overspeed alerts. The system uses dual IR sensors to calculate speed, displays data on an I2C LCD, triggers a buzzer warning when limits are exceeded, and captures images during violations. Speed data is transmitted to the cloud for remote monitoring via smartphone, enabling effective traffic monitoring, driver awareness, and data-driven analysis for intelligent transportation systems.",
    tags: ["ESP32", "Microcontroller", "Alert System"],
    images: [
      "IoT/overspeed1.webp",
      "IoT/overspeed2.webp",
      "IoT/overspeed3.webp",
    ],
    github: "#",
    demo: "#",
    category: "iot",
    features: [
      "Real-time Monitoring",
      "Overspeed Alerts",
      "GPS Tracking",
      "Data Logging",
    ],
  },
  // Mobile Projects (3)
  {
    title: "Culinaryndo Cuisine Recognition App",
    description:
      "Culinaryndo is an Android application developed during the Bangkit Academy program led by Google, Tokopedia, Gojek, and Traveloka, designed to identify Indonesian cuisine using a CNN model based on MobileNet trained on 9,000 images across 10 food classes.",
    fullDescription:
      "Culinaryndo is an Android application developed during the Bangkit Academy program led by Google, Tokopedia, Gojek, and Traveloka, designed to identify Indonesian cuisine using a CNN model based on MobileNet trained on 9,000 images across 10 food classes. The app provides detailed information such as origin, ingredients, and nutritional content, while an Express.js backend deployed on Google Cloud Platform handles API services and cloud-based machine learning integration. With added nearby restaurant recommendations, Culinaryndo combines mobile development, machine learning, and cloud infrastructure to promote Indonesia’s culinary heritage and support informed, healthy food choices.",
    tags: ["Express Js", "AI/ML", "Cloud Computing"],

    images: [
      "Mobile/culinaryndo.webp",
      "Mobile/culinaryndo1.webp",
      "Mobile/culinaryndo2.webp",
      "Mobile/culinaryndo3.webp",
      "Mobile/culinaryndo4.webp",
      "Mobile/culinaryndo5.webp",
      "Mobile/culinaryndo6.webp",
      "Mobile/culinaryndo7.webp",
      "Mobile/culinaryndo8.webp",
      "Mobile/culinaryndo9.webp",
      "Mobile/culinaryndo10.webp",
      "Mobile/culinaryndo11.webp",
      "Mobile/culinaryndo12.webp",
    ],
    github: "https://github.com/Dfaalt/API-Culinaryndo",
    demo: "#",
    category: "mobile",
    features: [
      "Image Recognition",
      "Cuisine Categorization",
      "Nutritional Information",
      "Recipe Suggestions",
    ],
  },
  // {
  //   title: "Food Delivery App",
  //   description:
  //     "Food ordering app with real-time tracking, digital payment, and rating system features.",
  //   fullDescription:
  //     "A full-featured food delivery platform. Browse restaurants, customize orders, and track delivery in real-time on a map. Multiple payment options including digital wallets. Restaurant and driver rating system, order history, favorites, and promotional code support.",
  //   tags: ["React Native", "Node.js", "Maps API", "Stripe"],
  //   images: [
  //     "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=500&fit=crop",
  //   ],
  //   github: "#",
  //   demo: "#",
  //   category: "mobile",
  //   features: [
  //     "Real-time Tracking",
  //     "Digital Payment",
  //     "Rating System",
  //     "Order History",
  //   ],
  // },
  // {
  //   title: "Social Media App",
  //   description:
  //     "Social media app with stories, chat, push notifications, and AI-based personalized feed.",
  //   fullDescription:
  //     "A modern social networking platform. Share posts, stories, and reels. Real-time chat with media sharing. AI-powered feed personalization, content moderation, and trending topics. Push notifications, privacy controls, and comprehensive profile customization.",
  //   tags: ["Flutter", "Supabase", "FCM", "AI/ML"],
  //   images: [
  //     "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop",
  //   ],
  //   github: "#",
  //   demo: "#",
  //   category: "mobile",
  //   features: [
  //     "Stories & Reels",
  //     "Real-time Chat",
  //     "AI Feed",
  //     "Privacy Controls",
  //   ],
  // },
];

export const categories = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "iot", label: "IoT" },
  { value: "mobile", label: "Mobile" },
];
