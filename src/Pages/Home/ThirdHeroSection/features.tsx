import { FiCalendar, FiBell, FiCreditCard, FiUsers, FiTrendingUp, FiCheckCircle, FiSmartphone, FiFileText } from "react-icons/fi";

export const features = [
  {
    title: "יומן תורים אוטומטי 24/7",
    description: "לקוחות קובעים תור לבד – גם בשלוש בלילה. בלי שיחות, בלי הודעות, בלי טעויות.",
    icon: <FiCalendar className="group-hover/feature:text-red-500" />,
    hoverColor: "group-hover/feature:bg-red-500",
  },
  {
    title: "תזכורות ואישורי הגעה אוטומטיים",
    description: "שליחת תזכורת ואישור תור ב-WhatsApp מוריד הברזות למינימום. הכל קורה אוטומטית.",
    icon: <FiBell className="group-hover/feature:text-orange-500" />,
    hoverColor: "group-hover/feature:bg-orange-500",
  },
  {
    title: "קבלת תשלום ישירות מהיומן",
    description: "לקוח שילם – בלחיצת כפתור. מזומן, ביט, אשראי – עם קבלה אוטומטית ודוח חודשי.",
    icon: <FiCreditCard className="group-hover/feature:text-yellow-500" />,
    hoverColor: "group-hover/feature:bg-yellow-500",
  },
  {
    title: "ניהול עובדים ותורים ביומן אחד",
    description: "כל הספרים והעובדים ביומן אחד – בלי כפילויות, בלי טעויות, ועם שליטה מלאה.",
    icon: <FiUsers className="group-hover/feature:text-green-500" />,
    hoverColor: "group-hover/feature:bg-green-500",
  },
  {
    title: "שיווק לעשרות אלפי לקוחות",
    description: "העסק שלך מופיע באפליקציית החיפוש – עם פרסום אקטיבי ללקוחות באזור שלך.",
    icon: <FiTrendingUp className="group-hover/feature:text-teal-500" />,
    hoverColor: "group-hover/feature:bg-teal-500",
  },
  {
    title: "ללא צורך בכרטיס אשראי",
    description: "אין התחייבות, אין התחכמויות. מתחילים עם שבועיים חינם – בלי לשלם כלום מראש.",
    icon: <FiCheckCircle className="group-hover/feature:text-blue-500" />,
    hoverColor: "group-hover/feature:bg-blue-500",
  },
  {
    title: "ממשק פשוט שגם ההורים שלך יבינו",
    description: "עיצוב נקי, בעברית מלאה, קל לשימוש – גם למי שמעולם לא עבד עם מערכת דיגיטלית.",
    icon: <FiSmartphone className="group-hover/feature:text-indigo-500" />,
    hoverColor: "group-hover/feature:bg-indigo-500",
  },
  {
    title: "דוחות אוטומטיים לרואה החשבון",
    description: "הכנסות, תשלומים, קבלות – הכל מסודר בלחיצה. סוף לעבודה עם טבלאות וקלסרים.",
    icon: <FiFileText className="group-hover/feature:text-purple-500" />,
    hoverColor: "group-hover/feature:bg-purple-500",
  },
];
