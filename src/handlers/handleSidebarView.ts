export const handleSidebarButtonClick = (e: React.MouseEvent<HTMLElement>, setActiveView: React.Dispatch<React.SetStateAction<string>>) => {
  const target = e.target as HTMLElement;
  const btn = target.closest("button");
  if (btn instanceof HTMLButtonElement) {
    const activeView = btn.dataset.value;

    switch (activeView) {
      case "calendar":
      case "profile":
      case "services":
      case "payments":
      case "customers":
      case "integrations":
      case "settings":
        setActiveView(activeView);
        break;

      default:
        setActiveView("calendar");
        break;
    }
  }
};
