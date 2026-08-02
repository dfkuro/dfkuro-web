const KONAMI = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export function useKonamiCode(callback: () => void) {
  let index = 0;

  const handler = (e: KeyboardEvent) => {
    if (e.key === KONAMI[index]) {
      index++;
      if (index === KONAMI.length) {
        callback();
        index = 0;
      }
    } else {
      index = 0;
    }
  };

  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}
