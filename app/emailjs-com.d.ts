declare module "emailjs-com" {
    export interface SendFormResult {
      text: string;
    }
  
    export interface SendFormError {
      text: string;
    }
  
    export function sendForm(
      serviceID: string,
      templateID: string,
      form: HTMLFormElement,
      userID: string
    ): Promise<{ text: string }>;
  }
  