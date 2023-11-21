export async function delay(duration: number) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(true);
    }, duration);
  });
}
