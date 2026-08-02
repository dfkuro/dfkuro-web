import { scroll, animate } from 'motion';

export function useScrollReveal(
  selector: string,
  options?: { stagger?: number; y?: number }
) {
  const stagger = options?.stagger ?? 0.05;
  const y = options?.y ?? 20;

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const animations = new Map<Element, ReturnType<typeof scroll>>();

  elements.forEach((el, i) => {
    // Set initial state
    (el as HTMLElement).style.opacity = '0';
    (el as HTMLElement).style.transform = `translateY(${y}px)`;

    const anim = scroll(
      animate(el, {
        opacity: [0, 1],
        y: [y, 0],
      }),
      {
        target: el,
        offset: [`start ${0.85 + i * stagger}`, `start 0.6`],
      }
    );

    animations.set(el, anim);
  });

  return () => {
    animations.forEach((anim) => anim());
  };
}
