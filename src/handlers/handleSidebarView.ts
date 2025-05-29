export const handleSidebarButtonClick = (e: React.MouseEvent<HTMLElement>, setActiveView: React.Dispatch<React.SetStateAction<string>>) => {
  const target = e.target as HTMLElement;
  const span = target.closest("span");
  if (span instanceof HTMLSpanElement) {
    const activeView = span.textContent;

    switch (activeView) {
      case "Appointments":
      case "Services":
      case "Payments":
      case "Customers":
      case "Integrations":
      case "General":
      case "Contact details":
      case "Location":
      case "Business hours":
      case "Social links":
        setActiveView(activeView);
        break;

      default:
        setActiveView("Appointments");
        break;
    }
  }
};
