
export function truncateString(text: string, maxLength: number, suffix: string = "..."): string {
    try {
      // Validate input parameters
      if (typeof text !== "string") {
        throw new Error("Invalid input: 'text' must be a string.");
      }
      if (typeof maxLength !== "number" || maxLength <= 0) {
        throw new Error("Invalid input: 'maxLength' must be a positive number.");
      }
      if (typeof suffix !== "string") {
        throw new Error("Invalid input: 'suffix' must be a string.");
      }
  
      // Ensure the string isn't longer than maxLength
      if (text.length <= maxLength) {
        return text;
      }
  
      // Calculate the truncation length
      const truncatedLength = maxLength - suffix.length;
  
      // Handle edge cases where maxLength is less than the suffix length
      if (truncatedLength <= 0) {
        return suffix.slice(0, maxLength);
      }
  
      // Return the truncated string with the suffix appended
      return text.slice(0, truncatedLength) + suffix;
    } catch (error) {
      console.error("Error in truncateString:", error);
      return ""; // Return an empty string as a fallback
    }
}