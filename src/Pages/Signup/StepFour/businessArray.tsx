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
import otherIcon from "/svgs/other-icon.svg";

export const businessTypes = [
  {
    value: "ברבר / מספרת גברים",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={barberIcon} alt="barber chair icon" />
        <p>מספרת גברים / ברבר</p>
      </div>
    ),
  },
  {
    value: "ציפורניים",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={nailGelIcon} alt="nail gel icon" />
        <p>ציפורניים</p>
      </div>
    ),
  },
  {
    value: "גבות",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={eyebrowIcon} alt="eyebrowns icon" />
        <p>גבות</p>
      </div>
    ),
  },
  {
    value: "ריסים",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={eyelashesIcon} alt="eyelashes icon" />
        <p>ריסים</p>
      </div>
    ),
  },
  {
    value: "טיפוח עור",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={skincareIcon} alt="skincare icon" />
        <p>טיפוח עור</p>
      </div>
    ),
  },
  {
    value: "מעצבי שיער",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={hairDesignIcon} alt="hair design icon" />
        <p>מעצבי שיער</p>
      </div>
    ),
  },
  {
    value: "הסרת שיער",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={hairRemovalIcon} alt="hair removal icon" />
        <p>הסרת שיער</p>
      </div>
    ),
  },
  {
    value: "איפור",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={makeupIcon} alt="makeup icon" />
        <p>איפור</p>
      </div>
    ),
  },
  {
    value: "קעקועים ופירסינג",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={tattoIcon} alt="barber chair icon" />
        <p>קעקועים ופירסינג</p>
      </div>
    ),
  },
  {
    value: "עיסוי",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={massgeIon} alt="massage icon" />
        <p>עיסוי</p>
      </div>
    ),
  },
  {
    value: "הזרקות ומילויים",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={botoxIcon} alt="lips icon" />
        <p>הזרקות ומילויים</p>
      </div>
    ),
  },
  {
    value: "רפואה ורופאי שיניים",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={dentistIcon} alt="teeth icon" />
        <p>רפואה ורופאי שיניים</p>
      </div>
    ),
  },
  {
    value: "מספרה לכלבים",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={dogIcon} alt="dog icon" />
        <p>מספרה לכלבים</p>
      </div>
    ),
  },
  {
    value: "ייעוץ וטיפול הוליסטי",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={hollisticIcon} alt="hollistic threapy icon" />
        <p>ייעוץ וטיפול הוליסטי</p>
      </div>
    ),
  },
  {
    value: "פיטנס",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={fitnessIcon} alt="fitness icon" />
        <p>פיטנס</p>
      </div>
    ),
  },
  {
    value: "אופטיקה",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={glassesIcon} alt="glasses icon" />
        <p>אופטיקה</p>
      </div>
    ),
  },
  {
    value: "אחר",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300">
        <img src={otherIcon} alt="other icon" />

        <p>אחר</p>
      </div>
    ),
  },
];
