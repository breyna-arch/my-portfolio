import { VscNoNewline } from "react-icons/vsc";
import project180Image from "../assets/180Picture.png";

export const projects = [
    {
      title: "Zoom Meeting Notes Bot",
      description: "A bot that joins Zoom meetings as a participant, captures the transcript, and generates meeting summaries and action items using AI.",
      tech: ["JavaScript", "Zoom", "OpenAI", "HTML"],
      github: "https://github.com/breyna-arch/Zoom_Meeting_Notes_Project",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
    },
    {
      title: "Stock Predictor Utility",
      description: "A Python utility that predicts stock price movements using machine learning. This tool fetches historical stock data, engineers relevant features, and trains a model to predict future price direction.",
      tech: ["Python", "pandas", "scikit-learn", "yfinance"],
      github: "https://github.com/breyna-arch/Stock-Predictor-Utility",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&q=80"
    },
    {
      title: "JourneyUp",
      description: "JourneyUp is a modern, cross-platform mobile application built with React Native and Expo, designed to help users track and share their e-bike and e-scooter rides. [Still a work in progress]",
      tech: ["JavaScript", "TypeScript", "GCP"],
      github: "https://github.com/breyna-arch/journey-up",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
    },
    {
        title: "Multi Agent System Monitoring",
        description: "A multi-agent system for monitoring system resources, detecting anomalies, and generating AI-powered reports.",
        tech: ["Python", "HTML", "OpenAI"],
        github: "https://github.com/breyna-arch/Multi-Agent-System-Monitoring",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
    },
    {
        title: "SOL Church App",
        description: "This app is a cross-platform mobile application for Sacramento's Spring Of Life Church. This is my senior capstone project at Sacramento State, where I am working with 6 teammates to design and build this app. [Still a work in progress]",
        tech: ["TypeScript", "JavaScript", "Docker", "Jest", "Supabase"],
        github: "https://github.com/Senior-Project-Team-Buildabyte/SOL-Church-App",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80"
    },
    {
      title: "CSC180 Final Project",
      description: "This project is a full-stack web app built for the CSC180 Final Project at Sacramento State. It uses a Python (Flask) backend and a React (Vite) frontend to generate and display AI-created flowcharts. The backend integrates with Google Docs and OpenAI APIs to produce dynamic Mermaid diagrams from user input.",
      tech: ["TypeScript", "JavaScript", "Python", "Flash", "asyncio", "Google API", "OPENAI", "mermaid.js"],
      github: "https://github.com/breyna-arch/CSC180Final",
      demo: "/frontendFinal",
      image: project180Image
    }
  ];
  