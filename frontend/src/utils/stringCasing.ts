export function convertStringCase(
  str: string,
  format: "lower" | "upper" | "capital"
): string {
  switch (format) {
    case "lower":
      return str.toLowerCase();
    case "upper":
      return str.toUpperCase();
    case "capital":
      return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    default:
      throw new Error(`Unknown format: ${format}`);
  }
}
