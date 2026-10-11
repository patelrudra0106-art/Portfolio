import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';
import { contact } from '../data/contact';

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'invalid';

const fieldClass =
  'w-full rounded-[20px] border-2 border-[#D7E2EA]/60 bg-transparent px-5 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 ' +
  'focus:outline-none focus:border-[#D7E2EA] focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/40';

export const ContactForm = () => {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    // Honeypot: real visitors never fill this hidden field.
    if (data.get('botcheck')) return;

    if (!name || !email || !message) {
      setStatus('invalid');
      return;
    }

    const accessKey = contact.formAccessKey;

    // The message is always sent from the site itself; without a key it cannot be sent.
    if (!accessKey) {
      console.error('Contact form: Web3Forms access key is missing.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio message from ${name}`,
          name,
          email,
          message,
        }),
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !json.success) throw new Error(json.message || 'Submit failed');
      form.reset();
      setStatus('sent');
    } catch (err) {
      console.error('Contact form submit failed:', err);
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 flex flex-col gap-4 rounded-[28px] border-2 border-[#D7E2EA] p-5 sm:mt-14 sm:rounded-[40px] sm:p-8"
    >
      <h3 className="text-[#D7E2EA] font-black uppercase tracking-tight text-[clamp(1.5rem,4vw,2.5rem)]">
        Send a message
      </h3>

      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <label className="flex flex-col gap-2 text-sm font-light uppercase tracking-wider text-[#D7E2EA]/70">
        Name
        <input name="name" type="text" required maxLength={80} autoComplete="name" className={fieldClass} />
      </label>
      <label className="flex flex-col gap-2 text-sm font-light uppercase tracking-wider text-[#D7E2EA]/70">
        Email
        <input name="email" type="email" required maxLength={120} autoComplete="email" className={fieldClass} />
      </label>
      <label className="flex flex-col gap-2 text-sm font-light uppercase tracking-wider text-[#D7E2EA]/70">
        Message
        <textarea name="message" required rows={5} maxLength={2000} className={`${fieldClass} resize-y`} />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3
            font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200
            hover:bg-[#D7E2EA]/10 disabled:opacity-50
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
        >
          {status === 'sending' ? 'Sending...' : 'Send'}
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
        <p role="status" aria-live="polite" className="text-sm text-[#D7E2EA]/80">
          {status === 'sent' && 'Thanks! Your message was sent.'}
          {status === 'error' && `Could not send. Please email ${contact.email} instead.`}
          {status === 'invalid' && 'Please fill out all fields before sending.'}
        </p>
      </div>
    </form>
  );
};