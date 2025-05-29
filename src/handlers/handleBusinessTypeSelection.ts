export const handleBusinessTypesSelection = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  maxToSelect: number,
  setMaxToSelect: React.Dispatch<React.SetStateAction<number>>,
) => {
  const target = e.target as HTMLElement;
  const el = target.closest("[data-value]");
  if (!el) return;

  const elValue = (el as HTMLElement).dataset.value;
  if (!elValue) return;

  if (el?.classList.contains("selected")) {
    el.classList.remove("selected");
    setMaxToSelect((prev) => prev + 1);
  } else if (maxToSelect > 0) {
    el?.classList.add("selected");
    setMaxToSelect((prev) => prev - 1);
  }
};
