import type { ProjectData } from "@/types";

export const projectData: ProjectData = {
  "projectId": "29",
  "folder": "29-revhabit-life",
  "appName": "RevHabit Life",
  "domain": "Habit Tracker",
  "heroHeadline": "Build routines that stick",
  "heroSubtitle": "Track your daily habits, build long-lasting streaks, and analyze your personal growth over time.",
  "features": [
    {
      "icon": "CheckCircle2",
      "title": "Daily Checklist",
      "description": "A simple satisfying way to mark off what you've accomplished."
    },
    {
      "icon": "Flame",
      "title": "Streak Counter",
      "description": "Don't break the chain. Watch your consistency grow."
    },
    {
      "icon": "Activity",
      "title": "Progress Analytics",
      "description": "Visualize your success rates over weeks and months."
    },
    {
      "icon": "Target",
      "title": "Goal Setting",
      "description": "Define clear targets and track your journey toward them."
    }
  ],
  "stats": [
    {
      "label": "Current Streak",
      "value": "14 Days",
      "trend": "Active"
    },
    {
      "label": "Completion Rate",
      "value": "85%",
      "trend": "+5%"
    },
    {
      "label": "Active Habits",
      "value": "6",
      "trend": "0"
    },
    {
      "label": "Total Check-ins",
      "value": "342",
      "trend": "+12"
    }
  ],
  "tableColumns": [
    {
      "key": "habit",
      "label": "Habit"
    },
    {
      "key": "category",
      "label": "Category"
    },
    {
      "key": "frequency",
      "label": "Frequency"
    },
    {
      "key": "streak",
      "label": "Streak"
    },
    {
      "key": "best_streak",
      "label": "Best Streak"
    },
    {
      "key": "status",
      "label": "Status"
    }
  ],
  "tableRows": [
    {
      "id": "HAB-001",
      "habit": "Morning Run (3km)",
      "category": "Health",
      "frequency": "Daily",
      "streak": "14",
      "best_streak": "45",
      "status": "Active"
    },
    {
      "id": "HAB-002",
      "habit": "Read 20 Pages",
      "category": "Learning",
      "frequency": "Daily",
      "streak": "5",
      "best_streak": "12",
      "status": "Active"
    },
    {
      "id": "HAB-003",
      "habit": "Drink 2L Water",
      "category": "Health",
      "frequency": "Daily",
      "streak": "28",
      "best_streak": "60",
      "status": "Active"
    },
    {
      "id": "HAB-004",
      "habit": "Learn Spanish",
      "category": "Learning",
      "frequency": "Weekdays",
      "streak": "0",
      "best_streak": "15",
      "status": "Missed"
    },
    {
      "id": "HAB-005",
      "habit": "Meditation (10m)",
      "category": "Mindfulness",
      "frequency": "Daily",
      "streak": "2",
      "best_streak": "8",
      "status": "Active"
    },
    {
      "id": "HAB-006",
      "habit": "Gym Session",
      "category": "Health",
      "frequency": "3x/Week",
      "streak": "0",
      "best_streak": "20",
      "status": "Paused"
    },
    {
      "id": "HAB-007",
      "habit": "No Sugar Fast",
      "category": "Diet",
      "frequency": "Daily",
      "streak": "30",
      "best_streak": "30",
      "status": "Completed"
    },
    {
      "id": "HAB-008",
      "habit": "Write Journal",
      "category": "Mindfulness",
      "frequency": "Daily",
      "streak": "4",
      "best_streak": "10",
      "status": "Active"
    }
  ],
  "statuses": [
    "Active",
    "Paused",
    "Completed",
    "Missed"
  ],
  "ctaHeadline": "Transform your daily routine",
  "ctaSubtitle": "Start tracking your habits today and become the person you want to be.",
  "ctaButtonText": "Add New Habit",
  "readmeDescription": "A personal habit tracker to log daily routines, maintain streaks, and monitor health goals.",
  "readmeFeaturesList": [
    "Daily streak counter",
    "Habit categorization",
    "Progress analytics",
    "Light, encouraging UI"
  ],
  "theme": {
    "heroLayout": "left",
    "navStyle": "gradient",
    "cardStyle": "accent",
    "primary": "#14b8a6",
    "secondary": "#2dd4bf",
    "accent": "#f0fdfa",
    "background": "#ffffff",
    "text": "#134e4a",
    "heroGradient": "linear-gradient(135deg, rgba(20, 184, 166, 0.98) 0%, rgba(45, 212, 191, 0.88) 100%)",
    "heroGlow": "radial-gradient(circle at 15% 15%, rgba(45, 212, 191, 0.36) 0%, transparent 42%)",
    "heroEdge": "radial-gradient(circle at 90% 10%, rgba(240, 253, 250, 0.14) 0%, transparent 28%)",
    "surface": "rgba(20, 184, 166, 0.05)",
    "surfaceStrong": "rgba(20, 184, 166, 0.08)",
    "border": "rgba(20, 184, 166, 0.12)",
    "borderStrong": "rgba(20, 184, 166, 0.22)",
    "softText": "rgba(19, 78, 74, 0.72)",
    "primarySoft": "rgba(20, 184, 166, 0.12)",
    "secondarySoft": "rgba(45, 212, 191, 0.12)",
    "secondaryStrong": "rgba(45, 212, 191, 0.18)",
    "accentSoft": "rgba(240, 253, 250, 0.8)"
  }
};
