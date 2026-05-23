import React, { useActionState } from 'react';
import ShimmerButton from './ShimmerButton';

interface FormState {
  success: boolean | null;
  message: string;
}

async function sendContactForm(_prevState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Please fill in all required fields (*) marked.',
    };
  }

  try {
    const response = await fetch("https://formsubmit.co/ajax/tegarramdhanicode@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        subject: subject || "New Contact Form Inquiry",
        message
      })
    });

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    const result = await response.json();
    
    if (result.success === "true" || result.success === true) {
      return {
        success: true,
        message: `Thank you, ${name}! Your message has been sent successfully.`,
      };
    } else {
      return {
        success: false,
        message: result.message || 'Submission failed. Please try again.',
      };
    }
  } catch (error: any) {
    console.error('Error sending form:', error);
    return {
      success: false,
      message: 'An error occurred while sending your message. Please try again later.',
    };
  }
}

export const ContactForm: React.FC = () => {
  const [state, formAction, isPending] = useActionState(sendContactForm, {
    success: null,
    message: '',
  });

  return (
    <form action={formAction} noValidate>
      <div className="flex flex-col gap-4">
        {state.success && (
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm px-4 py-3 rounded-xl">
            {state.message}
          </div>
        )}
        {state.success === false && (
          <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-sm px-4 py-3 rounded-xl">
            {state.message}
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fname" className="block text-xs font-medium text-zinc-400 mb-1.5">
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Jane Smith"
              required
              autoComplete="name"
              disabled={isPending}
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="femail" className="block text-xs font-medium text-zinc-400 mb-1.5">
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="femail"
              name="email"
              placeholder="jane@company.com"
              required
              autoComplete="email"
              disabled={isPending}
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
            />
          </div>
        </div>
        <div>
          <label htmlFor="fsubject" className="block text-xs font-medium text-zinc-400 mb-1.5">
            Subject
          </label>
          <input
            type="text"
            id="fsubject"
            name="subject"
            placeholder="Project inquiry"
            disabled={isPending}
            className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="fmessage" className="block text-xs font-medium text-zinc-400 mb-1.5">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="fmessage"
            name="message"
            rows={4}
            placeholder="Tell me about your project..."
            required
            disabled={isPending}
            className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-50"
          />
        </div>
        
        <ShimmerButton
          type="submit"
          className="w-full justify-center bg-accent text-white font-display font-bold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors disabled:opacity-50"
          disabled={isPending}
        >
          {isPending ? 'Sending message...' : 'Send message →'}
        </ShimmerButton>
      </div>
    </form>
  );
};
export default ContactForm;
