import { Input } from "@/components/ui/input";
import { SparklesText } from "@/components/ui/sparkles-text";

const StepThree = () => {
  return (
    <section className="mt-2 flex w-full flex-col items-center justify-center gap-3">
      <h1>קצת על העסק שלך</h1>
      <div className="flex gap-1">
        <p>כדי שנוכל לבנות</p>
        <SparklesText text="עמוד מדהים" />
        <p>לעסק שלך אנחנו צריכים כמה פרטים</p>
      </div>
      <form className="w-1/3">
        <div>
          <Input placeholder="שם העסק"></Input>
        </div>
        <div>
          <Input placeholder="מספר טלפון של העסק"></Input>
        </div>
        <div>
          <Input placeholder="כתובת העסק"></Input>
        </div>
        <div>
          <label htmlFor="previous-calendar-use" className="w-full">
            איזה יומן היה לך עד עכשיו?
          </label>
          <select name="previous-calendar-use" className="w-full">
            <option value="">בחר יומן</option>
            <option value="physical-calendar">יומן פיזי</option>
            <option value="google-calendar">יומן גוגל</option>
            <option value="other-calendar">מערכת אחרת</option>
            <option value="none">אין לי יומן</option>
          </select>
        </div>
        <div>
          <label htmlFor="previous-calendar-use" className="w-full">
            איך שמעת עלינו?
          </label>
          <select name="previous-calendar-use" className="w-full">
            <option value="internet-commercial">פרסומת באינטרנט</option>
            <option value="google-commercial">פרסומת בגוגל</option>
            <option value="facebook-commercial">פרסומת בפייסבוק</option>
            <option value="google-search">חיפוש בגוגל</option>
            <option value="recommendation-receive">קיבלתי המלצה </option>
            <option value="appstore-search">חיפוש בחנות אפליקציות</option>
            <option value="other business">ראיתי בעסק אחר</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default StepThree;
