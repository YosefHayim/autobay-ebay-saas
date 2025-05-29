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
    value: "Mens Barber",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="mens-barber">
        <img src={barberIcon} alt="barber chair icon" />
        <p>Mens Barber</p>
      </div>
    ),
  },
  {
    value: "Nails",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="nails">
        <img src={nailGelIcon} alt="nail gel icon" />
        <p>Nails</p>
      </div>
    ),
  },
  {
    value: "Eyebrowns",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="eye-browns">
        <img src={eyebrowIcon} alt="eyebrowns icon" />
        <p>Eyebrowns</p>
      </div>
    ),
  },
  {
    value: "Eyelashes",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="eyelashes">
        <img src={eyelashesIcon} alt="eyelashes icon" />
        <p>Eyelashes</p>
      </div>
    ),
  },
  {
    value: "Skincare",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="skincare">
        <img src={skincareIcon} alt="skincare icon" />
        <p>Skincare</p>
      </div>
    ),
  },
  {
    value: "Hair designers",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="hair-designers">
        <img src={hairDesignIcon} alt="hair design icon" />
        <p>Hair designers</p>
      </div>
    ),
  },
  {
    value: "Hair removal",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="hair-removal">
        <img src={hairRemovalIcon} alt="hair removal icon" />
        <p>Hair removal</p>
      </div>
    ),
  },
  {
    value: "Makeup",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="makeup">
        <img src={makeupIcon} alt="makeup icon" />
        <p>Makeup</p>
      </div>
    ),
  },
  {
    value: "earring and tatto",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="earring-and-tatto">
        <img src={tattoIcon} alt="barber chair icon" />
        <p>earring and tatto</p>
      </div>
    ),
  },
  {
    value: "Massage",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="massage">
        <img src={massgeIon} alt="massage icon" />
        <p>Massage</p>
      </div>
    ),
  },
  {
    value: "Botox and fillings",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="botox-and-fillings">
        <img src={botoxIcon} alt="lips icon" />
        <p>Botox and fillings</p>
      </div>
    ),
  },
  {
    value: "Doctors and dentists",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="dentist">
        <img src={dentistIcon} alt="teeth icon" />
        <p>Doctors and dentists</p>
      </div>
    ),
  },
  {
    value: "Barber dog",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="barber-dog">
        <img src={dogIcon} alt="dog icon" />
        <p>Barber dog</p>
      </div>
    ),
  },
  {
    value: "Consulating and threapy hollistic",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="threapy-hollistic">
        <img src={hollisticIcon} alt="hollistic threapy icon" />
        <p>Consulating and threapy hollistic</p>
      </div>
    ),
  },
  {
    value: "Fitness",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="fitness">
        <img src={fitnessIcon} alt="fitness icon" />
        <p>Fitness</p>
      </div>
    ),
  },
  {
    value: "Optics",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="optics">
        <img src={glassesIcon} alt="glasses icon" />
        <p>Optics</p>
      </div>
    ),
  },
  {
    value: "Other",
    children: (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gray-300" data-value="other">
        <img src={otherIcon} alt="other icon" />

        <p>Other</p>
      </div>
    ),
  },
];
