export const handleSidebarButtonClick = (e: React.MouseEvent<HTMLElement>, setActiveView: React.Dispatch<React.SetStateAction<string>>) => {
  const target = e.target as HTMLElement;
  const btn = target.closest("button");
  if (btn instanceof HTMLButtonElement) {
    const activeView = btn.dataset.value;

    switch (activeView) {
      case "calendar":
        setActiveView("calendar");
        break;

      case "profile":
        setActiveView("profile");
        break;

      case "services":
        setActiveView("services");
        break;

      case "payments":
        setActiveView("payments");
        break;

      case "customers":
        setActiveView("customers");
        break;

      case "integrations":
        setActiveView("integrations");
        break;

      case "settings":
        setActiveView("settings");
        break;

      default:
        setActiveView("calendar");
        break;
    }
  }
};
