export interface ValidationState {
  isValid: boolean;
  error?: string;
}

export const isTextShort = (text: string) =>
  text.length >= 3 && text.length < 100;

export function validateSubject(subject?: string): ValidationState {
  if (!subject || subject.length === 0)
    return {
      isValid: false,
      error: "subject should not be empty",
    };
  else if (subject.length < 3 || subject.length > 100) {
    return {
      isValid: false,
      error: "subject should be between 3 and 100 characters",
    };
  } else return { isValid: true };
}

export function validateDetail(detail?: string) {
  if (!detail || detail.length === 0)
    return {
      isValid: false,
      error: "detail should not be empty",
    };
  else if (detail.length < 15 || detail.length > 1000)
    return {
      isValid: false,
      error: "detail should be between 15 and 1000 characters",
    };
  else return { isValid: true };
}
