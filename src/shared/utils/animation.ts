export const getAnimationDelay = (index: number, baseDelay: number = 100) => {
  return `${index * baseDelay}ms`;
};

export const getTransitionClasses = (
  isVisible: boolean,
  baseClasses: string,
  visibleClasses: string,
  hiddenClasses: string
) => {
  return `${baseClasses} ${isVisible ? visibleClasses : hiddenClasses}`;
};