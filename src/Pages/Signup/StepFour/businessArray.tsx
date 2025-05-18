import barberIcon from "/svgs/barber-chair-icon.svg";
import nailGelIcon from "/svgs/nail-gel-icon.svg";
import eyebrowIcon from "/svgs/eyebrowns-icon.svg";
import eyelashesIcon from "/svgs/eyelashes-icon.svg";
import skincareIcon from "/svgs/skin-care-icon.svg";
import hairDesignIcon from "/svgs/hair-design-icon.svg";
import hairRemovalIcon from "/svgs/hair-removal-icon.svg";
import makeupIcon from "/svgs/makeup-icon.svg";
import tattoIcon from "/svgs/tattoo-icon.svg";
import botoxIcon from "/svgs/botox-icon.svg";
import massgeIon from "/svgs/massage-icon.svg";
import dogIcon from "/svgs/dog-icon.svg";
import hollisticIcon from "/svgs/hollistic-icon.svg";
import dentistIcon from "/svgs/dentist-icon.svg";
import glassesIcon from "/svgs/glasses-icon.svg";
import fitnessIcon from "/svgs/fitness-icon.svg";

export const businessTypes = [
  {
    value: "ברבר / מספרת גברים",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={barberIcon} alt="barber chair icon" />
        <b>מספרת גברים / ברבר</b>
      </div>
    ),
  },
  {
    value: "ציפורניים",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={nailGelIcon} alt="nail gel icon" />
        <b>ציפורניים</b>
      </div>
    ),
  },
  {
    value: "גבות",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={eyebrowIcon} alt="eyebrowns icon" />
        <b>גבות</b>
      </div>
    ),
  },
  {
    value: "ריסים",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={eyelashesIcon} alt="eyelashes icon" />
        <b>ריסים</b>
      </div>
    ),
  },
  {
    value: "טיפוח עור",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={skincareIcon} alt="skincare icon" />
        <b>טיפוח עור</b>
      </div>
    ),
  },
  {
    value: "מעצבי שיער",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={hairDesignIcon} alt="hair design icon" />
        <b>מעצבי שיער</b>
      </div>
    ),
  },
  {
    value: "הסרת שיער",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={hairRemovalIcon} alt="hair removal icon" />
        <b>הסרת שיער</b>
      </div>
    ),
  },
  {
    value: "איפור",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={makeupIcon} alt="makeup icon" />
        <b>איפור</b>
      </div>
    ),
  },
  {
    value: "קעקועים ופירסינג",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={tattoIcon} alt="barber chair icon" />
        <b>קעקועים ופירסינג</b>
      </div>
    ),
  },
  {
    value: "עיסוי",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={massgeIon} alt="massage icon" />
        <b>עיסוי</b>
      </div>
    ),
  },
  {
    value: "הזרקות ומילויים",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={botoxIcon} alt="lips icon" />
        <b>הזרקות ומילויים</b>
      </div>
    ),
  },
  {
    value: "רפואה ורופאי שיניים",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={dentistIcon} alt="teeth icon" />
        <b>רפואה ורופאי שיניים</b>
      </div>
    ),
  },
  {
    value: "מספרה לכלבים",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={dogIcon} alt="dog icon" />
        <b>מספרה לכלבים</b>
      </div>
    ),
  },
  {
    value: "ייעוץ וטיפול הוליסטי",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={hollisticIcon} alt="hollistic threapy icon" />
        <b>ייעוץ וטיפול הוליסטי</b>
      </div>
    ),
  },
  {
    value: "פיטנס",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={fitnessIcon} alt="fitness icon" />

        <b>פיטנס</b>
      </div>
    ),
  },
  {
    value: "אופטיקה",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <img src={glassesIcon} alt="glasses icon" />
        <b>אופטיקה</b>
      </div>
    ),
  },
  {
    value: "אחר",
    icon: (
      <div className="flex flex-col items-center justify-center">
        <b>אחר</b>
      </div>
    ),
  },
];
