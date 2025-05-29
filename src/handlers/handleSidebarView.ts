export const handleSidebarButtonClick = (e: React.MouseEvent<HTMLElement>, setActiveView: React.Dispatch<React.SetStateAction<string>>) => {
  const target = e.target as HTMLElement;
  const btn = target.closest("button");
  if (btn instanceof HTMLButtonElement) {
    const activeView = btn.dataset.value;

    switch (activeView) {
      case "Appointments":
      case "Services":
      case "Payments":
      case "Customers":
      case "Integrations":
      case "Settings":
        setActiveView(activeView);
        break;

      default:
        setActiveView("Appointments");
        break;
    }
  }
};
